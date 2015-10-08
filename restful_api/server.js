var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    // console.log(data);
    res.end(data);
  })
})

var server = app.listen(8080)
console.log("Listening to Port 8080");
