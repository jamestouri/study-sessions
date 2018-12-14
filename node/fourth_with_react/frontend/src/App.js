import React, { Component } from 'react';
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

  componentDidMount() {
    axios.get(`api/events`)
      .then(events => {
        this.setState({events: events})
      })
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
    if(this.state.events.length === 0) {
      return null;
    }
    const theEvents = Object.values(this.state.events);

    const allEvents = theEvents.map(theEvent => (
      <li>theEvent</li>
    ))
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
