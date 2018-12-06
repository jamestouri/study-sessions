import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import commentReducer from './comment_reducer';

const configureStore = (preloadedState = {}) => {
  return createStore(commentReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
