/** @format */

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import QuestionList from './QuestionList';

export const ANSWERED = 'ANSWERED_LIST';
export const UN_ANSWERED = 'UN_ANSWERED_LIST';

class Main extends Component {
  state = { display: UN_ANSWERED };

  render() {
    const handelAnswer = (e) => {
      e.preventDefault();

      this.setState((prev) => ({ display: ANSWERED }));
    };

    const handelUnAnswer = (e) => {
      e.preventDefault();
      this.setState((prev) => ({ display: UN_ANSWERED }));
    };

    return (
      <div>
        {' '}
        <div className="main-container">
          <div className="UnAnswered" onClick={handelUnAnswer}>
            un-Answered
          </div>
          <div className="Answered" onClick={handelAnswer}>
            Answered
          </div>
        </div>
        <div>
          <QuestionList display={this.state.display} />
        </div>
      </div>
    );
  }
}

// function mapPropToState({ users }) {
//   return { users };
// }

export default Main;
