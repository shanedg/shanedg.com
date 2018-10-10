import React from 'react';
import ReactDOM from 'react-dom';
import Snippet from './Snippet';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Snippet />, div);
  ReactDOM.unmountComponentAtNode(div);
});
