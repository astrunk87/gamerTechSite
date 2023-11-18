const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  item: {type: String, required: true},
  price: {type: Number, required: true},
  imgLoc: {type: String, required: false},
  reviews: {type: String, required: false},
  comments: [
    {commentText: {type: String, }}]
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
