// Dependencies 
var http = require("http");
var path = require("path");

// module.exports = function(app) {
//     console.log("export worked!")

// };

// get route to api/friends
app.get("api/friends", function(req, res){
return res.json(friends);


});

// Displays a single character, or shows "No character found"
// app.get("/api/characters/:character", function(req, res) {
//     // Grab the selected parameter
//     var chosen = req.params.character;
//     console.log(chosen);
  
//     // Filter to show only the selected character
//     for (var i = 0; i < characters.length; i++) {
//       if (chosen === characters[i].routeName) {
//         return res.json(characters[i]);
//       }
//     }
  
//     // Otherwise display "No character found"
//     return res.send("No character found");
//   });

  // ---

// no character found 
    

//A POST routes /api/friends
//handle incoming survey results
//route also be used to handle compatibility logic

app.post("api/friends", function(req,res) {
    var newFriend = req.body;
    console.log(newFriend);

    friends.push(newFriend);
    res.json(newFriend);

});