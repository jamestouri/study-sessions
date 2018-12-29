import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      name: '',
      posts: []
    }
  }

  componentDidMount() {
    return this.props.fetchPosts()
      .then(res => this.setState({posts: res}))
  }

  handleSubmit(e) {
    e.preventDefault()
    const post = {
      body: this.state.body,
      name: this.state.name
    }
    this.props.createPost(post)

  }
  render() {
    if (!this.state.posts) {
      return null;
    }
    const allPosts = Object.values(this.state.posts)
    const posts = allPosts.map(post => {
      <li>{post.body}</li>
    })

    return(
      <div>
        <ul>{posts}</ul>
      </div>
    )
  }
}

export default PostIndex;
