
// display two routes
    // 1 - GET ROUTE to /survey which should display the survey page
    // 2 - DEFAULT ROUTE catch all route that leads to home.html which displays the home page 

    // Dependencies 
    var express = require("express");

    // server gets stored in app 
    var app = express();

    var PORT = 3000;


// route 
app.get("/survey", function(req, res){
    res.json("bird");
    res.writeHead(301, { "Content-Type": "text/html",
 "Access-Control-Allow-Control":"*" });
});


// Listener
app.listen(PORT, function(){
    console.log("App is listening")
});
