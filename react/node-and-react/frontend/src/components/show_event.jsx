import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ShowEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theEvent: ''
    }
  }

  componentDidMount() {
    axios.get(`api/event/${this.props._id}`)
      .then(res => this.setState({theEvent: res.data.body}))
  }

  render() {
    if (this.state.theEvent === '') {
      return null;
    }
    return(
      <div>
        {this.state.theEvent}
      </div>
    )
  }
}

export default ShowEvent
