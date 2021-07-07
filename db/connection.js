const mysql = require('mysql2');

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tracker',
    password: 'password89'
},
console.log('Ypu connected to the tracker database!')
);

module.exports = db;
