const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Get all products
router.get('/', (req, res) => {
  pool.query('SELECT * FROM products', (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error getting products from database' });
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
