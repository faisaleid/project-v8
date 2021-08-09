const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaccinationBoothsSchema = new Schema({
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
  vaccination_center_id: {
    type: Number,
  },
  practitioners: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("vaccinationBooths", vaccinationBoothsSchema);
