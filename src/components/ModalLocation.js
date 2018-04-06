import React from 'react';

class ModalLocation extends React.Component {

	render(){
		return(
			<section id="modal-location" className="fanci-modal"> {/* style={{display:none}}*/}
	      <div className="fanci-item mdl-card mdl-shadow--2dp">
	        <header className="fanci-item__header border-bottom"> 
	          <div className="fanci-item__header-meta">
	            <h4 className="fanci-item__header-title">
	              To find your Fanci:
	            </h4> 
	          </div>
	        </header>
	       
	        <div className="mdl-card__supporting-text">  
	          <form className="form-location">  
	            <label className="location-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-1">
	              <input type="radio" id="list-option-1" className="mdl-radio__button" name="current-location" value="1" checked /> 
	              Use my current location
	            </label>
	          
	            <label className="location-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" htmlFor="list-option-2">
	              <input type="radio" id="list-option-2" className="mdl-radio__button" name="current-location" value="0" /> 
	              Use a different location
	            </label>
	 
	            <div id="form-location__custom" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">{/* style={{display:none}}*/}
	              <input className="mdl-textfield__input" type="text" id="sample3" />
	              <label className="mdl-textfield__label" htmlFor="sample3">Type your location here ...</label>
	            </div>
	             
	            <button id="form-location__btn-submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"> {/* style={{margin-top: 30px; min-width: 120px;}}*/}
	              Search
	            </button>
	          </form> 
	        </div> 
	      </div> 
	    </section>
		);
	}
}

export default ModalLocation;