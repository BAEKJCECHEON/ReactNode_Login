const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root', //mysql의 id
    password: 'root', //mysql의 password
    database: 'tistory', //사용할 데이터베이스
});

module.exports = db;
