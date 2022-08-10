const { Schema, model } = require('mongoose')

const exerciseSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }
})

exerciseSchema.set('toJSON', {
  transform: (document, obj) => {
    delete obj.__v
  }
})

const Exercise = model('Exercise', exerciseSchema)

module.exports = Exercise
