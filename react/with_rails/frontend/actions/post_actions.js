import * as APIUtil from '../utils/post_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';


const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  }
}

const receivePost = post => {
  return {
    type: RECEIVE_POST,
    post
  }
}

const deletePost = id => {
  return {
    type: REMOVE_POST,
    id
  }
}

export const fetchPosts = () => {
  return APIUtil.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
}

export const fetchPost = post => {
  return APIUtil.fetchPost(post)
    .then(post => dispatch(receivePost))
}

export const removePost = id => {
  return APIUtil.removePost(id)
    .then(id => dispatch(deletePost(id)))
}
