import $ from 'jquery';

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3001/api/comments',
    data: comment
  })
}

export const fetchComments = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3001/api/comments'
  })
}

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `http://localhost:3001/api/comments/${id}`
  })
}
