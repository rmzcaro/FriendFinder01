
var express = require('express')
var bodyParser = require('body-parser')
const path = require('path');

 // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
 res.writeHead(301, { "Content-Type": "text/html",
 "Access-Control-Allow-Control":"*" });

// who should be your salsa dancing buddy --> famous people 
// list of questions 
// var questions = {
//     q1: ["You prefer to spend a majority of time alone that with people"],
//     q2: ["Generally speaking, you make important decisions carefully or with little thought"],
//     q3: ["You prefer action movies over romantic"],
//     q4: ["You feel most confident when you have tackled a tough challenge alone rather than getting recognized for little effort"],
//     q5: ["You think everyone should be a creator or that some peopel should just be observers "],
//     q6: ["It is more difficult to shimmy than to shake"],
//     q7: ["You prefer taking a long walk in a forest rather than a beach"],
//     q8: ["It is more fun to spend time exercising with a ballerina rather than a kick boxer"],
//     q9: ["You rarely do something out of sheer excitement"],
//     q10: ["You prefer trumpets over guitars"]

// };

// // array of questions 
// var questionsArray = [questions.q1]
