/** @format */

import { combineReducers } from 'redux';
import { UserReducer } from './users';
import { loadingBarReducer } from 'react-redux-loading';
import { authedReducer } from './authed';
import { QuestionsReducer } from './Questions';

export default combineReducers({
  users: UserReducer,
  loadingBar: loadingBarReducer,
  authed: authedReducer,
  questions: QuestionsReducer,
});
