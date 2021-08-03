const express = require('express');
var app = express();
var port = process.env.PORT || 3000

// This responds a GET request for the /version page.
app.get('/version', function (req, res) {
  console.log("Got a GET request for /version");
  res.json(
    [
        {
          version: "1.0",
          lastcommitsha: "123456",
          description: "Hello world"
        }
    ]
  );
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("The app is listening at http://%s:%s", host, port)
})
