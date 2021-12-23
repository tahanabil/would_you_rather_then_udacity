/** @format */

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const UserName = 'TestUser place hodler';

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/"> New question</Link>
            </li>
            <li>
              <Link to="/"> Leadr board</Link>
            </li>
          </ul>

          <ul>
            <li className="right">{UserName}</li>
            <li className="right">
              <Link to="/">Sign out</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
