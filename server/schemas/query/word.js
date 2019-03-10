const {
  GraphQLID,
  GraphQLList
} = require('graphql')

// TYPE
const { WordType } = require('../type/word')

// MODELS
const WordModel = require('../../models/word')

const word = {
  type: WordType,
  args: { id: { type: GraphQLID } },
  resolve (parent, args) {
    return WordModel.findById(args.id)
  }
}

const words = {
  type: new GraphQLList(WordType),
  resolve (parent, args) {
    return WordModel.find({})
  }
}

module.exports = {
  word,
  words
}
