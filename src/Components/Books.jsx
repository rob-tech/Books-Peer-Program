import React, { Component } from "react";
import WarningAlert from "./WarningAlert";

class Books extends Component {
    
    constructor(props) {
        super(props);
        this.state = { text: 'Danger warning' };
      }
    
  render() {
    return (
      <>
        <WarningAlert AlertSign={this.state.text}/>
    
      </>
    );
  }
}

export default Books;