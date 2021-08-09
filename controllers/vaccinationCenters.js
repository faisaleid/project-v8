const mongoose = require("mongoose");
const vaccinationCentersModel = require("../models/vaccinationCenters");

const addvaccinationCenters = (req, res) => {
  let NewvaccinationCenters = new vaccinationCentersModel(req.body);

  NewvaccinationCenters.save((err, center) => {
    if (err) {
      res.send(err);
    } else {
      res.json(center);
    }
  });
};
const getvaccinationCenters = (req, res) => {
  vaccinationCentersModel.find({}, (err, both) => {
    if (err) {
      res.send(err);
    }
    res.json(both);
  });
};

const vaccinationCentersbyID = (req, res) => {
  vaccinationCentersModel.findById(req.params.centerID, (err, center) => {
    if (err) {
      res.send(err);
    }
    res.json(center);
  });
};

const updatecenter = (req, res) => {
  vaccinationCentersModel.findOneAndUpdate(
    { _id: req.params.centerID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, center) => {
      if (err) {
        res.send(err);
      }
      res.json(center);
    }
  );
};

const deletecenter = (req, res) => {
  vaccinationCentersModel.remove(
    { _id: req.params.centerID },
    (err, center) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "successfuly deleted the center" });
    }
  );
};

module.exports = {
  addvaccinationCenters,
  getvaccinationCenters,
  vaccinationCentersbyID,
  updatecenter,
  deletecenter,
};
