/** @format */

import { RECIVE_QUESTIONS, ADD_VOATE } from '../actions/Question';

export function QuestionsReducer(state = {}, action) {
  switch (action.type) {
    case RECIVE_QUESTIONS:
      return { ...state, ...action.questions };
    case ADD_VOATE:
      const { authed, qid, answer } = action;

      return {
        ...state,
        [qid]: {
          ...state[qid],
          votes: state[qid][answer].votes.concat(authed),
        },
      };

    default:
      return state;
  }
}
