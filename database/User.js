const { Schema, model, Types } = require('mongoose')

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  log: [
    {
      type: Types.ObjectId,
      ref: 'Exercise'
    }
  ]
})

userSchema.set('toJSON', {
  transform: (document, obj) => {
    delete obj.__v
  }
})

const User = model('User', userSchema)

module.exports = User
