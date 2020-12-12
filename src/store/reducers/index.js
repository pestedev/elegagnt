import {combineReducers} from 'redux';

import appReducer from './app';
import userReducer from './user';

const applicationReducer = combineReducers({
  app: appReducer,
  user: userReducer,
});

const rootReducers = (state, action) => {
  return applicationReducer(state, action);
};

export default rootReducers;
