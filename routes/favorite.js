const express = require("express");
const {
    createFavourite,
    getUserFavorites,
    removeFavourite,
    checkFavourite
} = require("../controller/favorite.js");

const router = express.Router();

router.post("/favorites", createFavourite);
router.get("/favorites/:userId", getUserFavorites);
router.delete("/favorites/:property_id/:user_id", removeFavourite);
router.get("/favorites/check/:property_id/:user_id", checkFavourite);

module.exports = router;
