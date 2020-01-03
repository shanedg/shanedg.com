import React, { Component } from 'react';
import Employer from './Employer/Employer';
import './Work.scss';

class Work extends Component {
  render() {
    const work = [
      {
        employerName: 'squarespace',
        roleTitle: 'software engineer',
        dates: {
          start: new Date('2019-07-16'),
          end: 'present',
        },
        highlightsBlurb: 'what it is',
        askMeAbout: [
          'make the legacy things play nice',
          'miles of Webpack config',
          'front end build tooling',
          'transpilation, compilation, perspiration, polyfills',
        ],
      },
      {
        employerName: 'zipari',
        roleTitle: 'front end developer',
        dates: {
          start: new Date('2018-11-05'),
          end: new Date('2019-06-14'),
        },
        highlightsBlurb: 'what it is',
        askMeAbout: [
          'new feature development on core product family of front end angular applications',
          'multi-tenant product configurability',
          'client product maintenance across legacy family front end angular applications',
          'internal tools for product configuration and qa',
        ],
      },
      {
        employerName: 'braze (formerly appboy)',
        roleTitle: 'web engineer',
        dates: {
          start: new Date('2017-07-10'),
          end: new Date('2018-10-26'),
        },
        highlightsBlurb: 'what it is',
        askMeAbout: [
          'Jekyll, Node, React, Vue, and WordPress front and back end applications',
          'a/b testing and personalization (Optimizely)',
          'self-serve email and web push subscription management in marketing communications preference center',
          'seamless back end system migrations; simultaneous micro-site launches',
        ],
      },
      {
        employerName: "dick's sporting goods",
        roleTitle: 'front end web developer',
        dates: {
          start: new Date('2014-06-16'),
          end: new Date('2017-07-06'),
        },
        highlightsBlurb: 'what it was',
        askMeAbout: [
          'AngularJS web application for ecommerce product selection',
          'ensured high availability of deals data under peak holiday traffic',
          'a/b testing and personalization (Adobe Target)',
          'adaptive and responsive, cross-browser landing pages and other site content for promotional compaigns',
        ],
      },
    ];

    return (
      <article className="article work">
        <h2 className="h2">work</h2>

        {work.map((job, index) => {
          return <Employer key={index} jobDetails={job} order={index} />;
        })}
      </article>
    );
  }
}

export default Work;
