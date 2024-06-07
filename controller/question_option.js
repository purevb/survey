const Quesop = require("../models/question_options");

const getQoption = async (req, res) => {
  try {
    await Quesop.find().then((queso) => {
      console.log(queso);
      res.status(200).json({ queso: queso });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "algaaaa" });
  }
};
const postQoptoin = async (req, res) => {
  try {
    const newQoption = new Quesop(req.body);
    await newQoption.save().then((ques) => {
      console.log(ques);
      res.status(200).json({ msg: "Amjilttai hadgalgdlaa", ques: ques });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaaa" });
  }
};
const search = async (req, res) => {
  try {
    const id = req.params.id;
    await Quesop.findById(id).then((ques) => {
      console.log(ques);
      res.status(200).json({ ques: ques });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "algaa" });
  }
};
const updateQoption = async (req, res) => {
  try {
    const id = req.params.id;
    const updateQoption = req.body;
    const updateQoptionResult = await Quesop.findByIdAndUpdate(
      { _id: id },
      updateQoption,
      { new: true }
    );
    if (updateQoptionResult) {
      console.log(updateQoptionResult);
      res.status(200).json({ ques: updateQoptionResult, msg: "shineclegdlee" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaaa" });
  }
};
const deleteQoption = async (req, res) => {
  try {
    const id = req.params.id;
    await Quesop.findByIdAndDelete(id).then((ques) => {
      console.log(ques);
      res.status(200).json({ msg: "ustclaasde", ques: ques });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Aldaaa" });
  }
};
module.exports = {
  getQoption,
  postQoptoin,
  search,
  updateQoption,
  deleteQoption,
};
