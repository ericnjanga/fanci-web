import React from 'react';
import { NavLink } from 'react-router-dom'; 

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
      </nav>
    </div>
  );
}//[end] MainTabs

export default MainTabs;