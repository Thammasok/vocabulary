import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// Components
import AddWord from './components/AddWord';
import WordLists from './components/WordLists';

// Apollo client setup.
const client = new ApolloClient({
  uri: 'http://localhost:4000/api'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>My Vocabulary Lists</h1>
          <AddWord />
          <WordLists />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
