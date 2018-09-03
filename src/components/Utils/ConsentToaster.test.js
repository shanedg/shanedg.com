import React from 'react';
import ReactDOM from 'react-dom';
import ConsentToaster from './ConsentToaster';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConsentToaster />, div);
  ReactDOM.unmountComponentAtNode(div);
});
