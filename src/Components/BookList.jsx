import React, { Component } from "react";
import SingleBook from "./SingleBook";

class BookList extends Component {

    render() {
      
         return (
      <div className="container">
        <div className="row">
          {this.props.books.map(items => (
            <div key={items.asin} className="col-md-3">
              <SingleBook items={items} />
            </div>
          ))}
            </div>
      </div>
        )
       
    
}
}

      export default BookList ;