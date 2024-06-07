const Ques = require("../models/questions");

const getQuestion = async (req, res) => {
  try {
    await Ques.find().then((question) => {
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
  getQuestion,
  postQuestion,
  search,
  updateQuestion,
  deleteQuestion,
};
