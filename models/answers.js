const mongoose = require("mongoose");

const answers_schema = new mongoose.Schema({
  answers_id: {
    type: Number,
    required: [true, "id is required"],
    trim: true,
  },
  questions_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  answer_text: {
    type: String,
    required: [true, "answer_text is required"],
    trim: true,
  },
});

module.exports = mongoose.model("answers", answers_schema);
