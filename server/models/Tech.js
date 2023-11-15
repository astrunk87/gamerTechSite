const { Schema, model } = require('mongoose');

const tech = new Schema({
  item: {type: String, required: true},
  price: Number,
});

const Tech = model('Tech', tech);

module.exports = Tech;
