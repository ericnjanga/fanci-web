import React from 'react';

const TemplateMain = (props) => {
	return (
		<main className="template-main"> 
			<h1> template main </h1>
			<p>{props.children}</p>
		</main>
	)
}

export default TemplateMain;