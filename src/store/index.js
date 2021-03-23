import { createStore, combineReducers } from 'redux';
import throttle from 'lodash/throttle';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from '../services/localStorage';

import MainReducer from './MainReducer';

const rootReducer = combineReducers({
  MainReducer,
  // Add new reducers here
});

const persitedState = loadState();

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, persitedState, composedEnhancers);

store.subscribe(throttle(() => {
  saveState({
    MainReducer: store.getState().MainReducer,
  });
}, 1000));

export default store;