const mongoose = require("mongoose");
const survey_schema = new mongoose.Schema({
  survey_name: {
    type: String,
    required: [true, " name is required"],
  },
  survey_description: {
    type: String,
    required: [true, " description is required"],
  },
  survey_start_date: {
    type: Date,
    required: [true, " startdate is required"],
  },
  survey_end_date: {
    type: Date,
    required: [false, " subheading is required"],
  },
  survey_status: {
    type: Boolean,
    required: [true, "status is required"],
  },
});

module.exports = mongoose.model("survey", survey_schema);
