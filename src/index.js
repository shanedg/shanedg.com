import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Cookies from 'js-cookie';

const cookieConsentValue = Cookies.get('cookie_consent');
let alreadyAsked = false;
if (cookieConsentValue !== undefined) {
  alreadyAsked = true;
} else {
  alreadyAsked = false;
}

const consent = {
  alreadyAsked: alreadyAsked,
  consentGranted: alreadyAsked ? cookieConsentValue === 'true' : false
};

ReactDOM.render(<App consent={consent} />, document.getElementById('root'));
registerServiceWorker();
