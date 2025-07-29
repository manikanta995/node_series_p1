const express = require('express');
const app = express();
const db = require('./db');
const bodyparser = require('body-parser');
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
require('dotenv').config();

// Middleware
app.use(bodyparser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello world from server.js');
});

app.get('/healthz', (req, res) => {
  res.send('OK');
});

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

// Start Server
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Optional: Increase server timeouts for stability on Render
server.keepAliveTimeout = 120000;
server.headersTimeout = 120000;
