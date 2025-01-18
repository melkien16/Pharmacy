const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const usersRoute = require("./routes/users");
const drugstoreRoute = require("./routes/drugstore");
const pharmaciesRoute = require("./routes/pharmacies");

app.use("/users", usersRoute);
app.use("/drugstore", drugstoreRoute);
app.use("/pharmacies", pharmaciesRoute);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
