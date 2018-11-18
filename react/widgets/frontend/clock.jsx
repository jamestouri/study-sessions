import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date(),
    }
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }


  tick() {
    this.setState({time: new Date()})
  }

  render() {
    return (
      <h1>{this.state.time.getSeconds()}</h1>
    )
  }

}


export default Clock;
