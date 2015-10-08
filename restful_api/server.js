var express = require('express');
var app = express();
var fs = require('fs');

//user4 to be added
var user = {
   "user4" : {
      "name" : "kobe",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

//route to users.json
app.get('/listUsers', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    res.end(data);
  })
})


//add user route
app.get('/addUser', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    data = JSON.parse(data);
    data['user4'] = user['user4'];
    res.end(JSON.stringify(data));
  })
})

//show one user (not working yet)
app.get('/:id', function(req,res){
  fs.readFile(__dirname + '/' + 'users.json', function(err,data){
    data = JSON.parse(data);
    var currentUser = 'user' + req.params.id;
    console.log(currentUser);
    // console.log(typeof currentUser);
    // var user = data.currentUser;
    // res.end(JSON.stringify(user))
  })
})



//server setup
var server = app.listen(8080)
console.log("Listening to Port 8080");
