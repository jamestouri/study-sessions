import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num1:'',
      num2 :'',
      result: ''
    }
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
  }

  setNum1(e) {
    const num1 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({num1});
  }

  setNum2(e) {
    const num2 = e.target.value ? parseInt(e.target.value) : '';
    this.setState({num2});
  }

  add(e) {
    e.preventDefault()
    const result = this.state.num1 + this.state.num2
    this.setState({result});
  }


  render(){
    return (
      <div>
        num1
        <input onChange={this.setNum1} value={this.state.num1}/>
        num2
        <input onChange={this.setNum2} value={this.state.num2}/>
        <br/>
        <button onClick={this.add}>+</button>
        <h1>{this.state.result}</h1>
      </div>
    );
  }
}

export default Calculator;
