const Favourite = require("../models/favorite");

const createFavourite = async (req, res) => {
    try {
        const { property_id, user_id } = req.body;

        const existingFavourite = await Favourite.findOne({ property_id, user_id });
        if (existingFavourite) {
            return res.status(400).json({ msg: "This property is already in your favorites." });
        }

        const newFavourite = new Favourite({ property_id, user_id });
        const savedFavourite = await newFavourite.save();

        res.status(201).json({ msg: "Favorite added successfully", favourite: savedFavourite });
    } catch (error) {
        console.error("Error creating favorite:", error);
        res.status(500).json({ msg: "Failed to add favorite.", error: error.message });
    }
};

const getUserFavorites = async (req, res) => {
    try {
        const userId = req.params.userId;

        const favourites = await Favourite.find({ user_id: userId }).populate('property_id');

        if (!favourites.length) {
            return res.status(404).json({ msg: "No favorites found for this user." });
        }

        res.status(200).json({ favourites });
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ msg: "Failed to fetch favorites.", error: error.message });
    }
};

const removeFavourite = async (req, res) => {
    try {
        const { property_id, user_id } = req.params;

        const deletedFavourite = await Favourite.findOneAndDelete({ property_id, user_id });

        if (!deletedFavourite) {
            return res.status(404).json({ msg: "Favorite not found." });
        }

        res.status(200).json({ msg: "Favorite removed successfully", favourite: deletedFavourite });
    } catch (error) {
        console.error("Error removing favorite:", error);
        res.status(500).json({ msg: "Failed to remove favorite.", error: error.message });
    }
};

// Check if a user has favorited a specific property
const checkFavourite = async (req, res) => {
    try {
        const { property_id, user_id } = req.params;

        const favourite = await Favourite.findOne({ property_id, user_id });

        if (favourite) {
            return res.status(200).json({ msg: "This property is in your favorites.", favourite });
        } else {
            return res.status(404).json({ msg: "This property is not in your favorites." });
        }
    } catch (error) {
        console.error("Error checking favorite:", error);
        res.status(500).json({ msg: "Failed to check favorite.", error: error.message });
    }
};

module.exports = {
    createFavourite,
    getUserFavorites,
    removeFavourite,
    checkFavourite,
};
