import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Cookies from 'js-cookie';
import { BrowserRouter } from 'react-router-dom';

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

ReactDOM.render(
  <BrowserRouter>
    <App consent={consent} />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
