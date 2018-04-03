import React from 'react';


const TemplateAuth = (props) => {
	return(
		<section className="auth-page"> 
		    <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header"> 
		      <main className="mdl-layout__content"> 
		        <section className="mdl-card mdl-card--auth">
		          <div className="mdl-card__supporting-text">
		            <h1 className="title">
		              Fanci 
		              <i className="material-icons">person_pin</i>
		            </h1>
		            
		            { props.children }
		          </div> 
		        </section> 
		      </main>
		    </div>
		</section>
	);
}

export default TemplateAuth;