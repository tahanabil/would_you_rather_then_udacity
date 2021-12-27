/** @format */

import { RECIVE_QUESTIONS, ADD_VOATE, ADD_NEW_POLL } from '../actions/Question';

export function QuestionsReducer(state = {}, action) {
  switch (action.type) {
    case RECIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_VOATE:
      const { authed, qid, answer } = action;
      const newState = {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat(authed),
          },
        },
      };
      console.log('New State : ', newState);
      return newState;
    case ADD_NEW_POLL:
      return { ...state, [action.poll.id]: action.poll };
    default:
      return state;
  }
}
