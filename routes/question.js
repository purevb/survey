const express = require("express");
const router = express.Router();

const { get, updateAnswer, postQuestion, postQuestions, getQuestion, search, updateQuestion, deleteQuestion } = require("../controller/question.js");

router.post("/question", postQuestion);
router.post("/questions", postQuestions);
router.get("/question", getQuestion);
router.get("/get", get);
router.get("/question/:id", search);
router.put("/question/:id", updateQuestion);
router.put('/question/:questionId/answer/:answerId', updateAnswer);
router.delete("/question/:id", deleteQuestion);


module.exports = router;