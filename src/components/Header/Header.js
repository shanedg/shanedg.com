import React, { Component } from 'react';

import './Header.scss';
const shaneface = '/assets/portrait-shane_min.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="h1">shane garrity</h1>
        <figure className="portrait">
          <img src={shaneface} alt="a portrait of shane" />
        </figure>
        <p className="blurb">web developer</p>
      </header>
    );
  }
}

export default Header;
