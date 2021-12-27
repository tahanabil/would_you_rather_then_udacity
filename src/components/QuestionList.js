/** @format */

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';
import { ANSWERED } from './Main';
import Question from './Question';

class QuestionList extends Component {
  render() {
    const CurrentDisplay = this.props.display;
    const DisplayList =
      CurrentDisplay === ANSWERED
        ? this.props.QAnswered
        : this.props.QUnAnswered;

    return (
      <div className="questionListStyle">
        <p>QuestionList component-{CurrentDisplay}</p>
        {DisplayList.map((x) => (
          <Question id={x.id} key={x.id} CurrentDisplay={CurrentDisplay} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ questions, authed, users }) {
  const userID = authed.id;
  const currentUser = users[userID];
  const answers = Object.keys(currentUser.answers);

  // console.log('questions', questions);

  const questionsValues = Object.values(questions);
  const QAnswered = questionsValues
    .filter((q) => answers.includes(q.id))
    .sort((x, y) => y.timestamp - x.timestamp);
  const QUnAnswered = questionsValues
    .filter((q) => !answers.includes(q.id))
    .sort((x, y) => y.timestamp - x.timestamp);

  // console.log('QAnswered :', QAnswered);
  // console.log('QUnAnswered :', QUnAnswered);

  return { QAnswered, QUnAnswered };
}
export default connect(mapStateToProps)(QuestionList);
