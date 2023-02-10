const db = require("../db/dbConfig.js");

const uploaddrawing = async (data) => {
  try {
    return await db.one('INSERT INTO drawings (${this:name}) VALUES (${this:csv}) RETURNING *;', data)
  } catch (error) {
    throw error;
  }
}

module.exports = { uploaddrawing }