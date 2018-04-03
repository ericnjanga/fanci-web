import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//Components ...
import AuthPage from './components/AuthPage.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Aroundus from './components/Aroundus.js';
import Profile from './components/Profile.js';
import Privacy from './components/Privacy.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"> 
            <TestingLinks />
          <main>
            
              <Route exact={true} path="/" render={()=>(
                <h1>Welcome</h1>
              )} />
              
              <Route path="/auth" render={()=>(
                <AuthPage>
                  <Route path="/auth/login" component={Login} />
                  <Route path="/auth/register" component={Register} />
                </AuthPage>
              )} />

              {/*
              <AuthPage>
                  <Route path="/auth/login" component={Login} />
                  <Route path="/auth/register" component={Register} />
                </AuthPage>
              */}
              
              <Route path="/around-us" component={Aroundus} /> 
              <Route path="/profile" component={Profile} /> 
              <Route path="/privacy" component={Privacy} /> 
             
          </main>
        </div>
      </Router>
    );
  }
}


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
          <Link to={`/auth/login`}>
            Login
          </Link>
        </li>
        <li>
          <Link to={`/auth/register`}>
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
