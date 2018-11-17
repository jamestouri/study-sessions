import {OPEN_MODAL, CLOSE_MODAL} from '../actions/actions.jsx';
import merge from 'lodash/merge';

const defaultState = {
  modal: null,
};

const modalReducer = (state = defaultState, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case OPEN_MODAL:
      return merge(newState, {modal: action.modal})
    case CLOSE_MODAL:
      return merge(newState, {modal: null})
    default:
      return newState;
  }
}

export default modalReducer;
