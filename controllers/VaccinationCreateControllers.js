const mongoose = require("mongoose");
const vaccinationBoothsModel = require("../models/vaccinationBoothsModel");

const addvaccinationBooths = (req, res) => {
  let NewvaccinationBooths = new vaccinationBoothsModel(req.body);

  NewvaccinationBooths.save((err, both) => {
    if (err) {
      res.send(err);
    } else {
      res.json(both);
    }
  });
};
//module.exports = addBothAssignments;

const getvaccinationBooths = (req, res) => {
  vaccinationBoothsModel.find({}, (err, both) => {
    if (err) {
      res.send(err);
    }
    res.json(both);
  });
};
//module.exports = getBothAssignments;
const getvaccinationBoothsbyID = (req, res) => {
  vaccinationBoothsModel.findById(req.params.BothID, (err, both) => {
    if (err) {
      res.send(err);
    }
    res.json(both);
  });
};

const updateBoth = (req, res) => {
  vaccinationBoothsModel.findOneAndUpdate(
    { _id: req.params.BothID },
    req.body,
    { new: true, useFindAndModify: false },
    (err, both) => {
      if (err) {
        res.send(err);
      }
      res.json(both);
    }
  );
};

const deleteboth = (req, res) => {
  vaccinationBoothsModel.remove({ _id: req.params.BothID }, (err, both) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "successfuly deleted the Both" });
  });
};

module.exports = {
  getvaccinationBooths,
  addvaccinationBooths,
  getvaccinationBoothsbyID,
  updateBoth,
  deleteboth,
};

// module.exports = getBothAssignmentsbyID;
