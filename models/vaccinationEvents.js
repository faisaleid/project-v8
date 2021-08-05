const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const vaccinationEventsSchema = new Schema({
  id: {
    type: Number,
  },
  created_at: {
    type: String,
  },
  updated_at: {
    type: String,
  },
  practitioner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  patient_id: {
    type: Number,
  },
  vaccination_status: [
    {
      type: String,
    },
  ],
  vaccinated_arm: [
    {
      type: String,
    },
  ],
  vaccination_booth_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "vaccinationBooths",
  },
});

module.exports = mongoose.model("vaccinationEvents", vaccinationEventsSchema);
