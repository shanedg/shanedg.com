import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
  consentGranted: alreadyAsked ? cookieConsentValue === 'true' : false,
};

ReactDOM.render(<App consent={consent} />, document.getElementById('root'));
serviceWorker.register();
