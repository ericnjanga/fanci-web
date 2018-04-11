import React from 'react';

const Register = () => {
  return( 
    <form action="#">
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="input-email" />
        <label className="mdl-textfield__label" htmlFor="input-email">Email Address</label>
      </div>

      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="input-confirm-email" />
        <label className="mdl-textfield__label" htmlFor="input-confirm-email">Confirm Email Address</label>
      </div> 

      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="input-password" />
        <label className="mdl-textfield__label" htmlFor="input-password">Password</label>
      </div>

      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
        <input className="mdl-textfield__input" type="text" id="input-confirm-password" />
        <label className="mdl-textfield__label" htmlFor="input-confirm-password">Confirm Password</label>
      </div>

      <a href="home.html"  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect">Register</a> 
    </form> 
  );
}

export default Register;