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
      <article className="article preferences">
        <h2 className="h2">preferences</h2>

        <label htmlFor="cookies-opt-in">Opt in to this site's cookies:</label>
        <input type="checkbox" name="cookies-opt-in" id="cookies-opt-in" onChange={this.consentToggle} checked={this.props.consent.consentGranted} />

        {this.props.consent.priorConsent &&
          (
            this.props.consent.consentGranted ?
            <p><strong>You're opted-in to cookies.</strong></p> :
            <p><strong>You're opted-out of cookies.</strong></p>
          )
        }
        
      </article>
    );
  }
}

export default Preferences;