// app.js

const express = require('express');
const bodyParser = require('body-parser');
const users = require('./login');

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware for user authentication
function authenticateUser(req, res, next) {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    req.user = user;
    next();
}

// Protected route
app.get('/login', authenticateUser, (req, res) => {

    res.json({ message: 'Protected route accessed successfully', user: req.user });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
