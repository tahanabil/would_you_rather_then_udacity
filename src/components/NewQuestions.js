/** @format */

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { HandelAddNewPoll } from '../actions/Question';
import { connect } from 'react-redux';
class NewQuestions extends Component {
  state = { option1: '', option2: '' };
  render() {
    const handelNewQuestion = (e) => {
      e.preventDefault();
      console.log('start handelNew question', e);
      this.props.HandelAddNewPoll(
        this.props.id,
        this.state.option1,
        this.state.option2
      );
      this.setState({ option1: '', option2: '' });
    };

    const HandleOnChangeOption1 = (e) => {
      this.setState((prv) => ({ ...prv, option1: e.target.value }));
    };

    const HandleOnChangeOption2 = (e) => {
      this.setState((prv) => ({ ...prv, option2: e.target.value }));
    };

    return (
      <div className="newQuestionContainer">
        <div className="header">Create new Questions</div>
        <p>Complete the questions : </p>
        <h3>WHould you rather ...</h3>
        <div>
          <input
            type="Text"
            placeholder="Enter option one options here "
            value={this.state.option1}
            onChange={HandleOnChangeOption1}
          ></input>
        </div>
        OR
        <div>
          <input
            type="Text"
            placeholder="Enter option two options here "
            value={this.state.option2}
            onChange={HandleOnChangeOption2}
          ></input>
        </div>
        <button onClick={handelNewQuestion}>Submit</button>
      </div>
    );
  }
}

function mapStateToProp({ authed }) {
  return { id: authed.id };
}

export default connect(mapStateToProp, { HandelAddNewPoll })(NewQuestions);
