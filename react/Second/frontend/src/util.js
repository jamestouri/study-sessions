import $ from 'jquery';

export const fetchComments = () => {
  return $.ajax({
    method: 'GET',
    url: `api/comments`
  })
}

export const createComment = text => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: {
      comment: {
        text: text
      }
    }
  })
}

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  })
}
