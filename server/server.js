const express = require('express');
const app = express();
const port = 3001; // react의 기본값은 3000이니까 3000이 아닌 아무 수를 port로
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // mysql 모듈 사용
const { json } = require('body-parser');
const { useState } = require('react');

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
    const user_id = req.body.user_id;
    const user_pw = req.body.user_pw;
    console.log('================START=================');
    console.log('입력한ID : ' + user_id);
    console.log('입력한PW : ' + user_pw);

    connection.query('select count(*) as result from test where test_body = ?', [user_id], function (err, rows) {
        if (rows[0].result == 1) {
            //아이디 있을때
            connection.query('select * from test where test_body = ?', [user_id], function (err, rows) {
                if (rows[0].test_body === user_id) {
                    //아이디 맞을때
                    if (rows[0].test_pw === user_pw) {
                        //비밀번호도 맞을때
                        res.send({
                            msg: '로그인 성공',
                            rows: rows,
                        });
                    } else {
                        //비밀번호는 다를때
                        res.send({
                            msg: '비밀번호를 확인하세요',
                            rows: rows,
                        });
                    }
                }
            });
        } else {
            //아이디가 없을 때
            res.send({
                msg: '아이디를 확인하세요',
                rows: rows,
            });
        }
    });

    //var sql = 'select * from test where test_body=?';
    /*
    connection.query(sql, [user_id], function (err, rows) {
        if (!err) {
            if (rows[0].result < 1) {
                res.send({ msg: '입력하신 id가 일치하지 않습니다.' });
            } else {
                const sql2 = 'select * from test where test_body =?';
                connection.query(sql2, [user_id], function (err, rows) {
                    if (!err) {
                        res.send(rows[0]);
                        console.log(rows[0]);
                    } else {
                        res.send(err);
                    }
                });
            }
        } else {
            res.send(err);
        }
    });
        */
});

app.listen(port, () => {
    console.log(`Connect at http://localhost:${port}`);
});
