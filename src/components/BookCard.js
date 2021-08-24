import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

class BookCard extends React.Component {
    constructor(props){
        super(props)
    }
    deleteBook = ()=>{
      this.props.deleteBook(this.props.book._id)
    }
    render() {

        return (

            <Col style={{position: 'relative'}}>
            <button style={{position: 'absolute',right:'20px',top:'30px',zIndex:'5',fontSize:'32px',opacity:'0.5'}} onClick={this.deleteBook}>❌</button>
            <Card bg="secondary" text="white" style={{margin:"30px 5px"}}>
              <Card.Img variant="top" src={this.props.book.image} />
              <Card.Body>
                <Card.Title>{this.props.book.title}</Card.Title>
                <Card.Text>
                  {`${this.props.book.description.substring(0,100)}... `}<a style={{color:"white"}} href="#">read more</a>
                </Card.Text>

              </Card.Body>
              <Card.Footer>
            <small >  {this.props.book.email}</small>
            </Card.Footer>
            </Card>
            </Col>
        );

    }
}

export default BookCard;