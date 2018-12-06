import React, { Component } from 'react';
import './App.css';

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

  }



  handleChange(field) {
    console.log(this.state)
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  handleDelete(el) {
  }


  render() {
    if (this.state.comments.length < 1) {
      return null;
    }
    const objectComments = Object.values(this.state.comments)
    const comments = objectComments.map(el => (
      <li>{el.text}</li>
    ))
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange('text')} value={this.state.text}autoFocus/>
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {comments}
        </ul>
      </div>
    );
  }
}

export default App;
