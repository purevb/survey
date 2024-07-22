const mongoose = require("mongoose");
const answers_options_schema = new mongoose.Schema({
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  response_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "response",
  },
  user_choice: [{
    type: String,
    required: true,
    trim: true
  }],
});

module.exports = mongoose.model("answers_options", answers_options_schema);
