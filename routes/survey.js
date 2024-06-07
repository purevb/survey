const express = require("express");
const router = express.Router();
// const Survey = require("../models/survey.js");
const {getSurvey,postSurvey,searchSurvey,updateSurvey,deleteSurvey}=require('../controller/survey.js')
// status nemeh
router.post("/survey",postSurvey);
// all status
router.get("/survey",getSurvey);
// id gaar n status haih
router.get("/survey/:id",searchSurvey);

router.put("/survey/:id", updateSurvey);
router.delete("/survey/:id",deleteSurvey);

module.exports = router;
// {
//     "survey_id":1,
//     "survey_status_id":"6656cb9035f1103b8f0296fa",
//     "survey_name":"MCS",
//     "survey_description":"Setgel hanamjiin sudalga",
//      "survey_start_date": "2023-05-01T00:00:00Z"
//  }