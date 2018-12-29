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
      .then(res => this.setState({posts: res.data}))
  }
  render() {
    debugger;
    return(
      <h1>Hi</h1>
    )
  }
}

export default PostIndex;
