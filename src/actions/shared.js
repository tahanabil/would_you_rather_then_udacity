/** @format */

import { reciveUsers } from './Users';
import { getInitialData } from '../utils/api';

export function initiatedata() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(reciveUsers(users));
    });
  };
}
