const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
 title: {
  type: String,
  trim: true,  
  required: true,
 },
 type: {
  type: String,
  trim: true
 },
 description: {
    type: String,
    trim: true
  },
    price: {
    type: String,
    trim: true
  },
    rating: {
    type: String,
    trim: true
  }
});
module.exports = mongoose.model('Products', ProductSchema)