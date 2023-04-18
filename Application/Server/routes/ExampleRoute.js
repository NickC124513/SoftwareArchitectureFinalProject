const express = require('express');
const router = express.Router();

const {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/item');

router.get('/items', getAllItems);
router.post('/items', createItem);
router.put('/items/:id', updateItem);
router.delete('/items/:id', deleteItem);

module.exports = router;
