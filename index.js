const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// call the function
const app = express();

app.get("/",function(req,res){

    res.send("hi hide");
});

app.listen(4000,function()
{
   console.log("server will run at the port number 4000");
});