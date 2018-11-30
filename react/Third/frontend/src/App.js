import React, { Component } from 'react';
import './App.css';
import * as APIUTIL from './util'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      texts: [],
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }
  handleSubmit(e) {
    e.preventDefault()
    APIUTIL.createText(this.state.text).then(() => this.props.history.push('/'))
  }
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.update('text')} />
          <input type="submit" value = "Submit" /> 
        </form>
      </div>
    );
  }
}

export default App;
