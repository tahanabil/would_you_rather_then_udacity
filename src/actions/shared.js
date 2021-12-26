/** @format */

import { reciveUsers } from './Users';
import { reciveQueststion } from './Question';
import { getInitialData } from '../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading';

export function initiatedata() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ users, questions }) => {
      dispatch(reciveUsers(users));
      dispatch(reciveQueststion(questions));
      dispatch(hideLoading());
    });
  };
}
