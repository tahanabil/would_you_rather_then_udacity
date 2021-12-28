/** @format */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { authedUserLogedOut } from '../actions/Authed';

class NavBar extends Component {
  render() {
    const handleSignout = (e) => {
      e.preventDefault();
      const { dispatch } = this.props;
      dispatch(authedUserLogedOut());
    };

    const { user } = this.props;

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add"> New question</Link>
            </li>
            <li>
              <Link to="/leaderboard"> Leadr board</Link>
            </li>
            <li className="">
              <div className="userdetails">
                {' '}
                <table>
                  <tbody>
                    <tr>
                      <td valign="top">
                        <img
                          src={user.avatarURL}
                          className="avater"
                          alt=""
                        ></img>
                      </td>
                      <td valign="top">{user.name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li className="">
              <a href="/#" onClick={handleSignout}>
                Sign out
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ authed, users }) {
  // console.warn(authed);
  const user = users[authed.id];
  return { user };
}

export default connect(mapStateToProps)(NavBar);
