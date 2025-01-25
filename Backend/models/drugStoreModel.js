const db = require("../config/db");

const DrugStore = {
  create: (drug, callback) => {
    const query = `INSERT INTO Drugstore (drug_name, category, description, price, type, quantity, pharmacyID)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      drug.drug_name,
      drug.category,
      drug.description,
      drug.price,
      drug.type,
      drug.quantity,
      drug.pharmacyID,
    ];
    db.query(query, values, callback);
  },
  findAll: (callback) => {
    const query = `SELECT * FROM DrugStore`;
    db.query(query, callback);
  },
  findById: (id, callback) => {
    const query = `SELECT * FROM DrugStore WHERE id = ?`;
    db.query(query, [id], callback);
  },
  update: (id, updatedDrug, callback) => {
    const query = `UPDATE DrugStore SET category = ?, description = ?, drug_name = ?, pharmacyID = ?, price = ?, type = ?, quantity = ? WHERE id = ?`;
    const values = [
      updatedDrug.category,
      updatedDrug.description,
      updatedDrug.drug_name,
      updatedDrug.pharmacyID,
      updatedDrug.price,
      updatedDrug.type,
      updatedDrug.quantity,
      id,
    ];
    db.query(query, values, callback);
  },
  delete: (id, callback) => {
    const query = `DELETE FROM DrugStore WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = DrugStore;
