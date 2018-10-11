import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Cookies from 'js-cookie';
import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Privacy from './components/Privacy/Privacy';
import ConsentToaster from './components/Utils/ConsentToaster';

// source here: https://github.com/maisano/react-router-transition
import RouteWrapper from './components/AnimatedSwitch/AnimatedSwitch';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consent: this.props.consent,
      appOuterStyles: {
        paddingBottom: '0'
      },
      appInnerStyles: {}
    };

    this.toasterRef = React.createRef();

    this.adjustPadding = this.adjustPadding.bind(this);
    this.updateConsent = this.updateConsent.bind(this);
    this.consentHandler = this.consentHandler.bind(this);
    this.dismissHandler = this.dismissHandler.bind(this);
  }

  componentDidMount() {
    this.adjustPadding();
    window.addEventListener('resize', this.adjustPadding);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.adjustPadding);
  }

  adjustPadding() {
    if (!this.state.consent.alreadyAsked) {
      this.setState({
        appOuterStyles: {
          paddingBottom: this.toasterRef.current.clientHeight
        }
      });
    }
  }

  updateConsent(isGranted) {
    this.setState({
      consent: {
        alreadyAsked: true,
        consentGranted: isGranted
      }
    });
    Cookies.set('cookie_consent', isGranted ? 'true' : 'false');
  }

  consentHandler(e) {
    let consented = false;
    if (e.currentTarget.id === 'cookie-consent-yes') {
      consented = true;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cookie_consent_granted'
      });
    } else {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cookie_consent_denied'
      });
    }

    this.setState({
      consent: {
        alreadyAsked: true,
        consentGranted: consented
      },
      appOuterStyles: {},
      appInnerStyles: {
        minHeight: '100vh'
      }
    });
    Cookies.set('cookie_consent', consented ? 'true' : 'false');
  }

  dismissHandler(e) {
    if (e.currentTarget.id === 'dismiss-consent-toaster') {
      this.setState({
        consent: {
          alreadyAsked: true,
          consentGranted: false
        },
        appOuterStyles: {},
        appInnerStyles: {
          minHeight: '100vh'
        }
      });
    }
  }

  render() {
    return (
      <Router>
        <div className="App" style={this.state.appOuterStyles}>
          <div className="App-inner" style={this.state.appInnerStyles}>
            <Header />
            <Nav />
            <RouteWrapper
              atEnter={{
                x: 100,
                opacity: 1
              }}
              atLeave={{
                x: -100,
                opacity: 0
              }}
              atActive={{
                x: 0,
                opacity: 1
              }}
              mapStyles={style => {
                return {
                  opacity: style.opacity,
                  transform: `translateX(${style.x}vw)`
                };
              }}
              className="switch-wrapper"
            >
              <Route exact path="/" component={Home} />
              <Route path="/work" component={Work} />
              <Route path="/contact" component={Contact} />
              <Route
                path="/privacy"
                render={props => (
                  <Privacy
                    {...props}
                    consent={this.state.consent}
                    updateConsent={this.updateConsent}
                  />
                )}
              />
            </RouteWrapper>
          </div>

          <ReactCSSTransitionGroup
            transitionName="toaster"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeaveTimeout={500}
          >
            {this.state.consent &&
              !this.state.consent.alreadyAsked && (
                <ConsentToaster
                  key={'consent-toaster'}
                  ref={this.toasterRef}
                  consentHandler={this.consentHandler}
                  dismissHandler={this.dismissHandler}
                />
              )}
          </ReactCSSTransitionGroup>
        </div>
      </Router>
    );
  }
}

export default App;
