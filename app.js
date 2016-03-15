'use strict';

const PORT = process.env.PORT || 3334;

const usersFilepath = './data/users.json'

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var fs = require('fs');
var uuid = require('uuid');
var http = require('http');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.get('/', function(req, res) {
  var indexPath = path.join(__dirname, 'index.html');
  res.sendFile(indexPath);
});

app.post('/users', function(req, res) {
  fs.readFile(listFilename, function(err, data) {
    var users = JSON.parse(data);
    var newUser = req.body;
    newUser.id = uuid.v1();
    users.push(newUser);
  fs.writeFile(usersFilepath, JSON.stringify(users), function(err) {
    console.error(err);
    res.end();
    });
  })
})

var server = http.createServer(app);

server.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});
