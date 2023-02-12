const express = require("express");
const drawingboard = express.Router();
const drawings = require('../queries/drawing');
//////////////////////////////////////////////////////
drawingboard.post("/uploaddrawing", async (req, res)=>{
  try {
    let pre_insert = {
      user_id: req.session.user_id, 
      name: req.body['name'],
      description: req.body['description'],
      board_size : req.body.board_size,
      moves: req.body.moves,
      timestamp: new Date().toISOString(),
    }
    let ret = await drawings.uploaddrawing( pre_insert );
    res.json({id:ret.id});
    
  } catch (error) {
    
    res.status(500).json({error});    
  }
})

drawingboard.put("/uploaddrawing/:id", async (req, res)=>{
  try {
    let { id } = req.params;
    let pre_insert = {
      user_id: req.session.user_id, 
      name: req.body['name'],
      description: req.body['description'],
      board_size : req.body.board_size,
      moves: req.body.moves,
      timestamp: new Date().toISOString(),
    }
    let ret = await drawings.updatedrawing(id, pre_insert );
    res.json({id:ret.id});
    
  } catch (error) {
    
    res.status(500).json({error});    
  }
})

drawingboard.get("/drawings", async (req, res)=>{
  try {
    let ret = await drawings.get_all_drawing_by_userid(req.session.user_id);
    res.json(ret);
  } catch (error) {
    res.status(500).json({error});    
  }
})

drawingboard.get("*", (req, res)=>{
  res.send("here is db")
})

module.exports = drawingboard;
