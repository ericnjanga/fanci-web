import React from 'react';

const TemplateMain = (props) => {
	return (
		<main className="template-main"> 
			<h1> template main </h1>
			<div>{props.children}</div>
		</main>
	)
}

export default TemplateMain;