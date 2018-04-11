import React from 'react';
import { Link } from 'react-router-dom';

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

export default Sidebar;