import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getWordMeaningQuery, getWordsQuery, updateWordMutation } from '../queries/word';

class WordDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.wordId,
      name: '',
      meaning: '',
      phonetic: ''
    }
  }

  submitForm(event) {
    event.preventDefault();
    this.props.updateWordMutation({
      variables: {
        name: this.state.name,
        meaning:this.state.meaning,
        phonetic: this.state.phonetic
      },
      refetchQueries: [
        { query: getWordsQuery },
        { query: getWordMeaningQuery },
      ]
    })
  }

  displayWordDetail() {
    const { word } = this.props.data;

    if(word) {
      return(
        <div>
          <h2>{ word.name }</h2>
          <p>{ word.phonetic }</p>
          <p>{ word.meaning }</p>
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
        <p>Vocabulary.</p>
        {this.displayWordDetail()}
      </div>
    );
  }
}

export default compose(
  graphql(getWordMeaningQuery, {
    options: (props) => {
      return {
        variables: {
          id: props.wordId
        }
      }
    }
  }),
  graphql(updateWordMutation, { name: "updateWordMutation"})
)(WordDetail);
