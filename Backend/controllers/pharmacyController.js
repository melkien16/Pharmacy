const Pharmacy = require("../models/pharmacyModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createPharmacy = async (req, res) => {
  const pharmacy = req.body;

  try {
    const hashedPassword = await bcrypt.hash(pharmacy.password, 10);
    pharmacy.password = hashedPassword;
    pharmacy.confirmPassword = hashedPassword;

    Pharmacy.create(pharmacy, (err, results) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Error creating pharmacy.", error: err });
      res.status(201).json({
        message: "Pharmacy created successfully.",
        pharmacyId: results.insertId,
      });
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating pharmacy.", error });
  }
};

const getAllPharmacies = (req, res) => {
  Pharmacy.findAll((err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching pharmacies.", error: err });
    res.json(results);
  });
};

const getPharmacyById = (req, res) => {
  const id = req.params.id;

  Pharmacy.findById(id, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching pharmacy.", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "Pharmacy not found." });
    res.json(results[0]);
  });
};

const updatePharmacy = (req, res) => {
  const id = req.params.id;
  const updatedPharmacy = req.body;

  Pharmacy.update(id, updatedPharmacy, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error updating pharmacy.", error: err });
    res.json({ message: "Pharmacy updated successfully." });
  });
};

const deletePharmacy = (req, res) => {
  const id = req.params.id;

  Pharmacy.delete(id, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error deleting pharmacy.", error: err });
    res.json({ message: "Pharmacy deleted successfully." });
  });
};

const loginPharmacy = (req, res) => {
  const { email, password } = req.body;

  Pharmacy.findByEmail(email, async (err, results) => {
    if (err)
      return res.status(500).json({ message: "Error logging in.", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "Pharmacy not found." });

    const pharmacy = results[0];
    const isPasswordMatch = await bcrypt.compare(password, pharmacy.password);

    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid credentials." });

    const token = jwt.sign(
      { id: pharmacy.id, role: pharmacy.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ message: "Login successful.", token });
  });
};

module.exports = {
  createPharmacy,
  getAllPharmacies,
  getPharmacyById,
  updatePharmacy,
  deletePharmacy,
  loginPharmacy,
};
