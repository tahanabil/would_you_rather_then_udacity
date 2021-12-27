/** @format */

import {
  RECIVE_USERS,
  ADD_NEW_ANSWER,
  ADD_USER_CREATE_NEW_POLL,
} from '../actions/Users';

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

    case ADD_USER_CREATE_NEW_POLL:
      const userID = action.poll.author;
      return {
        ...state,
        [userID]: {
          ...state[userID],
          questions: state[userID].questions.concat(action.poll.id),
        },
      };

    default:
      return state;
  }
}
