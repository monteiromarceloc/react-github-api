import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import MainReducer from './MainReducer';

const rootReducer = combineReducers({
  MainReducer,
  // Add new reducers here
});

const composedEnhancers = composeWithDevTools();
const store = createStore(rootReducer, {}, composedEnhancers);

export default store;