import React, { Component } from 'react';
import Employer from './Employer/Employer';
import './Work.css';

class Work extends Component {

  render() {
    const work = [{
      employerName: 'braze (formerly appboy)',
      roleTitle: 'web engineer',
      dates: {
        start: new Date('2017-07-10'),
        end: 'present'
      },
      highlightsBlurb: 'what it is',
      askMeAbout: [
        'node, craftcms, wordpress',
        'react and vue js',
        'experimentation & personalization',
        'content migration, re-platforming, site launches'
      ]
    },{
      employerName: 'dick\'s sporting goods',
      roleTitle: 'front end web developer',
      dates: {
        start: new Date('2014-06-16'),
        end: new Date('2017-07-06')
      },
      highlightsBlurb: 'what it was',
      askMeAbout: [
        'conversion optimization, a/b testing',
        'integrating tech in the enterprise',
        'responsive vs adaptive front end development'
      ]
    }];

    return (
      <article className="article work">
        <h2 className="h2">work</h2>

        {work.map((job, index) => {
          return <Employer key={index} jobDetails={job} order={index} />
        })}

      </article>
    );
  }
}

export default Work;

