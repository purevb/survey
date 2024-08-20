const Ques = require("../models/question");

const getQuestion = async (req, res) => {
  try {
    await Ques.find().populate("questions_type_id").then((question) => {
      //
      console.log(question);
      res.status(200).json({ question: question });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaatai bn" });
  }
};
const postQuestion = async (req, res) => {
  try {
    const newQuestion = new Ques(req.body);
    await newQuestion.save().then((question) => {
      console.log(question);
      res.status(200).json({ question: newQuestion });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldatai bn" });
  }
};

const postQuestions = async (req, res) => {
  try {
    const questioArray=req.body.questions
    const response=await Ques.insertMany(questioArray);
    res.status(200).json({ question: response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldatai bnddaa" });
  }
};


const search = async (req, res) => {
  try {
    const id = req.params.id;
    await Ques.findById(id).then((question) => {
      console.log(question);
      res.status(200).json({ question: question });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "idtai asuult alga" });
  }
};

const updateQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedQuestion = req.body;
    const updatedQuestionResult = await Ques.findByIdAndUpdate(
      { _id: id },
      updatedQuestion,
      { new: true }
    );
    if (updatedQuestionResult) {
      console.log(updatedQuestionResult);
      res.status(200).json({ question: updatedQuestionResult });
    }
  } catch (error) { 
    console.log(error);
    res.status(500).json({ msg: "aldaaaaaa" });
  }
};
const updateAnswer = async (req, res) => {
  try {
    const questionId = req.params.questionId;
    const answerId = req.params.answerId;
    const updatedAnswerText = req.body.answer_text;
    const question = await Ques.findById(questionId);

    if (!question) {
      return res.status(404).json({ msg: 'Question not found' });
    }
    const answer = question.answers.id(answerId);
    if (!answer) {
      return res.status(404).json({ msg: 'Answer not found' });
    }
    answer.answer_text = updatedAnswerText;
    await question.save();
    res.status(200).json({ msg: 'Answer updated successfully', question });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'An error occurred' });
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    await Ques.findByIdAndDelete(id).then((ques) => {
      console.log(ques);
      res.status(200).json({ msg: "amjilttai ustlaa", question: ques });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa" });
  }
};


module.exports = {
  updateAnswer,
  getQuestion,
  postQuestion,
  postQuestions,
  search,
  updateQuestion,
  deleteQuestion,
};