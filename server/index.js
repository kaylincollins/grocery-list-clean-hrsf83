var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var data = require('../database/data');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParse.json())

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.get('/list', function(req, res) {
  res.end(JSON.stringify(data.groceryList));
})

app.post('/list', function(req, res) {
  console.log(req.data);
  res.end();
})