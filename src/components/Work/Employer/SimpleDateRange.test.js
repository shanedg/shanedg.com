import React from 'react';
import ReactDOM from 'react-dom';
import SimpleDateRange from './SimpleDateRange';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const dates = {
    start: new Date(),
    end: new Date()
  };
  ReactDOM.render(<SimpleDateRange dates={dates} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
