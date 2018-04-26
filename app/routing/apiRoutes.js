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
        //  console.log(friendsList);
    });

    // 

  
    // 

    // API post methods -- the below code handles when a user submits a form 
    // data (ie a JSON object ) this is pushed to a JS array
    app.post("/api/friends", function (req, res) {
        if (friendsList.length > 5) {
            // add the json the user send to the character array
            // friends.push(req.body);
            //display JSON to users
            res.json(true);

        }
    });

}
