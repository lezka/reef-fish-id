var express = require('express'),
  app = express(),
  default_port = 3000,
  port = process.env.PORT || default_port,
  default_database = 'mongodb://localhost/Fishdb',
  database = process.env.DATABASE || default_database,
  mongoose = require('mongoose'),
  Task = require('./api/models/fishModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(database);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/apiRoutes');
routes(app);


app.listen(port);


console.log('Fish Id Database RESTful API server started on: ' + port);
