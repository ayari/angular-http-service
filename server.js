var express = require('express');
var app = express();
var path = require('path');
var collection = [];
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/', function(req, res) {
    res.sendFile(path.join('./index.html'));
});

app.get('/collection', function(req, res) {
    res.json(collection);
});
app.post('/collection', function(req, res) {
    var item = req.body;
    console.log(item);
    collection.unshift(item);
    res.json(collection);
});

console.log('Server up and running on http://localhost:3000/');
app.listen(3000);