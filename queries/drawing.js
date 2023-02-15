const {db, pgp} = require("../db/dbConfig.js");

const uploaddrawing = async (data) => {
  try {
    return await db.one('INSERT INTO drawings (${this:name}) VALUES (${this:csv}) RETURNING * ;', data)
  } catch (error) {
    throw error;
  }
}

const updatedrawing = async (id, data) => {
  try {
    const columns = Object.keys(data);
    const updateStatement = columns.map(column => `${column}=${pgp.as.csv(data[column])}`).join(', ');
    return await db.one(`UPDATE drawings SET ${updateStatement} WHERE id = $[id] RETURNING * ;`, {id});
  } catch (error) {
    throw error;
  }
}

const deletedrawing = async (id) => {
  try {

    return await db.one(`UPDATE drawings SET deleted=true where id = $[id] RETURNING id, name; `,{id});;
  } catch (error) {
    
  }
}

const get_drawing_by_drawing_id = async ( id ) => {
  try {
    return await db.oneOrNone(`SELECT id, name, description, board_size, moves, timestamp FROM drawings WHERE id=$[id] AND deleted = false ;`, {id});
  } catch (error) {
    throw error;
  }
}

const get_all_drawing_by_userid = async ( id ) => {
  try {
    return await db.manyOrNone(`SELECT id, name, description, board_size, moves, timestamp FROM drawings WHERE user_id=$[id] AND deleted = false ;`, {id});
  } catch (error) {
    throw error;
  }
}

const get_all_drawing = async ( ) => {
  try {
    return await db.manyOrNone(`SELECT id, name, description, board_size, moves, timestamp FROM drawings WHERE deleted = false ORDER BY timestamp DESC LIMIT 10 ;`)
  } catch (error) {
    throw error
  }
}

module.exports = { uploaddrawing, updatedrawing, deletedrawing, get_all_drawing_by_userid, get_all_drawing, get_drawing_by_drawing_id }