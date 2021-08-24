import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import BookCard from './components/BookCard';
import { Row } from 'react-bootstrap';
import BookFormModal from './components/BookFormModal';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      user:this.props.auth0.user,
      show:false
    }

  }

componentDidMount = async () => {
    let data = await axios.get(`${process.env.REACT_APP_SERVER}/books?ownerEmail=${this.state.user.email}`);
    this.setState({
      booksData: data.data
    })
  }

  showModal = ()=>{
    this.setState({
      show:true
    })
  }
  deleteBook = async (bookID)=>{
        // let catsInfo = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteCat?catID=${catID}`)
        let books = await axios.delete(`${process.env.REACT_APP_SERVER}/books/${bookID}?ownerName=${this.state.user.email}`);
        this.setState({
          booksData: books.data
        })

  }
  handleSubmit = async (e)=>{
    e.preventDefault();
    const bookInfo ={
       bookName :e.target.bookName.value,
       bookDescription :e.target.bookDescription.value,
       bookImageUrl : e.target.bookImageUrl.value,
       ownerEmail : this.state.user.email,
    }

  
  let books = await axios.post(`${process.env.REACT_APP_SERVER}/books`,bookInfo);

  this.setState({booksData: books.data,show:false});

}

handleClose = ()=>{
  this.setState({show:false});
 }

  render() {
    return (
      <>
         <BookFormModal show={this.state.show} handleSubmit={this.handleSubmit} handleClose={this.handleClose} />
        <Jumbotron style={{ textAlign: "center" }}>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
          <button style={{ backgroundColor: "#454545",color:"white",padding:"10px",borderRadius:"5px" }}onClick={this.showModal}   >
          Add Book
          </button>
        </Jumbotron>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {this.state.booksData.length > 0 && (this.state.booksData.map((book, idx) =>  <BookCard deleteBook={this.deleteBook} book={book} key={idx} />
        ))}
       </Row>

      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
