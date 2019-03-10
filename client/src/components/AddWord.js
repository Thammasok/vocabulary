import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

//query
import { addWordMutation, getWordsQuery } from '../queries/word';

class AddWord extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      meaning: '',
      phonetic: ''
    }
  }

  submitForm(event) {
    event.preventDefault();
    this.props.addWordMutation({
      variables: {
        name: this.state.name,
        meaning:this.state.meaning,
        phonetic: this.state.phonetic
      },
      refetchQueries: [{ query: getWordsQuery }]
    })
  }

  render(){
    //e = event object
    return(
      <form id="add-book" onSubmit={ this.submitForm.bind(this) }>
        <div className="field">
          <label>Word name:</label>
          <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
        </div>
        <div className="field">
          <label>Phonetic:</label>
          <input type="text" onChange={ (e) => this.setState({ phonetic: e.target.value }) } />
        </div>
        <div className="field">
          <label>Meaning:</label>
          <input type="text" onChange={ (e) => this.setState({ meaning: e.target.value }) } />
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(addWordMutation, { name: "addWordMutation"})
)(AddWord);