const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema ({
  title: {
    type: String, 
    required: true, 
    unique: true
  },
  level: 
  [
    {type: String},
    {value: ['Easy Peasy','Amateur Chef', 'UltraPro Chef']}
  ],
  ingredients: {type: []},
  cuisine: {type: String},
  dishType: [
    {type: String},
    {value: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']}
  ],
  image: {type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg'},
  duration: {type: Number},
  creator: {type: String},
  created: {type: Date, default: Date.now},
})

module.exports = recipeSchema;