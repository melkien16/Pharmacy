const db = require("../config/db");

const Pharmacy = {
  create: (pharmacy, callback) => {
    const query = `
      INSERT INTO Pharmacies (name, owner, email, password, confirmPassword, address, contact, openingTime, closingTime, bio, ban, rating, role)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      pharmacy.name,
      pharmacy.owner,
      pharmacy.email,
      pharmacy.password,
      pharmacy.confirmPassword,
      pharmacy.address,
      pharmacy.contact,
      pharmacy.openingTime,
      pharmacy.closingTime,
      pharmacy.bio,
      pharmacy.ban,
      pharmacy.rating,
      pharmacy.role,
    ];
    db.query(query, values, callback);
  },

  findAll: (callback) => {
    const query = `SELECT * FROM Pharmacies`;
    db.query(query, callback);
  },

  findById: (id, callback) => {
    const query = `SELECT * FROM Pharmacies WHERE id = ?`;
    db.query(query, [id], callback);
  },

  findByEmail: (email, callback) => {
    const query = `SELECT * FROM Pharmacies WHERE email = ?`;
    db.query(query, [email], callback);
  },

  update: (id, updatedPharmacy, callback) => {
    const query = `
      UPDATE Pharmacies
      SET name = ?, owner = ?, email = ?, address = ?, contact = ?, openingTime = ?, closingTime = ?, bio = ?, ban = ?, rating = ?, role = ?
      WHERE id = ?
    `;
    const values = [
      updatedPharmacy.name,
      updatedPharmacy.owner,
      updatedPharmacy.email,
      updatedPharmacy.address,
      updatedPharmacy.contact,
      updatedPharmacy.openingTime,
      updatedPharmacy.closingTime,
      updatedPharmacy.bio,
      updatedPharmacy.ban,
      updatedPharmacy.rating,
      updatedPharmacy.role,
      id,
    ];
    db.query(query, values, callback);
  },

  delete: (id, callback) => {
    const query = `DELETE FROM Pharmacies WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = Pharmacy;
