const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

// call the function
const app = express();

// app.use()
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


//get func 
app.get("/",function(req,res){

     res.sendFile(__dirname+"/index.html");
    //res.send("hi hide");
})

//get post
app.post("/",function(req,res){

   var fname = req.body.n1;
   var lname = req.body.n2;
   var pass = req.body.n3;

   //console.log( req.body.n1);
  console.log("first name :"+fname+"last name : "+lname+"password  :"+pass);

   //req.send("fhrjfe");
   //res.send(__dirname+"/index.html");

});

app.listen(3000,function()
{
   console.log("server will run at the port number 3000");
});

/*
my- Api key
3379c4314ce7f70bf2e7cd0e24607069-us5
*/