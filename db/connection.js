const mysql = require('mysql2');
//pool manages multiple connections if need be
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tracker'
});
