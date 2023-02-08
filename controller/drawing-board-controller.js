const express = require("express");
const drawingboard = express.Router();

drawingboard.post("/login", (req, res)=>{
  console.log(req.sessionID);
  res.send("here is db")
})

drawingboard.get("/", (req, res)=>{
  res.send("here is db")
})

module.exports = drawingboard;