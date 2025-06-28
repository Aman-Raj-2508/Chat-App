const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;
// middleware to parse JSON bodies
app.use(express.json());

app.use(cors());
// Middleware to parse cookies
app.use(cookieParser());

// Mount User Routes
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