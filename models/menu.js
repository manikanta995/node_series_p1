const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  taste: {
    type: String,   
    enum: ['Sweet', 'Spicy', 'Sour', 'Salty', 'Bitter', 'Umami'],
    required: true
  }
});


const Menu = mongoose.model('menu', menuItem);

module.exports = Menu;