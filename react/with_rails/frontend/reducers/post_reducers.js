import {RECEIVE_POSTS,
        RECEIVE_POST,
        REMOVE_POST
      } from '../actions/post_actions';

import merge from 'lodash/merge'

const postReducers = (state = {}, action) => {
  const newState = merge(state, {})
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts
      break;
    case RECEIVE_POST:
      return merge(newState, {[action.post.id]: action.post})
      break;
    default:
      return state;
  }
}

export default postReducers;
