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

// Determine the user's most compatible friend using the following as a guide:
// Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
// With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
// Example:
// User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
// User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
// Total Difference: 2 + 1 + 2 = 5
// Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
// The closest match will be the user with the least amount of difference
