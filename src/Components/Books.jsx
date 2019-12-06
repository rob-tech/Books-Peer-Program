import React, { Component } from "react";
import WarningAlert from "./WarningAlert";
import MyBadge from "./MyBadge";
import BookList from "./BookList";
import items from "../horror.json";




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
         <BookList 
             books={items.splice(this.state.starting, 20)}/>
      
    
      </>
    );
  }
}

export default Books;

