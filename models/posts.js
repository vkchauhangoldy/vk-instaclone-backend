const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true
  },
  likes: {
    type: Number,
    default: 40
  },
  description: {
    type: String,
    require: true
  },
  image:{
    type:String,
    require:true
  },
  date:{
    type: String,
    default:'23 Jan 2023'
  }
})

const myModel = mongoose.model('postData', postSchema)

module.exports = myModel