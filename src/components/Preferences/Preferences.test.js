import React from 'react';
import ReactDOM from 'react-dom';
import Preferences from './Preferences';

it('renders without crashing (initial, no consent)', () => {
  const div = document.createElement('div');
  const consent = {
    priorConsent: false,
    consentGranted: false
  };
  ReactDOM.render(<Preferences consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent denied)', () => {
  const div = document.createElement('div');
  const consent = {
    priorConsent: true,
    consentGranted: false
  };
  ReactDOM.render(<Preferences consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent granted)', () => {
  const div = document.createElement('div');
  const consent = {
    priorConsent: true,
    consentGranted: true
  };
  ReactDOM.render(<Preferences consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
