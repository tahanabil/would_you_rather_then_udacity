/** @format */

import { RECIVE_USERS } from '../actions/Users';

export function UserReducer(state = {}, action) {
  switch (action.type) {
    case RECIVE_USERS:
      return { ...state, ...action.users };
    default:
      return state;
  }
}
