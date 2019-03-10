import { gql } from 'apollo-boost';

const getWordsQuery = gql`
  {
    words{
      id
      name
    }
  }
`

const getWordMeaningQuery = gql`
  query($id: ID){
    word(id: $id){
      id
      name
      meaning
      phonetic
    }
  }
`

const addWordMutation = gql`
  mutation($name: String!, $meaning: String!, $phonetic: String!){
    addWord(name: $name, meaning: $meaning, phonetic: $phonetic){
      id
      name
      meaning
      phonetic
    }
  }
`

const updateWordMutation = gql`
  mutation($id: ID!, $name: String!, $meaning: String!, $phonetic: String!){
    updateWord(id: $id, name: $name, meaning: $meaning, phonetic: $phonetic){
      id
      name
      meaning
      phonetic
    }
  }
`

export { 
  addWordMutation, 
  getWordMeaningQuery,
  getWordsQuery,
  updateWordMutation
}