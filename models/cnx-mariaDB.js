// Use the MariaDB  Connector
var mariadb = require('mariadb');
var dotenv = require('dotenv');

dotenv.config();
 
// Create a connection pool
var pool = mariadb.createPool({
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT,
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  });
 
// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});
