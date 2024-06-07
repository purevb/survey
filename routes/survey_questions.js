const express = require("express");
const router = express.Router();
const {postSurvey_Question,getSurvey_Question,search,deleteSurvey_Question}= require("../controller/survey_question");


router.post("/squestion",postSurvey_Question);
router.get("/squestion",getSurvey_Question);
router.get("/squestion/:id",search);
router.delete("/squestion/:id",deleteSurvey_Question);

module.exports=router;
