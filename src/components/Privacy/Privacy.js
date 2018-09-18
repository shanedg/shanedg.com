import React, { Component } from 'react';
import './Privacy.css';

class Privacy extends Component {
  constructor(props) {
    super(props);
    this.consentToggle = this.consentToggle.bind(this);
  }

  componentDidMount() {
    // Only in browser context:
    if (window && document) {
      this.iubendaClientSideLoader(document);
    }
  }

  consentToggle(e) {
    const status = e.currentTarget.checked;
    this.props.updateConsent(status);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': `cookie_consent_update_${status ? 'granted' : 'revoked'}`
    });
  }

  // Create iubenda generated privacy policy embed script
  iubendaClientSideLoader(d) {
    var s = d.createElement("script"),
      tag = d.getElementsByTagName("body")[0];
    s.src="https://cdn.iubenda.com/iubenda.js";
    tag.appendChild(s);
  }

  render() {
   return (
     <section className="Privacy">
        <h2>privacy</h2>
        
        <p>for information about what personal data this site collects:&nbsp;
          {/* <!-- Begin iubenda generated privacy policy --> */}
          <a href="https://www.iubenda.com/privacy-policy/68672540" className="iubenda-black iubenda-embed " title="Privacy Policy">privacy policy</a>
          {/* <!-- End iubenda generated privacy policy --> */}
        </p>

        <div className="options">
          <label htmlFor="cookies-opt-in">opt in to this site's cookies:</label>
          <input type="checkbox" name="cookies-opt-in" id="cookies-opt-in" onChange={this.consentToggle} checked={this.props.consent.consentGranted} />

          {this.props.consent.alreadyAsked &&
            (
              this.props.consent.consentGranted ?
              <p><strong>> you're opted-in to cookies</strong></p> :
              <p><strong>> you're opted-out of cookies</strong></p>
            )
          }
        </div>
        
      </section>
    );
  }
}

export default Privacy;
