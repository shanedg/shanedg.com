import React, { Component } from 'react';
import './App.css';

import Employer from './components/Employer';

class App extends Component {
  render() {
    let work = [{
      employerName: 'braze (formerly appboy)',
      roleTitle: 'web engineer',
      highlightsBlurb: '',
      responsibilities: ['Responsible for maintaining and extending the Node Express, Vue Nuxt, and WordPress applications that form the braze.com site; and for enabling b2b lead generation.','Develop and manage a/b test and personalization campaigns in Optimizely. Evaluate experiment results, implement successful variants, and enable personalization at scale.', 'Build marketing communication preference and subscription center, ensuring compliance with the General Data Protection Regulation in effect in the European Union.', 'Integrate and leverage Braze marketing automation product to deliver customized messaging and web push notifications to clients and prospects.'],
      projects: ['prospect preference center', 'packages page', 'interactive map', 'employee cards']
    },{
      employerName: 'dick\'s sporting goods',
      roleTitle: 'front end web developer',
      highlightsBlurb: '',
      responsibilities: ['Developed a/b test and personalization campaigns in Adobe Target as part of site optimization group. Implemented successful variants.', 'Responsible for integrating and testing enterprise live chat widget across all web properties.', 'Developed adaptive and responsive landing pages for product and promotional campaigns.', 'Managed user acceptance testing for pilot re-platforming project and migrated legacy content between CMS platforms.'],
      projects: ['Lead developer on Angular single page application for ecommerce product selection experience; leveraged AWS hosting and Bitbucket continuous integration products.']
    }];

    return (
      <div className="App">
        <header className="header">
          <h1 className="h1">shane garrity</h1>
          <p>what's up</p>
        </header>
        <article className="article work">
          <h2 className="h2">work</h2>

          {work.map((job, index) => {
            return <Employer key={index} jobDetails={job} />
          })}

        </article>
        <footer>
          <h2>contact me</h2>

        </footer>        
      </div>
    );
  }
}

export default App;
