const express = require("express");
const cors = require("cors");
const sessions = require("express-session");
var FileStore = require('session-file-store')(sessions);
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.use(sessions({
  secret: 'sessionsecret1235934!@W@hjghj3059',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 86400000 },//oneday
  store: new FileStore({}),
  sameSite : "lax"
}));
app.use(express.static("./frontend/starter-pern-crud/build"));

function auth(req, res, next) {
  // Checking for the session
  console.log(req.sessionID,req.session.username,req.originalUrl);
  if(!req.session.username)
  {
    res.status(401).redirect('/');
  }
  else
  {
    next();
  }
  
}


/////////////////////////////////////////////
app.get("*", (req, res) => {
  console.log(req.session,req.sessionID,"a")
  res.status(404).send("no page found!");
});

////////////////////////////////////////////////
module.exports = app;