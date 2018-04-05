import React from 'react';
import firebase from './firebase';


class FanciList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items : []
		};
	}

	componentDidMount() {
		const itemsRef = firebase.database().ref('fanci-list');
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
			this.setState({
				items: newState
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