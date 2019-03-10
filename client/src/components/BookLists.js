import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// query
import { getBooksQuery } from '../queries/book';

// Components
import BookDetail from './BookDetail';

class BookLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  displayBooks() {
    const { data } = this.props
    if(data.loading) {
      return(
        <div>
          Loading books...
        </div>
      )
    } else {
      return data.books.map(book => {
        return (
          <li key={book.id} onClick={ (e) => this.setState({ selected : book.id })}>{book.name}</li>
        )
      })
    }
  }

  render(){
    // const { books } = this.props.data;
    return(
      <div>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
        <hr />
        <BookDetail bookId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookLists);