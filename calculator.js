const express = require("express");

const app = express();

app.get("/",function(req,res){
  res.send("Hello");
});

app.listen(3000,function(){
  console.log("Server has started on port 3000")
});
