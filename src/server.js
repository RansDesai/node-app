const express = require('express');
var app = express();

// This responds a GET request for the / page.
app.get('/version', function (req, res) {
  console.log("Got a GET request for /");
  res.send('Hello World!')
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("The app is listening at http://%s:%s", host, port)
})
