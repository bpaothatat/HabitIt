const express = require('express');
const connectDB = require('./config/db');

const app = express();

const port = 3000;

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => console.log(`Server running at http://www.localhost:${port}`));
