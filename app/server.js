
// Require/import the HTTP module
var http = require("http");
var express = require("express")
var bodyParser = require("body-parser")
var path = require("path");

// set up express app
var app = express();
var PORT = 3000;

// express to handle data parsing
app.use(req, res, function(){
    console.log("hi");
})

// create server
var server = http.createServer(requestHandler);

// server listening 
server.listen(3000, function(){
    console.log("started listening on port")
});

// handle request pass two arguments req and res
function requestHandler(req,res) {
    // res.end("hi all")

    // capture the url the request is made to
    var path = req.url;

    // display the appropriate HTML file depending on the URL
    switch (path) {
        case "/htmlRoutes.js":
        return displayRoot(path,req,res);
    }

};

// // run function when user visits website
// function displayRoot (url, req, res){
//     console.log(req);
//     // var myHTML = "<html>" +
//     // "<body><h1>My Portfolio</h1>" +
//     // "<a href='/'>Go Home</a>" +
//     // "</body></html>";

//     // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//  res.writeHead(200, { "Content-Type": "text/html",
//  "Access-Control-Allow-Control":"*" });

//  // end the response 
//  res.end(myHTML);


// }

 