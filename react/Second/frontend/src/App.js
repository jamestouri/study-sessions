import React, { Component } from 'react';
import './App.css';
import * as APIUTIL from './util';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      text: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const comments = APIUTIL.fetchComments()
    this.setState({comments: comments});
  }

  componentWillReceiveProps(newProps) {
    if(newProps.comments) {
      this.setState({comments: newProps.comments.responseJSON})
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    APIUTIL.createComment(this.state.text).then(() => this.props.history.push('/'))
  }

  handleDelete(el) {
    APIUTIL.deleteComment(el.id).then(() => this.props.history.push('/'))
  }

  showComment(){
    if(this.state.comments) {
      this.state.comments.responseJSON.map(el => {
        return (
          <li>{el}</li>
        )
      })
    }
  }


  render() {

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange('text')} autoFocus/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {this.showComment()}
        </ul>
      </div>
    );
  }
}

export default App;
