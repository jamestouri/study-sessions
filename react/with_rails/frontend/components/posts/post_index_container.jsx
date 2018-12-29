import React from 'react';
import {connect} from 'react-redux';
import {fetchPosts, createPost} from '../../actions/post_actions';
import PostIndex from './post_index';
const mapStateToProps = state => {
  return {
    posts: Object.values(state.posts),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex)
