/** @format */

export const RECIVE_USERS = 'RECIVE_USERS';

export const ADD_NEW_ANSWER = 'ADD_NEW_ANSWER';

export function reciveUsers(users) {
  return { type: RECIVE_USERS, users };
}

export function addNewAnswer(authed, qid, answer) {
  return { type: ADD_NEW_ANSWER, authed, qid, answer };
}
