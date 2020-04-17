import React, { Component } from "react";
import "./calculate.css";

class History extends Component {
 render() {
   return( 
     <div className="history">
       {this.props.children}
     </div>
   )
 }
}

export default History;