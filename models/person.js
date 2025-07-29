const { uniq } = require('lodash');
const mongoose= require('mongoose');
//define persons schema

const personSchema = new mongoose.Schema({
    name:{
        type: String,
         required:true
    },
    age:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        unique: true
    },  
    address:{
        type:String
    }

})

//create person model
const Person = mongoose.model('person', personSchema );
module.exports = Person;
