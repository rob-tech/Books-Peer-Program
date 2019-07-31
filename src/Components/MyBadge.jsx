import React, { Component } from "react";
import { Badge } from 'reactstrap';

class myBadge extends Component {
    render() {
        return (
            <>
                {this.props.MyBadgeContent &&
                    <div>
                        <Badge color={this.props.color}>{this.props.MyBadgeContent}</Badge>
                    </div>}
            </>
        )
    }
}





export default myBadge;