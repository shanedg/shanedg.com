import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ConsentToaster.scss';

class ConsentToaster extends Component {
  render() {
    return (
      <div className="Consent-Toaster">
        <button
          className="button dismiss-toaster"
          id="dismiss-consent-toaster"
          onClick={this.props.dismissHandler}
        >
          X
        </button>
        <div className="toaster-body" ref={this.props.forwardedRef}>
          <p>
            this site uses{' '}
            <a
              href="https://en.wikipedia.org/wiki/HTTP_cookie"
              target="_blank"
              rel="noopener noreferrer"
              title="read more about Cookies"
            >
              cookies
            </a>
            ; do you consent to allowing this site to store cookies on your
            device? you can always change your mind{' '}
            <Link to="/privacy/">later</Link>.
          </p>
          <span className="span consent-choice">
            <button
              className="button"
              id="cookie-consent-yes"
              onClick={this.props.consentHandler}
            >
              Yes
            </button>
            <button
              className="button"
              id="cookie-consent-no"
              onClick={this.props.consentHandler}
            >
              No
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default React.forwardRef((props, ref) => {
  return <ConsentToaster {...props} forwardedRef={ref} />;
});
