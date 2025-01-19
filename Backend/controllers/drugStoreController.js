const DrugStore = require("../models/drugStoreModel");

const createDrug = (req, res) => {
  const drug = req.body;
  DrugStore.create(drug, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error creating drug.", error: err });
    res.status(201).json({
      message: "Drug created successfully.",
      drugId: results.insertId,
    });
  });
};

const getAllDrugs = (req, res) => {
  DrugStore.findAll((err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching drugs.", error: err });
    res.json(results);
  });
};

const getDrugById = (req, res) => {
  const id = req.params.id;
  DrugStore.findById(id, (err, results) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error fetching drug.", error: err });
    if (results.length === 0)
      return res.status(404).json({ message: "Drug not found." });
    res.json(results[0]);
  });
};

const updateDrug = (req, res) => {
  const id = req.params.id;
  const updatedDrug = req.body;
  DrugStore.update(id, updatedDrug, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error updating drug.", error: err });
    res.json({ message: "Drug updated successfully." });
  });
};

const deleteDrug = (req, res) => {
  const id = req.params.id;
  DrugStore.delete(id, (err) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Error deleting drug.", error: err });
    res.json({ message: "Drug deleted successfully." });
  });
};

module.exports = {
  createDrug,
  getAllDrugs,
  getDrugById,
  updateDrug,
  deleteDrug,
};
