'use strict';
module.exports = function(app) {
  var crud = require('../controllers/crudController');


  app.route('/fish')
    .get(crud.list_all_fish)
    .post(crud.create_a_fish);


  app.route('/fish/:fishId')
    .get(crud.read_a_fish)
    .put(crud.update_a_fish)
    .delete(crud.delete_a_fish);

  app.route('/families')
    .get(crud.list_all_families);


  app.use(function(req, res) {
	  res.status(404).send({url: req.originalUrl + ' not found'})
  });

};