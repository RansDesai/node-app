const express = require('express');
fs = require('fs');

var app = express();
var port = process.env.PORT || 3000
var commitsha

//var Git = require( 'nodegit' );
//Git.Clone(repo, "./tmp")

const shell = require('shelljs')
shell.exec('git clone https://github.com/RansDesai/node-app')
//shell.cd("./node-app/")

app.get('/version', function (req, res) {
  console.log("Got a GET request for /version");

  //shell.exec('git pull')
  fs.readFile('./node-app/.git/refs/heads/main', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    commitsha = data;
  });
// This responds a GET request for the /version page.
  res.json(
    {
      myapplication: [
        {
          version: process.env.npm_package_version,
          lastcommitsha: commitsha,
          description: "pre-interview technical test"
        }
    ]
  });
})

var server = app.listen(port, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("The app is listening at http://%s:%s", host, port)
})
