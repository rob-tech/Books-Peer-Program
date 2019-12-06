import React, { Component } from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';


class SingleBook extends Component {
state = {};
    render() {
      
        return( 
      
               <Container className="cardCont">
              <Card>
                <CardImg top width="100%" className = "cardImg" src={this.props.items.img} alt={this.props.items.title}/>
                <CardBody>
                    <CardTitle>{this.props.items.title}</CardTitle>
                     <CardSubtitle>{this.props.items.asin}</CardSubtitle>
                   <CardText>{this.props.items.price}</CardText>
                </CardBody>
              </Card>
              </Container>
           
          );
       
    
}
}

      export default SingleBook;