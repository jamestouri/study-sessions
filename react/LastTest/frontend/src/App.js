import React, { Component } from 'react';
import './App.css';
import * as APIUTIL from './util';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      comments: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    APIUTIL.fetchComments().then(comments => this.setState({comments: comments}));
  }

  handleSubmit(e) {
    e.preventDefault()
    APIUTIL.createComment(this.state.text)
  }

  update(field) {
    return(e) => {
      this.setState({[field]: e.target.value})
    }
  }


  render() {
    if (!this.state.comments) {
      return null;
    }
    const comments = Object.values(this.state.comments);
    const allComments = comments.map(el => (
      <li>{el.text}</li>
    ))
    return (
      <div className="App">
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.text} onChange={this.update('text')}/>
            <input type="submit" value="Submit" />
          </form>
          <ul>{allComments}</ul>
      </div>
    );
  }
}

export default App;
