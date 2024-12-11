const express = require("express");
const {
    getPropertyType,
    postPropertyType,
    searchPropertyType,
    updatePropertyType,
    deletePropertyType } = require("../controller/property_type.js");
const router = express.Router();
router.get("/propertyTypes", getPropertyType);
router.post("/propertyTypes", postPropertyType);
router.get("/propertyTypes/:id", searchPropertyType);
router.put("/propertyTypes/:id", updatePropertyType);
router.delete("/propertyTypes/:id", deletePropertyType);
module.exports = router;
