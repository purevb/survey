const Ques = require("../models/question");
const Response = require("../models/response");
const Survey = require("../models/survey");

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
    const results = await Survey.aggregate([
      {
        $lookup: {
          from: "questions", 
          localField: "_id", 
          foreignField: "surveyID", 
          as: "question_details",
        },
      },
      { $unwind: "$question_details" },
      {
        $group: {
          _id: "$_id",
          survey_name: { $first: "$survey_name" },
          survey_description: { $first: "$survey_description" },
          survey_start_date: { $first: "$survey_start_date" },
          survey_end_date: { $first: "$survey_end_date" },
          survey_status: { $first: "$survey_status" },
          img_url: { $first: "$img_url" },
          questions: {
            $push: {
              _id: "$question_details._id",
              question_text: "$question_details.question_text",
              answer_text: "$question_details.answers",
            },
          },
        },
      },
      {
        $project: {
          _id: 1,
          survey_name: 1,
          survey_description: 1,
          survey_start_date: 1,
          survey_end_date: 1,
          survey_status: 1,
          img_url: 1,
          questions: 1,
        },
      },
    ]);

    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error retrieving survey questions" });
  }
};



module.exports = {
  questionAnswers,
  usersAnswer,
  surveyQuestions,
};
