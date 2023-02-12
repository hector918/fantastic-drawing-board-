const express = require("express");
const cors = require("cors");
const sessions = require("express-session");
const FileStore = require('session-file-store')(sessions);
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(sessions({
  secret: 'sessionsecret1235934!@W@hjghj3059',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },//oneday
  store: new FileStore({}),
  sameSite : "true"
}));
// app.use(express.static("./frontend/build"));
function auth(req, res, next) {
  // Checking for the session
  console.log(req.sessionID,req.session.username,req.originalUrl);
  if(!req.session.username)
  {
    res.status(403).redirect('/');
  }else{
    next();
  }
}

//routing///////////////////////////////////////////
app.use("/draw/login", require('./controller/drawing-board-nolog-controller'));

app.use("/draw", require('./controller/drawing-board-controller'));

app.get("*", (req, res) => {
  console.log(req.session,req.sessionID,"a");
  res.status(404).send("no page found!");
});
////////////////////////////////////////////////
module.exports = app;