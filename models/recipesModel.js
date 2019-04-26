const mongoose = require('mongoose')
const recipeSchema = require('../schemas/recipeSchema');

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
