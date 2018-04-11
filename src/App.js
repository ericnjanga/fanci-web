// Libraries ...
import './assets/jslibs/material.js';
/* (getmdl-select.js incorporated into material.js) import './assets/jslibs/getmdl-select.js'; */
// import './assets/jslibs/popper.min.js';
// import jquery from 'jquery';

//Material Design Lite 
import './assets/csslibs/google-fonts.css';
import './assets/csslibs/material.grey-orange.min.css';
import './assets/csslibs/material-icon.css';
//React Packages ...
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

//React Components ...
import DrawerNav from './components__layout/DrawerNav.js';
import MainHeader from './components__layout/MainHeader.js';
import Sidebar from './components__layout/Sidebar.js';

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
import ProfileAvatar from './components/ProfileAvatar.js';

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

                  {/*<ModalPost />*/}
                  {/*<ModalLocation />*/} 
                  <ProfileAvatar />
                  <ProfileForm />
                  <FanciItem />


                  {/*
                    <Route exact={true} path="/" component={PageComponent} /> 
                    <Route path="/:id" component={PageComponent} />*/
                  } 
                  
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

 


export default App;
