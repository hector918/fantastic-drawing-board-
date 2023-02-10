const express = require("express");
const drawingboard = express.Router();
const users = require('../queries/users');
const drawings = require('../queries/drawing');
drawingboard.post("/login", async (req, res)=>{
  try {
    let ret = await users.upsert(req.body.name, req.sessionID);
    req.session.user_id = ret.id;
    req.session.user_name = ret.name;
    res.json( ret );
  } catch (error) {
    res.status(500).json({error});    
  }
})



drawingboard.post("/uploaddrawing", async (req, res)=>{
  try {
    let pre_insert = {
      user_id: req.session.user_id, 
      name: req.body['name'],
      description: req.body['descrption'],
      moves: req.body.moves,
      timestamp: new Date().toISOString(),
    }
    let ret = await drawings.uploaddrawing( pre_insert );
    res.json({id:ret.id});
    
  } catch (error) {
    res.status(500).json({error});    
  }
})


drawingboard.get("/", (req, res)=>{
  res.send("here is db")
})

module.exports = drawingboard;
