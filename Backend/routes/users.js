const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all users
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching users.');
    } else {
      res.json(result);
    }
  });
});

// Add a new user
router.post('/', (req, res) => {
  const { name, email, password, phone, address, bio, role, fullcontrol } = req.body;
  const query = `INSERT INTO users (name, email, password, phone, address, bio, role, fullcontrol, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;

  db.query(query, [name, email, password, phone, address, bio, role, fullcontrol], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding user.');
    } else {
      res.status(201).send('User added successfully.');
    }
  });
});

// Update an existing user
router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, password, phone, address, bio, role, fullcontrol } = req.body;
  const query = `UPDATE users 
                 SET name = ?, email = ?, password = ?, phone = ?, address = ?, bio = ?, role = ?, fullcontrol = ?, updated_at = CURRENT_TIMESTAMP
                 WHERE id = ?`;

  db.query(query, [name, email, password, phone, address, bio, role, fullcontrol, userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating user.');
    } else if (result.affectedRows === 0) {
      res.status(404).send('User not found.');
    } else {
      res.status(200).send('User updated successfully.');
    }
  });
});

// Delete a user
router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const query = 'DELETE FROM users WHERE id = ?';

  db.query(query, [userId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting user.');
    } else if (result.affectedRows === 0) {
      res.status(404).send('User not found.');
    } else {
      res.status(200).send('User deleted successfully.');
    }
  });
});

module.exports = router;
