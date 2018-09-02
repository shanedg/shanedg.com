import React, { Component } from 'react';

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
      <div className="consent-toaster-wrap">
        <div className="consent-toaster" ref={this.toasterDOM}>
          <p>This site uses <a href="https://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" rel="noopener noreferrer" title="read more about 'Cookies'">Cookies</a>; do you consent to allowing this site to store Cookies on your device/browser?</p>
          <span className="span consent-choice">
            <button className="button" id="cookie-consent-yes" onClick={this.props.consentHandler}>Yes</button>
            <button className="button" id="cookie-consent-no" onClick={this.props.consentHandler}>No</button>
          </span>
          <button className="button dismiss-toaster" id="dismiss-consent-toaster" onClick={this.props.dismissHandler}>X</button>
        </div>
      </div>
    );
  }
}

export default ConsentToaster;