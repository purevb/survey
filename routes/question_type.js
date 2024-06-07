const express = require("express");
const router = express.Router();

const {postType,getType,searchType,updateType,deleteType}= require("../controller/type");

router.post("/type",postType);
router.get("/type",getType);
router.get("/type/:id",searchType);
router.put("/type/:id",updateType);
router.delete("/type/:id",deleteType);

module.exports= router;