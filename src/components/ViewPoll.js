/** @format */

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddNewAnswer } from '../actions/Question';

function ViewPoll(connectMaps) {
  //var { Refresh, setRefresh } = this.useState('Refresh');
  const params = useParams();
  const [OptionValue, setOptionValue] = useState('');
  //const { dispatch } = this;
  const id = params.QID;
  const currentQuestion = connectMaps.questions[id];
  const QuestionCreator = connectMaps.users[currentQuestion.author];
  const authed = connectMaps.users[connectMaps.authed.id];

  const isAnswered = authed.answers[id] ? true : false;

  const handelSubmitpoll = (e) => {
    e.preventDefault();
    console.log('authed.id : ', authed.id);
    connectMaps.AddNewAnswer(authed.id, id, OptionValue);
  };

  const handelChangepoll = (e) => {
    const value = e.target.value;
    setOptionValue(value);
  };

  //   console.log('QuestionCreator', isAnswered);
  console.log('current Question : ', currentQuestion);

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
            <p>Would you rather ...</p>

            {!isAnswered ? (
              <div>
                <div>
                  <input
                    type={'radio'}
                    name="poll"
                    id="pollOne"
                    value="optionOne"
                    onChange={handelChangepoll}
                  />
                  <label htmlFor="pollOne">
                    {currentQuestion.optionOne.text}
                  </label>
                </div>
                <div>
                  <input
                    type={'radio'}
                    name="poll"
                    id="pollTwo"
                    value="optionTwo"
                    onChange={handelChangepoll}
                  />
                  <label htmlFor="pollTwo">
                    {currentQuestion.optionTwo.text}
                  </label>
                </div>
                <div>
                  <button onClick={handelSubmitpoll}>Submit</button>
                </div>
              </div>
            ) : (
              <div>View poolll</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authed, users, questions }) {
  return { authed, users, questions };
}

export default connect(mapStateToProps, { AddNewAnswer })(ViewPoll);
