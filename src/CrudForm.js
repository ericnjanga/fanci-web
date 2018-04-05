import React from 'react'; 
import firebase from './firebase.js';


/**
 * Handles the submission of a new database record
 * -----------------------------------------------
 * Inspirations: 
 * -> https://css-tricks.com/intro-firebase-react/
 * -> https://css-tricks.com/firebase-react-part-2-user-authentication/
*/
class CrudForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: '',
			title: '',
			expiry: '3hr',
			description: '',
			image: '',
			defaultExpiry: '3hr',
			charTitleMin: 5,
			charDescriptionMin: 10,
			errorEmail: true,
			errorTitle: true,
			errorDescription: true, 
			formDirty: false,
			formDisabled: false,
			formValid: false
		}; 

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.validate = this.validate.bind(this);
	}


	handleChange(event) {
		// console.log(event.target.name, event.target.value);
		//...
		this.setState({
			formDirty : true,
			[event.target.name] : event.target.value
		});
		//...
		this.validate(event.target.name, event.target.value);
	}


	validate(name, value) {
		switch(name){
			case 'email':
				let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				this.setState((prevState, props)=>{
					errorEmail:!re.test(value)
				});
				// this.setState({ errorEmail:!re.test(value) });
				// console.log('.....email error[', this.state.errorEmail );
				break;
			case 'title':
				this.setState({ errorTitle:!(value.trim().length>this.state.charTitleMin) });
				// console.log('.....title valid[', !(value.trim().length>this.state.charTitleMin));
				break;
			case 'description':
				this.setState({ errorDescription:!(value.trim().length>this.state.charDescriptionMin) });
				// console.log('.....value[', value);
				break;  
		}
		const {errorEmail, errorTitle, errorDescription } = this.state;


			

		this.setState({ 
			formValid:(!errorEmail && !errorTitle && !errorDescription)
		});

				// console.log('.....formValid[', (!errorEmail && !errorTitle && !errorDescription) );
				// console.log('.>>>>formValid[', !errorEmail, !errorTitle, !errorDescription );
				// console.log('.....this.state.formValid [', this.state.formValid );

		
	}


	handleSubmit(event) {
		event.preventDefault();
		//...
		//...  
		this.setState({ formDisabled:true });
		//...
		const listRef = firebase.database().ref('fanci-list');
		const item = { 
			email: this.state.email, 
			title: this.state.title, 
			expiry: this.state.expiry, 
			description: this.state.description, 
			image: this.state.image,
			date: Date.now()
		};

		//...
		listRef.orderByChild('date').on("child_added", function(snapshot) {
		  console.log(snapshot.key + " was " + snapshot.val().date + " date");
		});




		//... 
		listRef.push(item, (error)=>{ 
			// console.log('...error=', error);
			// console.log('****...Item pushed', this );
			if(error){
				console.error('Error while pusing: ', error);
			}else{
				//...
				// console.log('****Submitted', this );

				this.setState((prevState, props) => {
					return {
						email: '', 
						title: '', 
						expiry: this.state.defaultExpiry, 
						description: '', 
						image: '',
						formDisabled: false,
						date : Date.now()
					}
				}); 
			}
		});//[end] listRef.push 
		 
	}//[end] handleSubmit


	/**
	 * NOTE
	 ******
	 * Form validation has a delay
	 * -> validation is happening on onChange for every input, but causes a delay
	 * -> Explore validation on keyPress
	*/


	render() {	
		const { errorEmail, errorTitle, errorDescription, formDirty, charDescriptionMin, formDisabled } = this.state;
		return(	
			<div className='crud-from'>
		        <header>
		            <div className='wrapper'>
		              <h1>New Fanci</h1> 
		            </div>
		        </header>
		        <div className='container'>
		          <section className='add-item'>
		              <form onSubmit={this.handleSubmit} noValidate>
		                <input type="email" name="email" placeholder="Email" onChange={this.handleChange} value={this.state.email} disabled={this.state.formDisabled} />
		                {
		                	formDirty && errorEmail && <p className="error">Invalid email</p>
		                }
		                
		                <input type="text" name="title" placeholder="title" onChange={this.handleChange} value={this.state.title} disabled={this.state.formDisabled} required />
		                {
		                	formDirty && errorTitle && <p className="error">Write at least {this.state.charTitleMin} Characters</p>
		                }

		                <select name="expiry" onChange={this.handleChange} value={this.state.expiry} disabled={this.state.formDisabled}> 
		                	<option value="3hr">3hr</option>
		                	<option value="10hr">10hr</option>
		                	<option value="1day">1day</option>
		                	<option value="1week">1week</option> 
		                </select>

		                <textarea name="description" ref="description" placeholder="description" onChange={this.handleChange} value={this.state.description} disabled={this.state.formDisabled} required></textarea>
		                {
		                	formDirty && errorDescription && <p className="error">Write at least {charDescriptionMin} Characters</p>
		                }

		                <input type="text" name="image" placeholder="image" disabled={this.state.formDisabled} />
		                
		                { 
		                	/*!this.state.formDisabled &&*/
		                	// <button disabled={!this.state.formValid}>
		                	// 	{this.state.formValid?'Publish':'Fill form'}
		                	// </button> 
		                	<button>
		                		Publish
		                	</button> 
		                }
		                { 
		                	formDisabled && <button disabled={formDisabled}>... Wait a moment ...</button>
		                }
		                
		              </form>
		          </section>
		          <section className='display-item'>
		            <div className='wrapper'>
		              <ul>
		              </ul>
		            </div>
		          </section>
		        </div>
		    </div>
		);
	}
}

export default CrudForm;