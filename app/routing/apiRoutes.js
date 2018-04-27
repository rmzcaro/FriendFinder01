// Require/import the HTTP module
var http = require("http");
var express = require("express")
var bodyParser = require("body-parser")
var path = require("path");

// load the data 
var friendsList = require("../data/friends");

// routing 
module.exports = function(app) {


    // get route to api/friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
         console.log(friendsList);
    });

    // 

  // once the user has submitted we are using the object 


    // 

    // API post methods -- the below code handles when a user submits a form 
    // data (ie a JSON object ). It creates a new user, this is pushed to a JS array
    // here you want to push an entire object 

    app.post("/api/friends", function(req, res) {
        // req.body is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;
        console.log(newFriend);

        // removes spaces from pattern

        // newFriendSalsa = newFriend.name.replace(/\s+/g, "").toLowerCase(); 
        
        friendsList.push(newFriend);

            res.json(newFriend);


    });

}
