const db = require("../db/dbConfig.js");

const uploaddrawing = async (data) => {
  try {
    return await db.one('INSERT INTO drawings (${this:name}) VALUES (${this:csv}) RETURNING *;', data)
  } catch (error) {
    throw error;
  }
}

const updatedrawing = async (data) => {
  try {
    // return await db.one('INSERT INTO drawings (${this:name}) VALUES (${this:csv}) RETURNING *;', data)
  } catch (error) {
    throw error;
  }
}

const get_all_drawing_by_userid = async ( id ) => {
  try {
    return await db.manyOrNone(`SELECT id, name, description, board_size, moves, timestamp FROM drawings WHERE user_id=$[id]`, {id});
  } catch (error) {
    throw error;
  }
}

const get_all_drawing = async ( id ) => {
  try {
    
  } catch (error) {
    
  }
}

module.exports = { uploaddrawing, get_all_drawing_by_userid }