import React from 'react';
import ReactDOM from 'react-dom';
import ConsentToaster from './ConsentToaster';

// Uses <Link /> so must render inside Router context
import {BrowserRouter} from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter><ConsentToaster /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
