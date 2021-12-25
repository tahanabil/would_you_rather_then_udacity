/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    const loginform = (
      <div className="LoginForm">
        <div className="header">Login</div>

        <div className="Body">
          <span className="userloginLabel">User name :</span>

          <select className="userlogins">
            {/* {users.map((x) => (
              <option key={x.id}>{x.name}</option>
            ))} */}
          </select>

          <div className="loginButtonDiv">
            <button>Login</button>
          </div>
        </div>
      </div>
    );

    return loginform;
  }
}

function mapStateToProps({ users }) {
  return { users };
}

export default connect(mapStateToProps)(Login);
