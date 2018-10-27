import React from 'react';
import ReactDOM from 'react-dom';
import Employer from './Employer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const jobDetails = {
    employerName: 'test employer name',
    dates: {
      start: new Date(),
      end: new Date(),
    },
    roleTitle: 'test role title',
    responsibilities: ['a', 'b', 'c'],
    projects: ['1', '2', '3'],
  };
  ReactDOM.render(<Employer jobDetails={jobDetails} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
