import React from 'react';
import { Link } from 'react-router-dom';

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

export default DrawerNav;
  