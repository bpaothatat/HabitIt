const express = require('express');
const connectDB = require('./config/db');

const weights = require('./routes/api/weights');

const app = express();

const port = 3000;

// Connect Database
connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/weights', weights);

app.listen(port, () => console.log(`Server running at http://www.localhost:${port}`));
