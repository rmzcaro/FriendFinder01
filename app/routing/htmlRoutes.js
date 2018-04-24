// display two routes
// 1 - GET ROUTE to /survey which should display the survey page
// 2 - DEFAULT ROUTE catch all route that leads to home.html which displays the home page 

// Dependencies 
var http = require("http");
var path = require("path");

module.exports = function(app) {
    console.log("export worked!")


// get route to survey html
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});


// default

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}