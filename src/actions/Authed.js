/** @format */

export const AUTHED_USER = 'AUTHED_USER';
export const AUTHED_USER_LOGOUT = 'AUTHED_USER_LOGOUT';

export function authedUser(id) {
  return { type: AUTHED_USER, id };
}

export function authedUserLogedOut() {
  return { type: AUTHED_USER_LOGOUT, id: null };
}
