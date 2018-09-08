import React, { Component } from 'react';
import './Privacy.css';

class Privacy extends Component {

  render() {
   return (
     <section className="Privacy">
        <h2>*privacy</h2>
        <p>for information about what personal data this site collects:&nbsp;
          {/* <!-- Begin iubenda generated privacy policy --> */}
          <a href="https://www.iubenda.com/privacy-policy/68672540" className="iubenda-black iubenda-embed " title="Privacy Policy">privacy policy</a>
          {/* <!-- End iubenda generated privacy policy --> */}
        </p>
      </section>
    );
  }
}

export default Privacy;
