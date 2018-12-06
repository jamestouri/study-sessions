import {RECEIVE_COMMENT, RECEIVE_COMMENTS} from './actions';
import merge from 'lodash/merge';

const commentReducer = (state = {}, action) => {
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_COMMENT:
      return merge(newState, {[action.comment.id]: action.comment})
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }

}
