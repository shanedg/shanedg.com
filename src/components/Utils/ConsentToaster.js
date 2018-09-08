import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

import './ConsentToaster.css';

class ConsentToaster extends Component {

  constructor(props) {
    super(props);
    this.toasterDOM = React.createRef();

    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    this.setState(() => ({
      height: this.toasterDOM.current.clientHeight
    }));
  }

  render() {

    return (
      <div className="Consent-Toaster">
        <button className="button dismiss-toaster" id="dismiss-consent-toaster" onClick={this.props.dismissHandler}>X</button>
        <div className="toaster-body" ref={this.toasterDOM}>
          {/* <p>This site uses <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer" title="read more about Cookies">Cookies</a>; do you consent to allowing this site to store Cookies on your device? You can change your mind later <Link to="/preferences">here</Link>.</p> */}
          <p>This site uses <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer" title="read more about Cookies">Cookies</a>; do you consent to allowing this site to store Cookies on your device? You can change your mind later <a href="/preferences">here</a>.</p>
          <span className="span consent-choice">
            <button className="button" id="cookie-consent-yes" onClick={this.props.consentHandler}>Yes</button>
            <button className="button" id="cookie-consent-no" onClick={this.props.consentHandler}>No</button>
          </span>
        </div>
      </div>
    );
  }
}

export default ConsentToaster;