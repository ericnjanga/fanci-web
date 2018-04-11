import React from 'react';


const Login = () => {
  return(
    <div className="linkContent"> 
      <form action="#">
        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-email" />
          <label className="mdl-textfield__label" htmlFor="input-email">Email Address</label>
        </div>

        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
          <input className="mdl-textfield__input" type="text" id="input-password" />
          <label className="mdl-textfield__label" htmlFor="input-password">Password</label>
        </div>

        <a href="home.html"  className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect"> Login</a> 
      </form>
      
      <footer>
        <p>Don`t have an account? Please <a href="register.html">register here</a>!</p> 
      </footer>
    </div>
  );
}

export default Login;