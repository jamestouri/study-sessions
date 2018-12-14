import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      events: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault()

    const event = {
      text: this.state.text
    }

    axios.post('/api/events/create', event)
      .then(res => console.log(res.data))
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange('text')}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
