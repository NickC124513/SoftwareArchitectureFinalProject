const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'nick',
  password: 'password',
  database: 'Inventory'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(cors());

app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.get('/products', (req, res) => {
  const sql = 'SELECT * FROM products';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
