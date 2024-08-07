const mongoose = require("mongoose");
const response_schema = new mongoose.Schema({
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "survey",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  begin_date: {
    type: Date,
    required: [true, " startdate is required"],
  },
  end_date: {
    type: Date,
    required: [false, " subheading is required"],
  },
});

module.exports = mongoose.model("response", response_schema);
