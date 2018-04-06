import React from 'react';
import './FanciItem.css';



const FanciItem = (props) => {

	return( 
    <div className="fanci-item mdl-card mdl-shadow--2dp">
      <header className="fanci-item__header">
        <img src="./images/rsz_avatar3.jpg" alt="" className="fanci-item__avatar fanci-avatar fanci-avatar__small" />

        <div className="fanci-item__header-meta">
          <h4 className="fanci-item__header-title">
            vskvwnv wefiejfwefew
          </h4>
          <div className="fanci-item__header-date">
            July 14, 2018
          </div>
        </div>
      </header>
      <div className="mdl-card__title mdl-card--expand">
      	{/*<img src="./images/post1.jpg" alt="">*/}
      </div>
      <div className="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nulla soluta, ullam corrupti maiores repudiandae delectus, labore nihil.
      </div>
      <div className="mdl-card__actions mdl-card--border">
        <ul className="fanci-item__meta-links">
          <li>
            <a href="#">
              <i className="material-icons">date_range</i>
              <ul className="material-icons-info">
                <li>When</li>
                <li>April 18, 2018</li>
              </ul> 
            </a>
          </li>

          <li>
            <a href="#">
              <i className="material-icons">person</i>
              <ul className="material-icons-info">
                <li>Going</li>
                <li>33</li>
              </ul>  
            </a>
          </li>
          <li>
            <a href="#">
              <i className="material-icons">person_pin_circle</i>
              <ul className="material-icons-info">
                <li>Location</li>
                <li>105 Park Jolie Bouquet</li>
              </ul>  
            </a>
          </li>
        </ul> 
      </div>
      <div className="fanci-item__footer mdl-card__actions">
        <button className="fanci-item__btn-optin mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          I`m interested
        </button>
      </div>
    </div>
	);
};

export default FanciItem;