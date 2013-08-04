var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = require('buffer')
buffer = new Buffer(fs.readFileSync('index.html') );
var content2 = buffer.toString();


app.get('/', function(request, response) {
  response.send(content2);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
