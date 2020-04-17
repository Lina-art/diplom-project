import React, { Component } from "react";
import Button from "./button";
import Screen from "./screen";
import Clear from "./clear";
import History from "./history";

class Calculator extends Component {
  constructor() {
    super();

    this.state = {
        screen:'',
        firstNumber: '',
        secondNumber: '',
        sign: '',
        history: []
    };
}


equal = val =>{
 
  const newHistory = this.state.history.slice();
  
    this.setState({
      screen: this.state.screen,
      history: [...newHistory, (`${this.state.screen + this.state.firstNumber + this.state.sign + this.state.secondNumber}=${this.state.screen}, `)],
    })
}


addScreen = val => {
  this.setState({ screen: this.state.screen + val });
};


addDecimal = val => {
  if (this.state.screen.indexOf(".") === -1) {
    this.setState({ screen: this.state.screen + val });
  }
};

clearScreen = () => {
  this.setState({ screen: "" });
};

addPlus = () => {
  this.state.firstNumber = this.state.screen;
  this.setState({ screen: "" });
  this.state.sign = "addition";
};

subtraction = () => {
  this.state.firstNumber = this.state.screen;
  this.setState({ screen: "" });
  this.state.sign = "subtraction";
};

multiplication = () => {
  this.state.firstNumber = this.state.screen;
  this.setState({ screen: "" });
  this.state.sign = "multiplication";
};

devision = () => {
  this.state.firstNumber = this.state.screen;
  this.setState({ screen: "" });
  this.state.sign = "devision";
};

equal = val =>{
  this.state.secondNumber = this.state.screen;

  if (this.state.sign === "addition") {
    this.setState({
      screen:
        parseInt(this.state.firstNumber) +
        parseInt(this.state.secondNumber)
    });

  } else if (this.state.sign === "subtraction") {
    this.setState({
      screen:
        parseInt(this.state.firstNumber) -
        parseInt(this.state.secondNumber)
    });

  } else if (this.state.sign === "multiplication") {
    this.setState({
      screen:
        parseInt(this.state.firstNumber) *
        parseInt(this.state.secondNumber)
    });

  } else if (this.state.sign === "devision") {
    this.setState({
      screen:
        parseInt(this.state.firstNumber) /
        parseInt(this.state.secondNumber)
    });
  }
};


render() {
  return (
    <div className="Calculate">
      <div className="wrapper">
      <div className="row">
        <Screen> {this.state.screen} </Screen>
        </div>
        <div className="row">
          <Button handleClick={this.addScreen}>7</Button>
          <Button handleClick={this.addScreen}>8</Button>
          <Button handleClick={this.addScreen}>9</Button>
          <Button handleClick={this.devision}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addScreen}>4</Button>
          <Button handleClick={this.addScreen}>5</Button>
          <Button handleClick={this.addScreen}>6</Button>
          <Button handleClick={this.multiplication}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addScreen}>1</Button>
          <Button handleClick={this.addScreen}>2</Button>
          <Button handleClick={this.addScreen}>3</Button>
          <Button handleClick={this.addPlus}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addScreen}>0</Button>
          <Button handleClick={this.equal}>=</Button>
          <Button handleClick={this.subtraction}>-</Button>
        </div>
        <div className="row">
          <Clear handleClear={this.clearScreen}>CLEAR</Clear>
        </div>
        <div>
        <History history={this.state.history} />
        </div>
      </div>
    </div>
  );
}
}

export default Calculator;   