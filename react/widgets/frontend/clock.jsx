import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time : new Date()
    }
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({time: new Date()})
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  render() {
    let seconds = this.state.time.getSeconds();
    return (
      <h1>{seconds}</h1>
    )
  }

}

export default Clock;
