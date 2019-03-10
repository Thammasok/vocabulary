import { gql } from 'apollo-boost';

const getAuthorsQurey = gql`
  {
    authors{
      id
      name
    }
  }
`

export { getAuthorsQurey }