import ModalReducer from './modal_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
  modals: ModalReducer,
})
