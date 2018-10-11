import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <ul>
          <li>
            <NavLink activeClassName="active-page" exact to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/work/">
              work
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/contact/">
              contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-page" exact to="/privacy/">
              privacy
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
