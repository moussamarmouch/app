// Use the MariaDB Node.js Connector
const mariadb = require('mariadb');
 
const pool = mariadb.createPool({
  host: "192.168.0.3",
  user: "moes",
  port: 3306,
  password: "test",
  database: "db"
});

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
  pool: pool
});
