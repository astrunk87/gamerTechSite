const { Schema, model } = require('mongoose');

const techSchema = new Schema({
  item: {type: String, required: true},
  price: {type: Number, required: true},
});

const Tech = model('Tech', techSchema);

module.exports = Tech;
