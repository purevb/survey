const Ques = require("../models/questions");
const Aoption = require("../models/answer_options");
const Response = require("../models/response");
const Survey = require("../models/survey");
const User = require("../models/users");
const Squestion = require("../models/survey_questions");

const questionAnswers = async (req, res) => {
  try {
    const results = await Ques.aggregate([
      {
        $lookup: {
          from: "answers",
          localField: "_id",
          foreignField: "questions_id",
          as: "answer_text",
        },
      },
      { $unwind: "$answer_text" }, // answer textiig zadalj bn
      {
        $project: {
          question_text: 1,
          answer_text: "$answer_text.answer_text",
        },
      },
    ]);

    console.log(results);

    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error" });
  }
};
const usersAnswer = async (req, res) => {
  try {
    const result = await Response.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user_id",
        },
      },
      { $unwind: "$user_id" },
      {
        $lookup: {
          from: "surveys",
          localField: "survey_id",
          foreignField: "_id",
          as: "survey_name",
        },
      },
      { $unwind: "$survey_name" },
      
      {
        $lookup: {
          from: "answers_options",
          localField: "_id",
          foreignField: "response_id",
          as: "user_choice",
        },
      },
      { $unwind: "$user_choice" },

      {
        $project: {
          response_id: 1,
          user_id: "$user_id.user_id",
          survey_id: "$survey_name._id",
          survey_name: "$survey_name.survey_name",
          question_id: "$user_choice.question_id",
          user_choice: "$user_choice.user_choice",
        },
      },
    ]);
    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaaaa" });
  }
};
const surveyQuestions = async (req, res) => {
  try {
    const asuult = await Squestion.aggregate([
      {
        $lookup: {
          from: "surveys",
          localField: "survey_id",
          foreignField: "_id",
          as: "survey_name",
        },
      },
      { $unwind: "$survey_name" },
      {
        $lookup: {
          from: "questions",
          localField: "questions_id",
          foreignField: "_id",
          as: "questionDetails",
        },
      },
      { $unwind: "$questionDetails" },
      {
        $project: {
          survey_name: "$survey_name.survey_name",
          questionDetails: "$questionDetails.question_text",
        },
      },
    ]);

    console.log(asuult);
    res.status(200).json(asuult);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  questionAnswers,
  usersAnswer,
  surveyQuestions,
};
