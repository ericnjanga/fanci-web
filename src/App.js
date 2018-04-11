
import './assets/jslibs/material.js';
/* (getmdl-select.js incorporated into material.js) import './assets/jslibs/getmdl-select.js'; */
// import './assets/jslibs/popper.min.js';
import jquery from 'jquery';

   

import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link, Route, Redirect } from 'react-router-dom';



//Main Stylesheet
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


const DrawerNav = () => {
  return(
    <div className="mdl-layout__drawer">
      <div className="mdl-layout-title">
        <img src="./images/rsz_avatar3.jpg" alt="" className="fanci-avatar fanci-avatar__medium" />
        <h3>User Name</h3>
        <h4>
          email@address.com
        </h4>
        <ul className="mdl-layout-info">
          <li>
            <span>14</span> Fancies
          </li>
          <li>
            <span>37</span> Participants
          </li>
        </ul> 
      </div>

      <hr />

      <nav className="mdl-navigation">
        <Link to={`/profile`} className="mdl-navigation__link mdl-navigation__profile">
          <i className="material-icons">person</i> Profile
        </Link>
        <Link to={`/privacy`} className="mdl-navigation__link mdl-navigation__privacy">
          <i className="material-icons">info_outline</i> Privacy
        </Link> 
      </nav>

      <hr />

      <div className="mdl-navigation">
        <p className="mdl-navigation__link">Copyright &copy; 2018</p>
      </div> 
    </div>
  );
}//[end] DrawerNav


const MainTabs = () => {
  return(
    <div className="mdl-tabs__tab-bar">
      <nav>
        <NavLink exact={true} to={`/`} className="mdl-tabs__tab" activeClassName="is-active">
          <i className="material-icons">home</i>
        </NavLink>
        <NavLink to={`/around-us`} className="mdl-tabs__tab" activeClassName="is-active"> 
          <i className="material-icons mdl-badge mdl-badge--overlap" data-badge="25">notifications</i>
        </NavLink>
        <NavLink to={`/profile`} className="mdl-tabs__tab" activeClassName="is-active">
          <i className="material-icons">person</i>
        </NavLink>
        {/*
        <a href="#home-panel" className="mdl-tabs__tab is-active"> 
          <i className="material-icons">home</i>
        </a> 
        <a href="#aroundus-panel" className="mdl-tabs__tab"> 
          <i className="material-icons mdl-badge mdl-badge--overlap" data-badge="25">notifications</i>
        </a>
        <a href="#profile-panel" className="mdl-tabs__tab"> 
          <i className="material-icons">person</i>
        </a> 
        */}
      </nav>
    </div>
  );
}//[end] MainTabs


const MainHeader = () => {
  return(
    <header className="app-header">
      <h1 className="app-header__title">
        Fanci <i className="material-icons">person_pin</i>
      </h1>

      <div className="app-header__search mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
        <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="fixed-header-drawer-exp">
          <i className="material-icons">search</i>
        </label>
        <div className="mdl-textfield__expandable-holder">
          <input className="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp" />
        </div>
      </div>

      <MainTabs />

      <div className="mdl-layout-spacer"></div> 
    </header>
  );
}//[end] MainHeader


const Sidebar = () => {
  return(
    <aside>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/login`}>Login</Link>
        </li>
        <li>
          <Link to={`/register`}>Register</Link>
        </li>
        <li>
          <Link to={`/around-us`}>Around Us</Link>
        </li>
        <li>
          <Link to={`/profile`}>Profile</Link>
        </li>
        <li>
          <Link to={`/privacy`}>Privacy</Link>
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
