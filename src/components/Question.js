/** @format */

import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Question extends Component {
  render() {
    const id = this.props.id;
    const currentQuestion = this.props.questions[id];

    const QuestionCreator = this.props.users[currentQuestion.author];
    // console.log('currentQuestion', id);
    // console.log('QuestionCreator', currentQuestion.optionOne.text);

    // const handelViewPoll = (e) => {
    //   e.preventDefault();
    //   // return <Redirect to="/ViewPoll" />;
    // };

    return (
      <div>
        <div key={id} className="questionDiv">
          <div className="QuestionHeader"> {QuestionCreator.name} asks : </div>
          <div className="questionBody">
            <img
              src={QuestionCreator.avatarURL}
              className="questionAvater"
              alt=""
            />

            <div className="questionBodyContent">
              <p>Would you rather :</p>
              <span>{currentQuestion.optionOne.text}...Or</span>

              <div>
                <Link to={`/ViewPoll/${id}`}>
                  <button>View poll</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp({ authed, users, questions }) {
  return { users: users, questions };
}
export default connect(mapStateToProp)(Question);
