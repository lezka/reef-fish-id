'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var FishSchema = new Schema({
  family: {
    type: String,
    Required: 'Kindly enter the family of the fish'
  },
  name: {
    type: String,
    Required: 'Kindly enter the name of the fish'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  age: {
    type: [{
      type: String,
      enum: ['adult', 'juvenile']
    }],
    default: ['adult']
  },
  sex: {
    type: [{
      type: String,
      enum: ['male', 'female']
    }],
    default: ['male']
  }
});

module.exports = mongoose.model('Fish', FishSchema);