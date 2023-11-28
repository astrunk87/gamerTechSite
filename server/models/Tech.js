const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  item: {type: String, required: false},
  price: {type: Number, required: false},
  imgLoc: {type: String, required: false},
  reviews: [
    {
      type: String, required: false
    },
  ],
  
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
