import React from 'react';
import ReactDOM from 'react-dom';
import Privacy from './Privacy';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Privacy />, div);
  ReactDOM.unmountComponentAtNode(div);
});
