import session from './session_reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  session,
})

export default rootReducer;
