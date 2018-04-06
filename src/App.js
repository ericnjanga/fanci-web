
import './assets/jslibs/material.js';
/* (getmdl-select.js incorporated into material.js) import './assets/jslibs/getmdl-select.js'; */
// import './assets/jslibs/popper.min.js';
import jquery from 'jquery';

   

import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
//Components ...
import TemplateAuth from './components/TemplateAuth.js';
import TemplateMain from './components/TemplateMain.js';

import Map from './components/Map.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Aroundus from './components/Aroundus.js';
import Profile from './components/Profile.js';
import Privacy from './components/Privacy.js';

import FanciItem from './components/FanciItem.js';
import ProfileForm from './components/ProfileForm.js';
import ModalLocation from './components/ModalLocation.js';
import ModalPost from './components/ModalPost.js';





//Material Design Lite 
import './assets/csslibs/google-fonts.css';
import './assets/csslibs/material.grey-orange.min.css';
import './assets/csslibs/material-icon.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
          <TestingLinks />
          <main> 
            {/*<ModalPost />*/}
            {/*<ModalLocation />*/} 
            <ProfileForm />
            <FanciItem />


            {/*
              <Route exact={true} path="/" component={PageComponent} /> 
              <Route path="/:id" component={PageComponent} />*/
            } 
            
          </main>
        </div> 
      </Router>   
    );
  }
}



/**
 * Renders the appropriate page component and its wrapper based on the params id
 * "login" and "register" have a similar look (same wrapper)
 * The other pages have a similar look (same wrapper)
 * Any unmatching param is redirected to "home" page
*/
const PageComponent = ({ match }) => {
  //Redirect to home page if there is no match
  if(!/\bhome\b|\blogin\b|\bregister\b|\baround-us\b|\bprofile\b|\bprivacy\b/.test(match.params.id)){
    return <Redirect to="/home" />;
  }
 
  const wrappers = {
    auth : TemplateAuth,
    main : TemplateMain
  };
  const components = {
    home: Map,
    login: Login,
    register: Register,
    'around-us': Aroundus,
    profile: Profile,
    privacy: Privacy, 
  };
  const wrapperID = (/\blogin\b|\bregister\b/.test(match.params.id))?'auth':'main';
  const Wrapper = wrappers[wrapperID];
  const Page = components[match.params.id];
    
  return ( 
    <Wrapper>
      <Page />
    </Wrapper> 
  );
}



/**
 * Main navigation
*/
const TestingLinks = () => {
  return(
    <nav className="test-links">
      <ul>
        <li>
          <Link to={`/`}>
            Home
          </Link>
        </li> 
        <li>
          <Link to={`/login`}>
            Login
          </Link>
        </li>
        <li>
          <Link to={`/register`}>
            Register
          </Link>
        </li>
        <li>
          <Link to={`/around-us`}>
            Around Us
          </Link>
        </li>
        <li>
          <Link to={`/profile`}>
            Profile
          </Link>
        </li>
        <li>
          <Link to={`/privacy`}>
            Privacy
          </Link>
        </li>
        
      </ul>
    </nav>
  ); 
}



export default App;
