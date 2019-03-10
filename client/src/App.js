import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import AddBook from './components/AddBook';
import BookLists from './components/BookLists';

// Apollo client setup.
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Reading Lists</h1>
          <BookLists />
          <hr />
          <AddBook />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
