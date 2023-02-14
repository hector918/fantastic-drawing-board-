-- DROP DATABASE IF EXISTS fantastic_drawing_board;
-- CREATE DATABASE fantastic_drawing_board;
SELECT 'CREATE DATABASE fantastic_drawing_board' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'fantastic_drawing_board')\gexec;
\c tuner_dev;


DROP TABLE IF EXISTS users, drawings;

CREATE TABLE users (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL UNIQUE,
 sessionID TEXT,
 timestamp TIMESTAMP

);

CREATE TABLE drawings (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 user_id INT,
 board_size TEXT NOT NULL,
 moves TEXT,
 description TEXT,
 timestamp TIMESTAMP,
 deleted BOOLEAN DEFAULT false
);
