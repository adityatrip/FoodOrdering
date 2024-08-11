const express = require('express');
const mySql = require('mysql');

const app = express();
const port = 3000;

const db = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Mysql@localhost:3306'
});

db.connect((error) => {
    if (error) {
        throw error;
    }
    console.log('My SQL Connected.');
});

app.get('/fetch-data', (req, res) => {
    let sql = 'select * from learninglms.customers';
    db.query(sql, (error, result) => {
        if (error) {
            throw error
        }
        res.send(result);
    });
});

app.listen(port, () => {
    console.log('Server started on port ', port);
});