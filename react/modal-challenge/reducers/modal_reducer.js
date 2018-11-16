import {OPEN_MODAL, CLOSE_MODAL} from '../actions/actions.jsx';
import merge from 'lodash/merge';

export default modalReducer = (state = {}, action) => {
  let newState = merge({}, state)
  switch (action.type) {
    case OPEN_MODAL:
      return merge(newState, {[action.modal.id]: action.modal})
    case CLOSE_MODAL:
      return {}
    default:
      return state;
  }
}
