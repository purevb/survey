const express = require("express");
const router = express.Router();
const {questionAnswers,usersAnswer,surveyQuestions}= require("../controller/asuultavah");

router.get("/questionAnswers",questionAnswers);
router.get("/usersAnswer",usersAnswer);
router.get("/surveyQuestions",surveyQuestions);
// router.post("/text/:id",textQuestion);

module.exports=router;