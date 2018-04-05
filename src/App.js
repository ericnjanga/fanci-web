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
      user: null,
      items : [],
      nbLimit: 20
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
    //Checks every single time the app loads to see if the user 
    //was already signed in last time they visited your app. 
    //If they were, sign them back in.
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });

    //Get the last [this.state.nbLimit] items from the database ...
    const itemsRef = firebase.database().ref('fanci-list').limitToLast(this.state.nbLimit); 
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = []; 
      for(let item in items) {
        console.log('....item=', item);
        newState.push({
          key: item,
          email: items[item].email, 
          title: items[item].title, 
          expiry: items[item].expiry, 
          description: items[item].description, 
          image: items[item].image 
        });
      }
      //Save them in a descending order in the state 
      //(Firebase doens't offer a descending sorting order)
      //(Note ".orderByChild('date');" wasn't sorting like expected)
      this.setState({
        items: newState.reverse()
      });
    });
  }



  render() {
    const { user, items } = this.state;
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
                <div>
                  {user ?
                    <button onClick={this.logout}>Log Out</button>                
                    :
                    <button onClick={this.login}>Log In</button>              
                  }
                </div>
                {user &&
                  <div>
                    <img className="user-avatar" src={user.photoURL} alt={user.displayName} />
                  </div> 
                }
              </nav>

              {!user && <h1>Please login</h1> } 

              {user && <div>
                  <CrudForm />
                  <FanciList items={items} />
                </div>
              } 
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
