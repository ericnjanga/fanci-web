import React from 'react';
import './FanciModal.css';
import './ModalPost.css';

const ModalPost = () => {
	return( 
    <section id="modal-post" className="fanci-modal fanci-modal--post"> {/* style="display:none;"*/}
      <div className="fanci-modal__box mdl-card mdl-shadow--2dp"> 
        	
      	{
      		true && <button className="fanci-modal__btn-close modal-post__btn-dismiss mdl-button mdl-js-button mdl-button--fab">
					          <i className="material-icons">close</i>
					        </button>
      	} 

        <header className="fanci-item__header border-bottom"> 
          <div className="fanci-item__header-meta">
            <h4 className="fanci-item__header-title">
              To find your Fanci:
            </h4> 
          </div>
        </header>
       
        <div className="mdl-card__supporting-text">  
          
          <form className="form-post"> 
            <img src="./images/rsz_avatar3.jpg" alt="" className="fanci-avatar fanci-avatar__small" />
           
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="fanci-post-title" />
              <label className="mdl-textfield__label" htmlFor="fanci-post-title">Fanci: (title)</label> 
            </div> 

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select">
              <input type="text" value="" className="mdl-textfield__input" id="fanci-post--duration" readonly />
              <input type="hidden" value="" name="fanci-post--duration" />
              <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
              <label htmlFor="fanci-post--duration" className="mdl-textfield__label">Duration</label>
              <ul htmlFor="fanci-post--duration" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                  <li className="mdl-menu__item" data-val="3h">3 hr</li>
                  <li className="mdl-menu__item" data-val="10h">10 hr</li>
                  <li className="mdl-menu__item" data-val="1d">1 day</li>
                  <li className="mdl-menu__item" data-val="1w">1 week</li>
              </ul>
            </div> 

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input" type="text" id="fanci-post-location" />
              <label className="mdl-textfield__label" htmlFor="fanci-post-location">Location</label> 
            </div> 

            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <textarea className="mdl-textfield__input" type="text" rows="5" id="fanci-post-description"></textarea>
              <label className="mdl-textfield__label" htmlFor="fanci-post-description">Describe your Fanci</label>
            </div>

            <div className="fanci-modal__spacer">
              <button className="fanci-modal--post__addimage fanci-modal__icon mdl-button mdl-js-button" id="fanci-post-image">
                <i className="material-icons">add_a_photo</i> <span>Add an image</span>
              </button>
            </div>

           
            <button id="modal-post__btn-submit" className="fanci-modal__btnsubmit modal-post__btn-dismiss mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Publish
            </button>
              
          </form> 
        </div> 
      </div> 
    </section>
	);
}


export default ModalPost;