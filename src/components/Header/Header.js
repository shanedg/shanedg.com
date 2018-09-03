import React, { Component } from 'react';

import './Header.css';
import shaneface from './images/portrait-shane_min.png';

class Header extends Component {

  render() {
    return (
      <header className="header">
        <h1 className="h1">shane garrity</h1>
        <figure className="portrait">
          <img src={shaneface} alt="a portrait of shane" />
        </figure>
        <p className="blurb">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut purus justo. Aliquam id lectus non odio luctus euismod vitae id mi.</p>
      </header>
    );
  }
}

export default Header;