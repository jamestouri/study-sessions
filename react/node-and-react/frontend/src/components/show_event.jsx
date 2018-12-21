import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../App.css';

class ShowEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theEvent: ''
    }
  }

  componentDidMount() {
    axios.get(`api/events/${this.props.match.params._id}`)
       .then(res => this.setState({theEvent: res.data}))

  }

  render() {
    if (this.state.theEvent === '') {
      return null;
    }

    return(
      <div>
        <h1 className="for-show">{this.state.theEvent.body}</h1>
      </div>
    )
  }
}

export default ShowEvent
