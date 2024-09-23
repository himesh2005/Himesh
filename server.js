const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersData = [];

app.post('/signup', (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ success: false, message: 'Passwords do not match' });
  }
  const userData = { fullName, email, password };
  usersData.push(userData);
  fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(usersData));
  res.json({ success: true, message: 'Account created successfully!' });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});