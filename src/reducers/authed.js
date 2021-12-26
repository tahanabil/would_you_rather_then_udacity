/** @format */

import { AUTHED_USER, AUTHED_USER_LOGOUT } from '../actions/Authed';

export function authedReducer(state = {}, action) {
  switch (action.type) {
    case AUTHED_USER:
      // console.warn('AUTHED_USER', action);
      return { ...state, id: action.id };
    case AUTHED_USER_LOGOUT:
      // console.warn('authedUserLogedOut', 'Loged out');
      return {};
    default:
      return state;
  }
}
