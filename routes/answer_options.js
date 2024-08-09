const express = require("express");
const router = express.Router();
const {postAoptions,postAoptionses,getAoptions,search,updateAoptoins,deleteAoptions}= require("../controller/answer_options");

router.get("/aoptions",getAoptions);
router.post("/aoptions",postAoptions);
router.post("/aoptionses",postAoptionses);

router.get("/aoptions/:id",search);
router.put("/aoptions/:id",updateAoptoins);
router.delete("/aoptions/:id",deleteAoptions);

module.exports=router;