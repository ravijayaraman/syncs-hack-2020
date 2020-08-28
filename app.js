//jshint esversion:6

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
var revisionRouter = require("./app/routes/hacky.server.routes");

app.use(bodyParser.urlencoded({extended:true}));


app.use("/",revisionRouter)

let port = process.env.PORT
if(port == null || port == ""){
port = 3000
}

app.listen(port,function(){
  console.log("server running on port 3000")
})
