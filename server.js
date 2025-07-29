const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Middleware
app.use(bodyparser.json());

// Default Route
app.get('/', (req, res) => {
  res.send('Hello world from server.js');
});


// MenuItem Routes
app.use('/person',personRoutes);
app.use('/menu', menuItemRoutes);


// Start Server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
