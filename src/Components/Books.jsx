import React, { Component } from "react";
import WarningAlert from "./WarningAlert";
import MyBadge from "./MyBadge";
import SingleBook from "./SingleBook";

class Books extends Component {
    
    constructor(props) {

        super(props);
        this.state = {text: 'Danger warning' };
        this.badge = {text: 'hello', color:"primary"}

      }
   
    
  render() {
    return (
      <>
        <WarningAlert AlertSign={this.state.text}/>
        <MyBadge MyBadgeContent={this.badge.text} color={this.badge.color}/>
        <SingleBook/>
    
      </>
    );
  }
}

export default Books;

