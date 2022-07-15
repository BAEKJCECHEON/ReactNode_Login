const express = require('express');
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수를 port로
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // mysql 모듈 사용
const { json } = require('body-parser');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', //mysql의 id
    password: 'root', //mysql의 password
    database: 'tistory', //사용할 데이터베이스
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('test!');
});

app.post('/idplz', (req, res) => {
    const test = req.body.testbody;
    const test2 = req.body.testpw;
    const sql = 'insert into test (test_body, test_pw) values (?,?)';
    var param = [test, test2];
    connection.query(sql, param, function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            console.log('가입성공');
            res.send({
                message: '회원가입 완료',
            });
        }
    });
});

app.post('/login', (req, res) => {
    const test = req.body.userid;
    const test2 = req.body.userpw;
    console.log('================START=================');
    console.log('입력한ID : ' + test);
    console.log('입력한PW : ' + test2);
    var sql = 'select * from test where test_body=?';
    if (
        connection.query(sql, [test], function (err, rows, fields) {
            if (rows[0] == undefined) {
                console.log('아이디 없음');
                res.send({ message: '아이디없음' });
            } else {
                if (rows[0].test_pw == test2) {
                    console.log('로그인 성공');
                } else {
                    console.log('비밀번호 오류');
                }
            }
        })
    );
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
