
// Require/import the HTTP module
var http = require("http");
var express = require('express')
var bodyParser = require('body-parser')
const path = require('path');

// handle request pass two arguments req and res
function requestHandler( req,res) {
    res.end("hi all")
};

// create server
var server = http.createServer(requestHandler);

// server listening 
server.listen(3000, function(){
    console.log("started listening on port")
});

 // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
//  res.writeHead(301, { "Content-Type": "text/html",
//  "Access-Control-Allow-Control":"*" });

