const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require('graphql')

const WordType = new GraphQLObjectType({
  name: 'Word',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    meaning: { type: GraphQLString },
    phonetic: { type: GraphQLString }
  })
})

module.exports = {
  WordType
}
