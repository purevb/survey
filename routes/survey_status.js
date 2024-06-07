const express = require("express");
const router = express.Router();
const Status = require("../models/survey_status.js");
const {getSurveyStatus,postStatus,searchStatus,updateStatus,deleteStatus} = require("../controller/survey_status.js");
// status nemeh
router.post("/status", postStatus);
// all status
router.get("/status",getSurveyStatus);
// id gaar n status haih
router.get("/status/:id", searchStatus);
router.put("/status/:id", updateStatus);
router.delete("/status/:id",deleteStatus);

module.exports = router;
