import React from 'react';
import MainTabs from './MainTabs.js';

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

export default MainHeader;