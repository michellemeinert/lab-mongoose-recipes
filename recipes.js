const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const data = require('./data.js');

const Recipe = require('./models/recipesModel')


mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


  Recipe.insertMany(data)
  .then( (data)=> console.log('dataaa', data)) 
  .catch( (err)=> console.log('error!!', err));


  Recipe.findOneAndUpdate({_id: '5cc2c1bd84a308d3e07d751f'}, {$set: {duration: 100}})
  .then( (result)=> console.log('update successful', result))
  .catch( (err)=> console.log('error', err));

  Recipe.remove({title: 'Carrot Cake'})
   .then( (result)=> console.log('succussfully removed', result))
   .catch( (err)=> console.log('err', err))



