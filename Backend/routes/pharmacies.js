const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get all pharmacies
router.get("/", (req, res) => {
  db.query("SELECT * FROM pharmacies", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching pharmacies.");
    } else {
      res.json(result);
    }
  });
});

// Get a specific pharmacy by ID
router.get("/:id", (req, res) => {
  const pharmacyId = req.params.id;
  db.query(
    "SELECT * FROM pharmacies WHERE id = ?",
    [pharmacyId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching pharmacy.");
      } else if (result.length === 0) {
        res.status(404).send("Pharmacy not found.");
      } else {
        res.json(result[0]);
      }
    }
  );
});

// Add a new pharmacy
router.post("/", (req, res) => {
  const {
    name,
    owner,
    email,
    password,
    confirmPassword,
    address,
    contact,
    openingTime,
    closingTime,
    bio,
    status,
    role,
  } = req.body;

  const query = `
    INSERT INTO pharmacies 
    (name, owner, email, password, confirmPassword, address, contact, openingTime, closingTime, bio, status, role, created_at, updated_at) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
  `;

  db.query(
    query,
    [
      name,
      owner,
      email,
      password,
      confirmPassword,
      address,
      contact,
      openingTime,
      closingTime,
      bio,
      status,
      role,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error adding pharmacy.");
      } else {
        res.status(201).send("Pharmacy added successfully.");
      }
    }
  );
});

// Update an existing pharmacy
router.put("/:id", (req, res) => {
  const pharmacyId = req.params.id;
  const {
    name,
    owner,
    email,
    password,
    confirmPassword,
    address,
    contact,
    openingTime,
    closingTime,
    bio,
    status,
    role,
  } = req.body;

  const query = `
    UPDATE pharmacies 
    SET name = ?, owner = ?, email = ?, password = ?, confirmPassword = ?, address = ?, contact = ?, openingTime = ?, closingTime = ?, bio = ?, status = ?, role = ?, updated_at = CURRENT_TIMESTAMP 
    WHERE id = ?
  `;

  db.query(
    query,
    [
      name,
      owner,
      email,
      password,
      confirmPassword,
      address,
      contact,
      openingTime,
      closingTime,
      bio,
      status,
      role,
      pharmacyId,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating pharmacy.");
      } else if (result.affectedRows === 0) {
        res.status(404).send("Pharmacy not found.");
      } else {
        res.status(200).send("Pharmacy updated successfully.");
      }
    }
  );
});

// Delete a pharmacy
router.delete("/:id", (req, res) => {
  const pharmacyId = req.params.id;

  const query = "DELETE FROM pharmacies WHERE id = ?";

  db.query(query, [pharmacyId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting pharmacy.");
    } else if (result.affectedRows === 0) {
      res.status(404).send("Pharmacy not found.");
    } else {
      res.status(200).send("Pharmacy deleted successfully.");
    }
  });
});

module.exports = router;
