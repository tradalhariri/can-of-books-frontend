import React from 'react';
import {Modal,Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (e)=>{
        this.props.handleSubmit(e);

    }
    handleClose = ()=>{
     this.props.handleClose();
    }


    render() {
        return (
            <Modal show={this.props.show} onHide={this.handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter a name of the book</Form.Label>
                            <Form.Control type="text" placeholder="Enter a name of the book" name="bookName" />
              
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter a description of the book</Form.Label>
                            <Form.Control type="text" placeholder="Enter a description of the book" name="bookDescription" />
                  
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Enter a url image of the book</Form.Label>
                            <Form.Control type="text" placeholder="Enter a url image of the book" name="bookImageUrl" />
              
                        </Form.Group>
                  
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            {/* <Form.Label>Enter a name of the book</Form.Label> */}
                            <Form.Control variant="primary" type="submit" value="Submit" />
              
                        </Form.Group>
                        {/* <input  variant="primary" type="submit" value="Submit"/> */}
                            
                       
                    </Form>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={this.addBook}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        );
    }
}

export default BookFormModal;