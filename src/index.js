import React from 'react';
import ReactDOM from 'react-dom';


//Material Design Lite 
import './assets/csslibs/google-fonts.css';
import './assets/csslibs/material.grey-orange.min.css';
import './assets/csslibs/material-icon.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
