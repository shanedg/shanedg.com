import React from 'react';
import ReactDOM from 'react-dom';
import Talk from './Talk';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Talk />, div);
  ReactDOM.unmountComponentAtNode(div);
});
