const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const { route } = require('./menuItemRoutes');

// Routes for Person
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const response = await Person.find();
    console.log("Data fetched");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;