const mongoose = require("mongoose");
const BothAssignments = require("../models/BothAssignments");
const user = require("../models/Auth");
const vaccinationBooth = require("../models/vaccinationBoothsModel");

const addBothAssignments = (req, res) => {
  const userpromise = user.findById({ _id: req.body.practitioner_id });
  const vaccinationBoothspromise = vaccinationBooth.findOne({
    id: req.body.booth_id,
  });
  Promise.all([userpromise, vaccinationBoothspromise]).then((objects) => {
    const practitioner = objects[0];
    const both = objects[1];
    console.log("----------------------------------------------");
    console.log(practitioner);
    console.log(both);
    console.log("----------------------------------------------");
    practitioner.Boths.push(both._id);
    both.practitioners.push(practitioner._id);
    userSavePromise = practitioner.save();
    vaccinationBoothsSavePromise = both.save();
    Promise.all([userSavePromise, vaccinationBoothsSavePromise]).then(
      (savedObjs) => {
        res.send("User has been assigned");
      }
    );
  });
};
module.exports = addBothAssignments;

const getBothAssignments = (req, res) => {
  BothAssignmentModel.find({}, (err, Assignments) => {
    if (err) {
      res.send(err);
    }
    res.json(Assignments);
  });
};
//module.exports = getBothAssignments;

// module.exports = {
//   addUserToBoth,
//   addBothAssignmentsToUser,
// };

// const getBothAssignmentsbyID = (req, res) => {
//   BothAssignmentModel.findById(req.params.AssignmentID, (err, Assignment) => {
//     if (err) {
//       res.send(err);
//     }
//     res.json(Assignment);
//   });
// };
// module.exports = getBothAssignmentsbyID;
