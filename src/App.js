import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import logo from './logo.svg';
import './team-firebase.css';

import CrudForm from './CrudForm.js';
import FanciList from './FanciList.js';

import firebase, { auth, provider } from './firebase.js';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }


  login(){
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    }); 
  }


  logout(){
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    }); 
  }



  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }



  render() {
    return (
      <Router>
        <div className="App">
          {/*<header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>*/}
          <main>
            <div className="team-firebase">
              <nav>
                {this.state.user ?
                  <button onClick={this.logout}>Log Out</button>                
                  :
                  <button onClick={this.login}>Log In</button>              
                }
              </nav>
              <CrudForm />
              <FanciList />
            </div>
            {/*
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
          */}
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
