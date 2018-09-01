import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'js-cookie';
import './App.css';
import Header from './components/Header/Header';
import Employer from './components/Employer/Employer';
import Footer from './components/Footer/Footer';
import ConsentToaster from './components/Utils/ConsentToaster';

// highlight.js imports for syntax highlighting of javascript in html
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';

hljs.registerLanguage('javascript', javascript);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      consent: this.props.consent,
      extraPadding: {
        paddingBottom: '0'
      }
    };

    this.toasterRef = React.createRef();

    this.consentHandler = this.consentHandler.bind(this);
    this.dismissHandler = this.dismissHandler.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      if (!this.state.consent.priorConsent) {
        this.setState({
          extraPadding: {
            paddingBottom: this.toasterRef.current.state.height + 'px'
          }
        });
      }
    }, 0);

    // init client-side syntax highlighting when component mounts
    hljs.initHighlighting();
  }

  consentHandler(e) {
    let consented = false;
    if (e.currentTarget.id === 'cookie-consent-yes') {
      consented = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'cookie_consent_granted'
      });
    }

    this.setState({
      consent: {
        priorConsent: true,
        consentGranted: consented
      },
      extraPadding: {}
    });
    Cookies.set('cookie_consent', consented ? 'true' : 'false');
  }

  dismissHandler(e) {
    if (e.currentTarget.id === 'dismiss-consent-toaster') {
      this.setState({
        consent: {
          priorConsent: true,
          consentGranted: false
        },
        extraPadding: {}
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
      <div className="App"
        style={this.state.extraPadding}
        >
        <div className="App-inner"
          // style={this.state.extraPadding}
          >
          <Header />
          <article className="article work">
            <h2 className="h2">work</h2>

            {work.map((job, index) => {
              return <Employer key={index} jobDetails={job} />
            })}

            {/* some syntax to be highlighted */}
            <pre><code>
            let priorConsent = false;
            <br />
            if (cookieConsent !== undefined) &#123;
            <br />
            &nbsp;&nbsp;console.log('bish');
            <br />
            &#125;
            </code></pre>

          </article>
          <Footer />
        </div>
        <ReactCSSTransitionGroup
          transitionName="consent-toaster"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeaveTimeout={500}>
          {this.state.consent &&
            !this.state.consent.priorConsent &&
            <ConsentToaster ref={this.toasterRef} key={'consent-toaster'} consentHandler={this.consentHandler} dismissHandler={this.dismissHandler} />
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default App;
