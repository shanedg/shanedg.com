import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

// Client-side routing
it('renders without crashing, client-side BrowserRouter', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

// Server-side rendering
it('renders without crashing, server-side StaticRouter', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StaticRouter context={{}}>
      <App />
    </StaticRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
