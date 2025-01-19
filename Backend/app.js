require('dotenv').config();
const express = require("express");
const pharmacyRoutes = require("./routes/pharmacyRoutes");
const userRoutes = require("./routes/userRoutes");
const drugStoreRoutes = require("./routes/drugStoreRoutes");
require("dotenv").config();

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Pharmacy API!");
});


// Set up routes
app.use("/api/pharmacies", pharmacyRoutes); // Pharmacy-related routes
app.use("/api/users", userRoutes); // User-related routes
app.use("/api/drugstore", drugStoreRoutes); // Drugstore-related routes

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
