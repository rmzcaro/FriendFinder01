
// Require/import the HTTP module
var http = require("http");
var express = require("express")
var bodyParser = require("body-parser")
var path = require("path");

// set up express app
var app = express();
var PORT = process.env.PORT || 8000;

// express.static.path.join
app.use(express.static(path.join(__dirname, "./app/public")));

// express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Routers: The below points our server to a series of route files 
// These routes give the server a guide of how to respond when users visit or request data from various URLs

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// // create server
// var server = http.createServer(requestHandler);

// server listening 
app.listen(PORT, function(){
    console.log("started listening on port " + PORT)
});
