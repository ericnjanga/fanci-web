import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
//Components ...
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


const TestingLinks = () => {

  return(
    <nav className="test-links">
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
    </nav>
  ); 
}


export default App;
