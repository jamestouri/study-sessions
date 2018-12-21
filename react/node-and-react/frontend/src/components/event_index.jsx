import React from 'react';
import axios from 'axios';

class EventIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      allEvents: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`api/events`)
      .then(response => {
        this.setState({allEvents: response.data})
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newEvent = {
      body: this.state.body
    }
    axios.post(`/api/events/create`, newEvent)
      .then(res => this.setState(current => ({
        allEvents: [res.data].concat(current.allEvents)
      })))
      .then(() => this.setState({body: ''}))
  }

  handleChange(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  render() {
    if (!this.state.allEvents) {
      return null;
    }
    const theEvents = this.state.allEvents.map(res => (
      <li>{res.body}</li>
    ))
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.body} onChange={this.handleChange('body')} />
          <input type="submit" value="Submit"/>
        </form>
        <ul>
          {theEvents}
        </ul>
      </React.Fragment>
    )
  }
}

export default EventIndex;
