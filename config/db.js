const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Ijse@1234',
    database: 'se10_react_database'
});

module.exports = pool.promise();
