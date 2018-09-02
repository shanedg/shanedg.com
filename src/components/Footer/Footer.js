import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="footer">
        <h2>talk to me</h2>
        <p>check out my <a href="https://github.com/shanedgarrity" target="_blank" rel="noopener noreferrer">github</a> or connect with me on <a href="https://www.linkedin.com/in/shane-garrity-ba915544" target="_blank" rel="noopener noreferrer">linkedin</a> or shoot me an <a href="mailto:shanedgarrity@gmail.com">email</a></p>
        <h3>*privacy</h3>
        <p>for information about what personal data this site collects:&nbsp;
          {/* <!-- Begin iubenda generated privacy policy --> */}
          <a href="https://www.iubenda.com/privacy-policy/68672540" className="iubenda-black iubenda-embed " title="Privacy Policy">privacy policy</a>
          {/* <!-- End iubenda generated privacy policy --> */}
        </p>
        
      </footer>
    );
  }
}

export default Footer;