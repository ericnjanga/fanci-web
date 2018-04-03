import React from 'react';

const TemplateMain = () => {
	render(props){
		<section>
			<h1> template main </h1>
			{props.children}
		</section>
	}
}

export default TemplateMain;