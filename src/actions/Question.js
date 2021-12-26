/** @format */
import { addNewAnswer } from '../actions/Users';
import { saveQuestionAnswer } from '../utils/api';
export const RECIVE_QUESTIONS = 'RECIVE_QUESTIONS';
export const ADD_VOATE = 'ADD_VOTE';

export function reciveQueststion(questions) {
  return { type: RECIVE_QUESTIONS, questions };
}

export function addVote(authed, qid, answer) {
  return { type: ADD_VOATE, authed, qid, answer };
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
