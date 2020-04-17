import React, { Component } from "react";
import "./calculate.css";

class Button extends Component {
  isSign = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  render() {
    return( 
      <div 
        className={`button ${this.isSign(this.props.children) ? "" : "sign"}`}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    )
  }
}
export default Button;