const express = require("express");
const router = express.Router();
const{postQuestion,getQuestion,search,updateQuestion,deleteQuestion}= require("../controller/question.js");

router.post("/question", postQuestion);
router.get("/question",getQuestion);
router.get("/question/:id",search);
 router.put("/question/:id",updateQuestion);
 router.delete("/question/:id",deleteQuestion);

module.exports = router;