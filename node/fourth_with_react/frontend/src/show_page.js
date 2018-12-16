import React from 'react';
import axios from 'axios';

class ShowPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      theEvent: ''
    }
  }

  componentDidMount(){
    axios.get(`${this.state.id}`)
      .then(respone => this.setState({response.data}))
  }

  render() {
    if(!this.state.theEvent) {
      return null;
    }
    return (
      <h1>{this.state.theEvent.text}</h1>
    )
  }
}
