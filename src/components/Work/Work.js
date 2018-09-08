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
        'Node, CraftCMS, WordPress',
        'Experimentation & personalization',
        'CMS migration, partnering with tech vendors, site launches, site relaunches, and Q/A'
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
        'Site optimization, a/b testing',
        'Integrating new tech in the Enterprise',
        'Responsive vs Adaptive front end development'
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

