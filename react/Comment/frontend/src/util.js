export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments'
  })
}

export const fetchComments = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/comments'
  })
}

export const deleteComment = id => {
  return $.ajax({
    method: 'DESTROY',
    url: `api/comments/${id}`
  })
}
