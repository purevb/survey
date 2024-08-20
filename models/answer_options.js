const mongoose = require("mongoose");
const answers_options_schema = new mongoose.Schema({
  survey_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"survey"
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  response_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "response",
  },
  user_choice: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"answersSchema"
  }],
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }
});

module.exports = mongoose.model("answers_options", answers_options_schema);
