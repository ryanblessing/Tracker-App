const mysql = require('mysql2');

const dbData = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tracker',
    password: 'password89'
},
console.log('Your connected to the tracker database!')
);

dbData.connect(function (err) {
    if(err) throw err
});

module.exports = dbData;
