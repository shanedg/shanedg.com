import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Cookies from 'js-cookie';

import './App.css';

import Employer from './components/Employer/Employer';
import ConsentToaster from './components/Utils/ConsentToaster';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consent: this.props.consent
    };

    this.consentHandler = this.consentHandler.bind(this);
    this.dismissHandler = this.dismissHandler.bind(this);
  }

  componentDidMount() {
    // TODO: get height of consent toaster if mounted
    // and apply that much additional padding to bottom of
    // entire .App
  }

  consentHandler(e) {
    let consented = false;
    if (e.currentTarget.id === 'cookie-consent-yes') {
      consented = true;
    }

    this.setState({
      consent: {
        priorConsent: true,
        consentGranted: consented
      }
    });
    Cookies.set('cookie_consent', consented ? 'true' : 'false');
  }

  dismissHandler(e) {
    if (e.currentTarget.id === 'dismiss-consent-toaster') {
      this.setState({
        consent: {
          priorConsent: true
        }
      });
    }
  }

  render() {

    const work = [{
      employerName: 'braze (formerly appboy)',
      roleTitle: 'web engineer',
      dates: {
        start: new Date('2017-08-10'),
        end: 'present'
      },
      highlightsBlurb: 'what it is',
      responsibilities: ['Responsible for maintaining and extending the Node Express, Vue Nuxt, and WordPress applications that form the braze.com site; and for enabling b2b lead generation.','Develop and manage a/b test and personalization campaigns in Optimizely. Evaluate experiment results, implement successful variants, and enable personalization at scale.', 'Build marketing communication preference and subscription center, ensuring compliance with the General Data Protection Regulation in effect in the European Union.', 'Integrate and leverage Braze marketing automation product to deliver customized messaging and web push notifications to clients and prospects.'],
      projects: ['prospect preference center', 'packages page', 'interactive map', 'employee cards']
    },{
      employerName: 'dick\'s sporting goods',
      roleTitle: 'front end web developer',
      dates: {
        start: new Date('2014-07-16'),
        end: new Date('2017-08-06')
      },
      highlightsBlurb: 'what it was',
      responsibilities: ['Developed a/b test and personalization campaigns in Adobe Target as part of site optimization group. Implemented successful variants.', 'Responsible for integrating and testing enterprise live chat widget across all web properties.', 'Developed adaptive and responsive landing pages for product and promotional campaigns.', 'Managed user acceptance testing for pilot re-platforming project and migrated legacy content between CMS platforms.'],
      projects: ['Lead developer on Angular single page application for ecommerce product selection experience; leveraged AWS hosting and Bitbucket continuous integration products.']
    }];

    return (
      <div className="App">
        <header className="header">
          <h1 className="h1">shane garrity</h1>
          <p>what up this is me no apologies body is my canvas and my tattoos are my story</p>
        </header>
        <article className="article work">
          <h2 className="h2">work</h2>

          {work.map((job, index) => {
            return <Employer key={index} jobDetails={job} />
          })}

        </article>
        <footer className="footer">
          <h2>contact me</h2>
        </footer>
        
        <ReactCSSTransitionGroup
          transitionName="consent-toaster"
          transitionAppear={true}
          transitionAppearTimeout={250}
          transitionEnter={false}
          transitionLeaveTimeout={250}>
          {!this.state.consent.priorConsent &&
            <ConsentToaster key={'consent-toaster'} consentHandler={this.consentHandler} dismissHandler={this.dismissHandler} />
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
