import React, { Component } from 'react';
import { graphql } from 'react-apollo';

// query
import { getWordsQuery } from '../queries/word';

// Components
import WordDetail from './WordDetail';

class WordLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    }
  }

  displayWords() {
    const { data } = this.props
    if(data.loading) {
      return(
        <div>
          Loading books...
        </div>
      )
    } else {
      return data.words.map(word => {
        return (
          <li key={word.id} onClick={ (e) => this.setState({ selected : word.id })}>{word.name}</li>
        )
      })
    }
  }

  render(){
    return(
      <div>
        <ul id="word-list">
          { this.displayWords() }
        </ul>
        <hr />
        <WordDetail wordId={this.state.selected} />
      </div>
    );
  }
}

export default graphql(getWordsQuery)(WordLists);