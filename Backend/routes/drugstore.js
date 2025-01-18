const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Get all drugstore items
router.get('/', (req, res) => {
  db.query('SELECT * FROM DrugStore', (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error fetching drugstore items.');
    } else {
      res.json(result);
    }
  });
});

// Add a new drug to the drugstore
router.post('/', (req, res) => {
  const { category, description, drug_name, pharmacyID, price, type, quantity } = req.body;
  const query = `INSERT INTO DrugStore (category, description, drug_name, pharmacyID, price, type, quantity, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`;

  db.query(query, [category, description, drug_name, pharmacyID, price, type, quantity], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error adding drug to the store.');
    } else {
      res.status(201).send('Drug added successfully.');
    }
  });
});

// Update an existing drug record
router.put('/:id', (req, res) => {
  const drugId = req.params.id;
  const { category, description, drug_name, pharmacyID, price, type, quantity } = req.body;
  const query = `UPDATE DrugStore 
                 SET category = ?, description = ?, drug_name = ?, pharmacyID = ?, price = ?, type = ?, quantity = ?, updated_at = CURRENT_TIMESTAMP 
                 WHERE id = ?`;

  db.query(query, [category, description, drug_name, pharmacyID, price, type, quantity, drugId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error updating drug.');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Drug not found.');
    } else {
      res.status(200).send('Drug updated successfully.');
    }
  });
});

// Delete a drug record
router.delete('/:id', (req, res) => {
  const drugId = req.params.id;
  const query = 'DELETE FROM DrugStore WHERE id = ?';

  db.query(query, [drugId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error deleting drug.');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Drug not found.');
    } else {
      res.status(200).send('Drug deleted successfully.');
    }
  });
});

module.exports = router;
