const express = require("express");
const drawingNolog = express.Router();
const users = require('../queries/users');

//////////////////////////////////////////////////////////////
drawingNolog.get("/", async (req, res) => {
  res.send("where is your name");
})

drawingNolog.post("/", async (req, res) => {
  try {
    let ret = await users.upsert(req.body.name, req.sessionID);
    req.session.user_id = ret.id;
    req.session.user_name = ret.name;
    res.json(ret);
  } catch (error) {
    res.status(500).json({ error });
  }
})

drawingNolog.delete("/", async (req, res) => {
  try {
    if (req.session.user_id) users.remove_sessionid(req.sessionID);
    delete req.session.user_id;
    delete req.session.user_name;
    res.json({ action: "logout" });
  } catch (error) {
    res.status(500).json({ error });
  }
})

//////////////////////////////////////////////////////
module.exports = drawingNolog;
