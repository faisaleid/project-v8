const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BothAssignments = new Schema({
  booth_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vaccinationBooths",
  },
  practitioner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  shift_start_at: {
    type: String,
  },
  shift_ends_at: {
    type: String,
  },
});

module.exports = BothAssignments;
