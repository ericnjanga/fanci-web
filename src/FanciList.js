import React from 'react';
import firebase, { auth, provider } from './firebase.js';


/**
 * Handles the display of the latest database records
 * -----------------------------------------------
 * Inspirations: 
 * -> https://css-tricks.com/intro-firebase-react/
*/
class FanciList extends React.Component {
	constructor(props){
		super(props);
		this.state = { 
			items : [],
			nbLimit: 20
		};
	}

	componentDidMount() {
		//Get the last [this.state.nbLimit] items from the database ...
		const itemsRef = firebase.database().ref('fanci-list').limitToLast(this.state.nbLimit);
		
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = []; 
			for(let item in items) {
				console.log('....item=', item);
				newState.push({
					key: item,
					email: items[item].email, 
					title: items[item].title, 
					expiry: items[item].expiry, 
					description: items[item].description, 
					image: items[item].image 
				});
			}
			//Save them in a descending order in the state 
			//(Firebase doens't offer a descending sorting order)
			//(Note ".orderByChild('date');" wasn't sorting like expected)
			this.setState({
				items: newState.reverse()
			});
		});
	}

	render() {
		return(
			<div className="fanci-list">
				<h1>Items List</h1>
			{
				this.state.items.map(item=>
					<div key={item.key} className="fanci-list-item">
						<div>email: {item.email}</div> 
						<div>title: {item.title}</div> 
						<div>expiry: {item.expiry}</div>
						<div>description: {item.description}</div> 
						<div>{item.image}</div>
					</div>
				)
			}
			</div>
		);
	}
}


export default FanciList;