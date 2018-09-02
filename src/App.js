import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'js-cookie';
import './App.css';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import ConsentToaster from './components/Utils/ConsentToaster';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

    return (
      <div className="App" style={this.state.extraPadding}>
        <div className="App-inner">
          <Header />
          
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/work">Work</Link>
                </li>
              </ul>
              <Route exact path="/" component={null} />
              <Route path="/work" component={Work} />
            </div>
          </Router>
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
