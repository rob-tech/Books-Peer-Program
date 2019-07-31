import React, { Component } from "react";
import { Container, Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import items from "../horror.json";


class SingleBook extends Component {

    render() {

        const latestBooks =  items.map((item) => {
        return (
               <Container className="cardCont">
              <Card>
                <CardImg top width="100%" className = "cardImg" src={item.img} alt={item.title}  key={item.id}/>
                <CardBody>
                  <CardTitle>{item.title}</CardTitle>
                  <CardText>{item.price}</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
              </Container>
           
          );
        });
     
        return (
            <>
            {latestBooks}
            </>
            )
    
        }
}


      export default SingleBook;