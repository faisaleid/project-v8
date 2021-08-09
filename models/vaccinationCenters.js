const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaccinationCentersSchema = new Schema({
  id: {
    type: Number,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  lng: {
    type: Number,
  },
  lat: {
    type: Number,
  },
});

module.exports = mongoose.model("vaccinationCenters", vaccinationCentersSchema);
