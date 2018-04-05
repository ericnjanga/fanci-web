import React from 'react';
import firebase from './firebase.js';


/**
 * Handles the display of the latest database records
 * -----------------------------------------------
 * Inspirations: 
 * -> https://css-tricks.com/intro-firebase-react/
*/
const FanciList = (props) => {
	return(
		<div className="fanci-list">
			<h1>Items List</h1>
		{
			props.items.map(item=>
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


export default FanciList;