const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

module.exports.getLoginPage = function(req,res){
  res.send("Hiii")
}
