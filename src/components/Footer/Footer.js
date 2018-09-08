import React, { Component } from 'react';
import Snippet from '../Snippet/Snippet';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="Footer">
        <Snippet snippet={`console.log('under construction, please excuse the mess');`} />
      </footer>
    );
  }
}

export default Footer;