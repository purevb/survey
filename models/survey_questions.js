const mongoose = require("mongoose");

const survey_question = new mongoose.Schema({
    questions_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "questions",
      },
      survey_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "survey",
      },
});

module.exports = mongoose.model("survey_question", survey_question);
