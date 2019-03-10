import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import {getBookQuery} from '../queries/book';

class BookDetail extends Component {
  displayBookDetail() {
    const {book} = this.props.data;

    if(book) {
      return(
        <div>
          <h2>{ book.name }</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All book by this author:</p>
          <ul  className="other-books">
            {book.author.books.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return(
        <div className="book-details">
          No book selected...
        </div>
      )
    }
  }

  render(){
    return(
      <div id="book-details">
        <p>Output book detail.</p>
        {this.displayBookDetail()}
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.bookId
      }
    }
  }
})(BookDetail);