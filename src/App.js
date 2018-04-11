
// import './assets/jslibs/material.js';
/* (getmdl-select.js incorporated into material.js) import './assets/jslibs/getmdl-select.js'; */
// import './assets/jslibs/popper.min.js';
// import jquery from 'jquery';

   

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';




// //Material Design Lite 
// import './assets/csslibs/google-fonts.css';
// import './assets/csslibs/material.grey-orange.min.css';
// import './assets/csslibs/material-icon.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
             
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <main>
            <Sidebar />
            <div className="center">
              <Route exact={true} path="/" render={()=>(
                <h1>Welcome</h1>
              )} />
              
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/around-us" component={Aroundus} /> 
              <Route path="/profile" component={Profile} /> 
              <Route path="/privacy" component={Privacy} /> 
            </div>
          </main>
        </div>
      </Router>
    );
  }
}


const Sidebar = () => {

  return(
    <aside>
      <ul>
        <li>
          <Link to={`/`}>
            <a href="#">Home</a>
          </Link>
        </li>
        <li>
          <Link to={`/login`}>
            <a href="#">Login</a>
          </Link>
        </li>
        <li>
          <Link to={`/register`}>
            <a href="#">Register</a>
          </Link>
        </li>
        <li>
          <Link to={`/around-us`}>
            <a href="#">Around Us</a>
          </Link>
        </li>
        <li>
          <Link to={`/profile`}>
            <a href="#">Profile</a>
          </Link>
        </li>
        <li>
          <Link to={`/privacy`}>
            <a href="#">Privacy</a>
          </Link>
        </li>
      </ul>
    </aside>
  ); 
}


const Login = () => {
  return(
    <div className="linkContent">
      <h2>Login</h2>
    </div>
  );
}

const Register = () => {
  return(
    <div className="linkContent">
      <h2>Register</h2>
    </div>
  );
}

const Aroundus = () => {
  return(
    <div className="linkContent">
      <h2>Around us</h2>
    </div>
  );
}

const Profile = () => {
  return(
    <div className="linkContent">
      <h2>Profile</h2>
    </div>
  );
}

const Privacy = () => {
  return(
    <div className="linkContent">
      <h2>Privacy</h2>
    </div>
  );
}

export default App;
