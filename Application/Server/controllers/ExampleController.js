const Item = require('../models/item');

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createItem = async (req, res) => {
  const item = new Item(req.body);
  try {
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    await Item.findByIdAndDelete(id);
    res.status(200).json({ message: 'Item deleted successfully.' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  deleteItem,
};
