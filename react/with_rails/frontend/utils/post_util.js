export const fetchPosts = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/posts'
  })
}


export const fetchPost = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/post/${id}`
  })
}

export const createPost = post => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: post
  })
}

export const removePost = id => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/post/${id}`
  })
}
