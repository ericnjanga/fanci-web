import React from 'react';

class ProfileForm extends React.Component {

	render(){
		return( 
      <div className="mdl-card mdl-shadow--2dp"> 
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-name" />
          <label className="mdl-textfield__label" htmlFor="input-name">User Name</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-email" />
          <label className="mdl-textfield__label" htmlFor="input-email">Email Address</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-phone" />
          <label className="mdl-textfield__label" htmlFor="input-phone">Phone Number</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <textarea className="mdl-textfield__input" type="text" rows= "3" id="input-description"></textarea>
          <label className="mdl-textfield__label" htmlFor="input-description">Description</label>
        </div>

        <div>
          <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="checkbox-2">
            <input type="checkbox" id="checkbox-2" className="mdl-checkbox__input" />
            <span className="mdl-checkbox__label">Visible to everyone</span>
          </label>
        </div>
      </div>
		);
	}
}

export default ProfileForm;