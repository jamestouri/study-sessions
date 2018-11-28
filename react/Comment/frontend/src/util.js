export const createComment = comment => {
  $.ajax({
    method: 'POST',
    url: 'api/comments'
  })
}

export const fetchComments = () => {
  $.ajax({
    method: 'GET',
    url: 'api/comments'
  })
}

export const deleteComment = id => {
  $.ajax({
    method: 'DESTROY',
    url: `api/comments/${id}`
  })
}
