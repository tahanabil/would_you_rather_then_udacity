/** @format */

export const RECIVE_USERS = 'RECIVE_USERS';

export const ADD_NEW_ANSWER = 'ADD_NEW_ANSWER';

export const ADD_USER_CREATE_NEW_POLL = 'ADD_USER_CREATE_NEW_POLL';

export function reciveUsers(users) {
  return { type: RECIVE_USERS, users };
}

export function addNewAnswer(authed, qid, answer) {
  return { type: ADD_NEW_ANSWER, authed, qid, answer };
}

export function addNewPollToUser(poll) {
  return { type: ADD_USER_CREATE_NEW_POLL, poll };
}
