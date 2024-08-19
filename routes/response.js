const express = require("express");
const router = express.Router();
const {
  getResponse,
  updateResponse,
  postResponse,
  search,
  deleteResponse,
} = require("../controller/response");

router.post("/response", postResponse);
router.put("/updateResponse/:id", updateResponse);
router.get("/response", getResponse);
router.get("/response/:id", search);
router.delete("/response/:id", deleteResponse);

module.exports = router;
