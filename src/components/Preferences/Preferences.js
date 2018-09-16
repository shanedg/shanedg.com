import React, { Component } from 'react';
import './Preferences.css';

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.consentToggle = this.consentToggle.bind(this);
  }

  consentToggle(e) {
    const status = e.currentTarget.checked;
    this.props.updateConsent(status);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': `cookie_consent_update_${status ? 'granted' : 'revoked'}`
    });
  }

  render() {

    return (
      <section className="Preferences">
        <h2 className="h2">preferences</h2>
      
        <div className="options">
          <label htmlFor="cookies-opt-in">opt in to this site's cookies:</label>
          <input type="checkbox" name="cookies-opt-in" id="cookies-opt-in" onChange={this.consentToggle} checked={this.props.consent.consentGranted} />

          {this.props.consent.priorConsent &&
            (
              this.props.consent.consentGranted ?
              <p><strong>You're opted-in to cookies.</strong></p> :
              <p><strong>You're opted-out of cookies.</strong></p>
            )
          }
        </div>
      </section>
    );
  }
}

export default Preferences;