import React from 'react';

class PostIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      name: '',
      posts: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    return this.props.fetchPosts()
      .then(res => {
        this.setState({posts: res.posts})
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    const post = {
      body: this.state.body,
      name: this.state.name
    }
    this.props.createPost(post)
      .then(() => this.setState({body: ''}))
      .then(() => this.setState({name: ''}))

  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }
  render() {
    if (!this.state.posts) {
      return null;
    }

    const allPosts = Object.values(this.state.posts)
    const posts = allPosts.map(post => (
      <li>{post.body}</li>
    ))
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Body</h1>
          <input type="text" value={this.state.body} onChange={this.handleChange('body')}/>
          <h1>Name</h1>
          <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>{posts}</ul>
      </div>
    )
  }
}

export default PostIndex;
