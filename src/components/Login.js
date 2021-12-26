/** @format */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authedUser } from '../actions/Authed';

class Login extends Component {
  state = { value: '', PreventLogin: true };

  handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    let PreventLogin = value === '';
    // console.log('AllowLogin :', PreventLogin);
    this.setState((state) => ({ value, PreventLogin }));
  };

  handelSubmit = (e) => {
    e.preventDefault();

    const { dispatch } = this.props;
    const id = this.state.value;
    const newAction = authedUser(id);
    // console.log('User loged id :', id);
    // console.log('User loged action :', newAction);

    dispatch(newAction);
  };

  render() {
    const { users, authed } = this.props;

    if (Object.keys(authed).length !== 0) {
      alert(authed);
    }

    if (Object.keys(users).length === 1) return null;

    const loginform = (
      <form onSubmit={this.handelSubmit}>
        <div className="LoginForm">
          <div className="header">Login</div>

          <div className="Body">
            <span className="userloginLabel">User name :</span>

            <select
              className="userlogins"
              onChange={this.handleChange}
              defaultValue={this.state.value}
            >
              <option value="">-</option>
              {Object.keys(users).map((x) => {
                let obj = users[x];
                return (
                  <option key={obj.id} value={obj.id}>
                    {obj.name}
                  </option>
                );
              })}
            </select>

            <div className="loginButtonDiv">
              <button type="submit" disabled={this.state.PreventLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    );

    return loginform;
  }
}

function mapStateToProps({ users, authed }) {
  return { users, authed };
}

export default connect(mapStateToProps)(Login);
