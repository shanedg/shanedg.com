import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';

import './Nav.css';

class Nav extends Component {

  render() {
    return (
      <nav className="Nav">
        <ul>
          <li>
            <NavLink activeClassName="active-page" exact to="/">Home</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/work/">Work</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/contact/">Contact</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/preferences/">Prefs</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/privacy/">Privacy</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;