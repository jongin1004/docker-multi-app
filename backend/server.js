//필요한 모듈을 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

//Express 서버 생성
const app = express();

// json 형태로 오는 요청의 본문을 해석
app.user(bodyParser.json());

// db.pool.query(`CREATE TABLE lists (
//     id INTEGER PRIMARY KEY AUTOINCREMENT,
//     value TEXT)
//     )`, (err, results, fileds) => {
//         console.log('results', results)
//     })

app.listen(5000, () => {
    console.log('애플리케이션이 5000번 포트에서 접속')
})

app.get('/api/values', function (req, res, next) {
    db.pool.query('SELECT * FROM lists;', 
    (err, results, fileds) => {
        if (err)
            return res.status(500).send(err)
        else 
            return res.json(results)
    })
})

app.post('/api/value', function(req, res, next) {
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`, 
    (err, results, fileds) => {
        if (err)
            return res.status(500).send(err)
        else
            return res.json({ success: true, value: req.body.value})
    })
})