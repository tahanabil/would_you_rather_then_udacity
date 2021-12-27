/** @format */
import { addNewAnswer, addNewPollToUser } from '../actions/Users';
import { saveQuestionAnswer, saveQuestion } from '../utils/api';

export const RECIVE_QUESTIONS = 'RECIVE_QUESTIONS';
export const ADD_VOATE = 'ADD_VOTE';
export const ADD_NEW_POLL = 'ADD_NEW_POLL';

export function reciveQueststion(questions) {
  return { type: RECIVE_QUESTIONS, questions };
}

export function addVote(authed, qid, answer) {
  return { type: ADD_VOATE, authed, qid, answer };
}

export function AddNewPoll(poll) {
  return { type: ADD_NEW_POLL, poll };
}

export function AddNewAnswer(authed, qid, answer) {
  return (dispatch) => {
    dispatch(addNewAnswer(authed, qid, answer));
    dispatch(addVote(authed, qid, answer));
    console.warn('authed', authed);
    return saveQuestionAnswer(authed, qid, answer)
      .then((e) => {
        console.log('Update backend', e);
      })
      .catch((x) => console.log('Error in Mideelwere :', x));
  };
}

export function HandelAddNewPoll(authed, optionOneText, optionTwoText) {
  console.log('authed handelNew question :', authed);
  console.log('optionOneText handelNew question :', optionOneText);
  console.log('optionTwoText handelNew question :', optionTwoText);

  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author: authed })
      .then((e) => {
        console.warn('GQuestion :', e);
        dispatch(AddNewPoll(e));
        dispatch(addNewPollToUser(e));

        console.warn('Question ', e);
      })
      .catch((x) => console.log('Error in Mideelwere :', x));
  };
}
