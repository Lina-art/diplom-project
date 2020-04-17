import React, { Component } from "react";
import "./calculate.css";

class Clear extends Component {
    render() {
      return( 
        <div 
          className="clear"
          onClick={() => this.props.handleClear()}
        >
          {this.props.children}
        </div>
      )
    }
  }
export default Clear;