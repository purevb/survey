const express = require("express");
const router = express.Router();
const {postAnswer,getAnswers,search,updateAnswer,deleteAnswer}= require("../controller/answer");


router.get("/answer",getAnswers);
router.post("/answer",postAnswer);
router.get("answer/:id",search);
router.put("/answer/:id",updateAnswer);
router.delete("/answer/:id",deleteAnswer)


module.exports= router;