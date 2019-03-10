const {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} = require('graphql')

// TYPE
const { WordType } = require('../type/word')

// MODELS
const WordModel = require('../../models/word')

const addWord = {
  type: WordType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    meaning: { type: new GraphQLNonNull(GraphQLString) },
    phonetic: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve (parent, args) {
    const word = new WordModel({
      name: args.name,
      meaning: args.meaning,
      phonetic: args.phonetic
    })

    return word.save()
  }
}

const updateWord = {
  type: WordType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    meaning: { type: new GraphQLNonNull(GraphQLString) },
    phonetic: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve (parent, args) {
    const wordUpdateSet = {
      name: args.name,
      meaning: args.meaning,
      phonetic: args.phonetic
    }

    return WordModel.findOneAndUpdate({ _id: args.id }, { $set: wordUpdateSet })
  }
}

module.exports = {
  addWord,
  updateWord
}
