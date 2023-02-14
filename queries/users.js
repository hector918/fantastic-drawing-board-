const {db} = require("../db/dbConfig.js");

const upsert = async (username, sessionID, timestamp = new Date().toISOString()) => {
  try {
    return await db.one(`
    INSERT INTO users (name, sessionID, timestamp) 
      VALUES($[username], $[sessionID], $[timestamp]) 
      ON CONFLICT (name) DO 
        UPDATE SET sessionID = $[sessionID] , timestamp = $[timestamp]
      RETURNING * ;`
    ,{username, sessionID, timestamp})
  } catch (error) {
    throw error;
  }
}

const remove_sessionid = async (sessionid) => {
  try {
    return await db.none(`UPDATE users SET sessionid='' WHERE sessionid=$[sessionid]`, {sessionid});
  } catch (error) {
    throw error;
  }
}

module.exports = { upsert, remove_sessionid }