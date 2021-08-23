import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { thisExpression } from '@babel/types';
import BookCard from './components/BookCard';
import { Row } from 'react-bootstrap';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: []
    }

  }

componentDidMount = async () => {
    const { user } = this.props.auth0;
    console.log(user);
    let data = await axios.get(`${process.env.REACT_APP_SERVER}/books?ownerEmail=${user.email}`);
    this.setState({
      booksData: data.data
    })
    console.log('ddd', this.state.booksData);



  }

  render() {
    console.log('ttad', this.state.booksData[0]);
    return (
      <>

        <Jumbotron style={{ textAlign: "center" }}>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>
        </Jumbotron>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {this.state.booksData.length > 0 && (this.state.booksData.map((book, idx) =>  <BookCard book={book} key={idx} />
        ))}
       </Row>

      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
