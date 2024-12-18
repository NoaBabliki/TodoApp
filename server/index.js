const express = require('express');
const cors = require('cors');
const tasks = require('./data/tasks');;

const app = express();
const PORT = 3000; // or any port you prefer

// Middleware to parse JSON requests
app.use(express.json());

app.use(cors());

// Basic route
app.get('/tasks', (req, res) => {
    res.status(200).json(tasks);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
