import * as APIUTIL from './util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  }
}

const receiveComments = comments => {
  return {
    type: RECEIVE_COMMENTS,
    comments
  }
}

export const fetchComments = () => {
  return APIUTIL.fetchComments()
    .then(comments => dispatch(receiveComments(comments)));
}

export const createComment = comment => {
  return APIUTIL.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)));
}
