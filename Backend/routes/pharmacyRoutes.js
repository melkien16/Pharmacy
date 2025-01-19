const express = require("express");
const {
  createPharmacy,
  getAllPharmacies,
  getPharmacyById,
  updatePharmacy,
  deletePharmacy,
  loginPharmacy,
} = require("../controllers/pharmacyController");

const router = express.Router();

// Routes for pharmacy operations
router.post("/register", createPharmacy); // Register a new pharmacy
router.post("/login", loginPharmacy); // Pharmacy login
router.get("/", getAllPharmacies); // Get all pharmacies
router.get("/:id", getPharmacyById); // Get pharmacy by ID
router.put("/:id", updatePharmacy); // Update pharmacy
router.delete("/:id", deletePharmacy); // Delete pharmacy

module.exports = router;
