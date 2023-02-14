const express = require("express");
const nolog_drawins = express.Router();
const drawings = require('../queries/drawing');


nolog_drawins.get("/", async (req, res) => {
  try {
    res.json(await drawings.get_all_drawing());
  } catch (error) {
    res.status(500).json({error});    

  }
})

//////////////////////////////////////////////////////
module.exports = nolog_drawins;
