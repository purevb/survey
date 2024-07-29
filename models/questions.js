const mongoose = require('mongoose');

const answersSchema = new mongoose.Schema({
  answer_text: {
    type: String,
    required: [true, 'answer_text is requiredddddd'],
    trim: true,
  },
});

const questionsSchema = new mongoose.Schema({
  surveyID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true,
  },
  questions_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuestionsType',
  },
  question_text: {
    type: String,
    required: [true, 'text is required'],
  },
  answers: [answersSchema],
  is_Mandatory: {
    type: Boolean,
    required: [true, 'is_Mandatory is required'],
  },
});

module.exports = mongoose.model('Question', questionsSchema);
