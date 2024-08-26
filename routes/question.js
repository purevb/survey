const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const{updateAnswer,postQuestion,postQuestions,getQuestion,search,updateQuestion,deleteQuestion,get}= require("../controller/question.js");

router.post("/question", postQuestion);
router.post("/questions", postQuestions);
router.get("/question",getQuestion);
router.get("/get",get);
router.get("/question/:id",search);
router.put("/question/:id",updateQuestion);
router.put('/question/:questionId/answer/:answerId', updateAnswer); 
router.delete("/question/:id",deleteQuestion);
=======
const { get, updateAnswer, postQuestion, postQuestions, getQuestion, search, updateQuestion, deleteQuestion } = require("../controller/question.js");

router.post("/question", postQuestion);
router.post("/questions", postQuestions);
router.get("/question", getQuestion);
router.get("/get", get);
router.get("/question/:id", search);
router.put("/question/:id", updateQuestion);
router.put('/question/:questionId/answer/:answerId', updateAnswer);
router.delete("/question/:id", deleteQuestion);
>>>>>>> bbdb6e1ee7a32d9980c27738e274c99615698bfb


module.exports = router;