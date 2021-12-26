/** @format */

import { RECIVE_USERS, ADD_NEW_ANSWER } from '../actions/Users';

export function UserReducer(state = {}, action) {
  switch (action.type) {
    case RECIVE_USERS:
      return { ...state, ...action.users };
    case ADD_NEW_ANSWER:
      const { authed, qid, answer } = action;

      return {
        ...state,
        [authed]: {
          ...state[authed],
          answers: { ...state[authed].answers, [qid]: answer },
        },
      };

    default:
      return state;
  }
}
