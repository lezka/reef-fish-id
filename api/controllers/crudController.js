'use strict';


var mongoose = require('mongoose'),
  Fish = mongoose.model('Fish');

exports.list_all_fish = function(req, res) {
  Fish.find({}, function(err, fish) {
    if (err)
      res.send(err);
    res.json(fish);
  });
};


exports.create_a_fish = function(req, res) {
  var new_fish = new Fish(req.body);
  new_fish.save(function(err, fish) {
    if (err)
      res.send(err);
    res.json(fish);
  });
};


exports.read_a_fish = function(req, res) {
  Fish.findById(req.params.fishId, function(err, fish) {
    if (err)
      res.send(err);
    res.json(fish);
  });
};


exports.update_a_fish = function(req, res) {
  Fish.findOneAndUpdate(req.params.fishId, req.body, {new: true}, function(err, fish) {
    if (err)
      res.send(err);
    res.json(fish);
  });
};


exports.delete_a_fish = function(req, res) {
  Fish.remove({
    _id: req.params.fishId
  }, function(err, fish) {
    if (err)
      res.send(err);
    res.json({ message: 'Fish successfully deleted' });
  });
};


exports.list_all_families = function(req, res) {
  Fish.distinct("family", function(err, families) {
    if (err)
      res.send(err);
    res.json(families);
  });
};






