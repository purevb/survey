const mongoose = require("mongoose");

const answers_schema = new mongoose.Schema({
  answer_text: {
    type: String,
    required: [true, "answer_text is required"],
    trim: true,
  },
});

const questions_schema = new mongoose.Schema({
  surveyID: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'survey',
    required:true 
  },
  questions_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions_type",
  },
  question_text: {
    
    type: String,
    required: [true, " text is required"],
  },
  answers: [{
    type: answers_schema, //Survey.id
    required:false,
  }],
  is_Mandatory: {
    type: Boolean,
    required: [true, " is_Mandatory is required"],
  },
});

module.exports = mongoose.model("question", questions_schema);
