var express = require('express');
var app = express();
var fs = require('fs');

//route users.json
app.get('/listUsers', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    res.end(data);
  })
})

//user4 to be added
var user = {
   "user4" : {
      "name" : "kobe",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/addUser', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    data = JSON.parse(data);
    console.log(data);
    data['user4'] = user['user4'];
    res.end(JSON.stringify(data));
  })
})

var server = app.listen(8080)
console.log("Listening to Port 8080");
