const { GraphQLObjectType } = require('graphql')

// Mutation
const word = require('./word')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: Object.assign(
    word
  )
})

module.exports = {
  Mutation
}
