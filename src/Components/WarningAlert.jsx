import React, { Component } from "react";
import{Alert} from "reactstrap";



        class WarningAlert extends Component {
            render() {
                return (
                    <>
                   {this.props.AlertSign && 
                    <div>
                    <Alert color="danger">
                    {this.props.AlertSign}
                    </Alert>
                  </div>}
                  </>
                          ) 
                         
        
            }
        }

export default WarningAlert;