import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Cookies from 'js-cookie';

const cookieConsent = Cookies.get('cookie_consent');
let priorConsent = false;
if (cookieConsent !== undefined) {
  priorConsent = true;
} else {
  priorConsent = false;
}

const consent = {
  priorConsent: priorConsent,
  consentGranted: priorConsent ? cookieConsent === 'true' : false
};

ReactDOM.render(<App consent={consent} />, document.getElementById('root'));
registerServiceWorker();
