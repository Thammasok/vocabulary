const { GraphQLObjectType } = require('graphql')

// Query
const word = require('./word')

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: Object.assign(
    word
  )
})

module.exports = {
  RootQuery
}
