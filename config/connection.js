const mysql = require('mysql2');

const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tracker',
    password: 'password89'
},
console.log('Your connected to the tracker database!')
);

db.connect(function (err) {
    if(err) throw errq
});



module.exports = db;
