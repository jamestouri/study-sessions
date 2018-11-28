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



  render() {

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange('text')}/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
        </ul>
      </div>
    );
  }
}

export default App;
