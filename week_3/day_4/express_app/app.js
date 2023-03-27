const express = require("express");
const app = express();

/*
GET - Read
POST - Create
PUT - Update
DELETE - Delete
*/

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(9000, function(){
    console.log("App running on port " + this.address().port);
});