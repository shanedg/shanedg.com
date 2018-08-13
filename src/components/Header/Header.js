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
        <p className="blurb">what up this is me no apologies body is my canvas and my tattoos are my story</p>
      </header>
    );
  }
}

export default Header;