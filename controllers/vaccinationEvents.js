const user = require("../models/Auth");
const vaccinationBooth = require("../models/vaccinationBoothsModel");
const mongoose = require("mongoose");
const vaccinationEventsSchema = require("../models/vaccinationEvents");

const addvaccinationEvents = (req, res) => {
  let addvaccinationEvents = new vaccinationEventsSchema(req.body);
  addvaccinationEvents.save((err, event) => {
    if (err) {
      console;
      res.send(err);
    } else {
      res.json(event);
    }
  });
};

module.exports = { addvaccinationEvents };
