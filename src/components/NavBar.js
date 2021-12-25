/** @format */

import React,{ Component } from 'react'; 
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
            <li className="">{UserName}</li>
            <li className="">
              <Link to="/">Sign out</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
