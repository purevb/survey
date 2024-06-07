const mongoose = require("mongoose");
const question_type = require("./question_type");
const questions_schema = new mongoose.Schema({
  questions_id: {
    type: Number,
    required: [true, "id is required"],
    trim: true,
  },
  question_text: {
    type: String,
    required: [true, " text is required"],
  },
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "survey",
  },
  is_Mandatory: {
    type: Boolean,
    required: [true, " is_Mandatory is required"],
  },
});

module.exports = mongoose.model("question", questions_schema);
