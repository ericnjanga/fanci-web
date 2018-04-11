// Libraries ...
import './assets/jslibs/material.js';
/* (getmdl-select.js incorporated into material.js) import './assets/jslibs/getmdl-select.js'; */
// import './assets/jslibs/popper.min.js';
import jquery from 'jquery';

//React Packages ...
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//React Components ...
import DrawerNav from './components__layout/DrawerNav.js';
import MainHeader from './components__layout/MainHeader.js';
import Sidebar from './components__layout/Sidebar.js';

//Main Stylesheet ...
import './App.css';

class App extends Component {
  render() {
    return (
      <Router> 
        <div className="mdl-layout mdl-js-layout mdl-layout--no-drawer-button">
          <DrawerNav />
          <main className="mdl-layout__content"> 
            <section className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
              <MainHeader /> 
              <main className="main-content">
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
            </section>{/* mdl-tabs */}
          </main>{/* mdl-layout__content */}
        </div>{/* mdl-layout */}
      </Router>
    );
  }
}//[end] App
 



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
