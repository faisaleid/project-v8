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

const getvaccinationEvents = (req, res) => {
  vaccinationEventsSchema.find({}, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

const updateEvent = (req, res) => {
  vaccinationEventsSchema.findOneAndUpdate(
    { _id: req.params.EventID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, event) => {
      if (err) {
        res.send(err);
      }
      res.json(event);
    }
  );
};

const deleteEvent = (req, res) => {
  vaccinationEventsSchema.remove({ _id: req.params.EventID }, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted the Event" });
  });
};

const getvaccinationEventbyID = (req, res) => {
  vaccinationEventsSchema.findById(req.params.EventID, (err, event) => {
    if (err) {
      res.send(err);
    }
    res.json(event);
  });
};

module.exports = {
  addvaccinationEvents,
  getvaccinationEvents,
  updateEvent,
  deleteEvent,
  getvaccinationEventbyID,
};
