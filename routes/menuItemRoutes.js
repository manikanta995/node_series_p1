const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

// POST - Create new menu item
router.post('/', async (req, res) => {
  try {
    const data_info = req.body;
    const newMenu = new Menu(data_info);
    const response = await newMenu.save();
    console.log("Menu item saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET - Fetch all menu items
router.get('/', async (req, res) => {
  try {
    const response = await Menu.find();
    console.log("Menu items fetched");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET - Fetch items by taste
router.get('/:taste', async (req, res) => {
  try {
    const taste = req.params.taste;
    const validTastes = ['Sweet', 'Spicy', 'Sour', 'Salty', 'Bitter', 'Umami'];

    if (validTastes.includes(taste)) {
      const response = await Menu.find({ taste });
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: 'Invalid taste type' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const menuID = req.params.id;
    const updatedMenuData = req.body;

    const response = await Menu.findByIdAndUpdate(menuID, updatedMenuData, {
      new: true,
      runValidators: true // ✅ correct spelling
    });

    if (!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json(response); // ✅ send updated document
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const menuID = req.params.id;

    const response = await Menu.findByIdAndDelete(menuID);

    if (!response) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    res.status(200).json({ message: 'Menu item deleted successfully', deletedItem: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
