import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

// Client-side routing
it('renders without crashing (initial, no consent)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: false
  };
  ReactDOM.render(
    <BrowserRouter>
      <App consent={consent} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent denied)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: false
  };
  ReactDOM.render(
    <BrowserRouter>
      <App consent={consent} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent granted)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: true
  };
  ReactDOM.render(
    <BrowserRouter>
      <App consent={consent} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (BAD STATE)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: true
  };
  ReactDOM.render(
    <BrowserRouter>
      <App consent={consent} />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// Server-side rendering
it('renders without crashing (initial, no consent)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: false
  };
  ReactDOM.render(
    <StaticRouter context={{}}>
      <App consent={consent} />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent denied)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: false
  };
  ReactDOM.render(
    <StaticRouter context={{}}>
      <App consent={consent} />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (consent granted)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: true,
    consentGranted: true
  };
  ReactDOM.render(
    <StaticRouter context={{}}>
      <App consent={consent} />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing (BAD STATE)', () => {
  const div = document.createElement('div');
  const consent = {
    alreadyAsked: false,
    consentGranted: true
  };
  ReactDOM.render(
    <StaticRouter context={{}}>
      <App consent={consent} />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
