const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, images, profile.html, etc.)
app.use(express.static('public'));

// Route for sign up
app.post('/signup', (req, res) => {
    const { fullName, email, phone } = req.body;

    // Load current users
    const usersFilePath = path.join(__dirname, 'users.json');
    let usersData = [];

    if (fs.existsSync(usersFilePath)) {
        const rawData = fs.readFileSync(usersFilePath);
        usersData = JSON.parse(rawData);
    }

    // Save the new user data
    const newUser = {
        fullName,
        email,
        phone,
        farmSize: '', // Optionally, these fields can be updated later
        crops: ''
    };

    usersData.push(newUser);

    fs.writeFileSync(usersFilePath, JSON.stringify(usersData, null, 2));

    res.json({ success: true });
});

// Route to serve profile.html
app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/profile.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
