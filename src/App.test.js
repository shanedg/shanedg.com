import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing (initial, no consent)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: false,
  };
  ReactDOM.render(<App consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent denied)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: false,
  };
  ReactDOM.render(<App consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent granted)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: true,
  };
  ReactDOM.render(<App consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (BAD STATE)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: true,
  };
  ReactDOM.render(<App consent={consent} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
