const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'inventory-manager',
  password: 'admin123',
  database: 'inventory'
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

app.post('/products', (req, res) => {
  const { product_name, unit_price, units_in_stock } = req.body;
  const sql = 'INSERT INTO products (product_name, unit_price, units_in_stock) VALUES (?, ?, ?)';
  db.query(sql, [product_name, unit_price, units_in_stock], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ product_id: result.insertId, product_name, unit_price, units_in_stock });
  });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM products WHERE product_id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json({ message: `Product with ID ${id} deleted.` });
  });
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  const { unit_price, units_in_stock } = req.body;
  const sql = 'UPDATE products SET unit_price = ?, units_in_stock = ? WHERE product_id = ?';
  db.query(sql, [unit_price, units_in_stock, id], (err, result) => {
    if (err) {
      throw err;
    }
    const updatedProduct = { product_id: id, unit_price, units_in_stock };
    res.json(updatedProduct);
  });
});


app.listen(5000, () => {
  console.log('Server started on port 5000');
});
