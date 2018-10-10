import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

// Uses <NavLink /> so must render inside Router context
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
