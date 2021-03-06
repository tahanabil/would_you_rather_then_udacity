/** @format */

import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js';

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestionAnswer(authed, qid, answer) {
  return _saveQuestionAnswer({ authedUser: authed, qid, answer });
}

export function saveQuestion(info) {
  console.log('saveQuestion:', 'ttttt');
  return _saveQuestion(info);
}
