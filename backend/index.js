const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
// middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes   
app.use('/api/v1', userRoutes);

// Database connection
const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});