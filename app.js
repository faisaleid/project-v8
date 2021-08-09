require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const vac_routes = require("./routes/vaccinationBooths");
const both_routes = require("./routes/BothAssignments");
const event_routes = require("./routes/vaccinationEvents");
const vac_center = require("./routes/vaccinationCenters");

var logger = require("morgan");

const userRoutes = require("./routes/Auth");

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/MMDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger("dev"));

// Routes which should handle requests
app.use("/Auth", userRoutes);
vac_routes(app);
both_routes(app);
event_routes(app);
vac_center(app);
app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));

module.exports = app;
