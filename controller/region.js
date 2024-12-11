const Region = require("../models/region");

// Fetch all regions
const getRegion = async (req, res) => {
    try {
        const regions = await Region.find();
        console.log(regions);
        res.status(200).json({ regions });
    } catch (error) {
        console.error("Error fetching regions:", error);
        res.status(500).json({ msg: "Something went wrong while fetching regions." });
    }
};

// Add a new region
const postRegion = async (req, res) => {
    try {
        const newRegion = new Region(req.body);
        const savedRegion = await newRegion.save();
        console.log(savedRegion);
        res.status(201).json({ msg: "Region added successfully!", region: savedRegion });
    } catch (error) {
        console.error("Error adding region:", error);
        res.status(500).json({ msg: "Failed to add region." });
    }
};

// Fetch a single region by ID
const searchRegion = async (req, res) => {
    try {
        const id = req.params.id;
        const region = await Region.findById(id);

        if (!region) {
            return res.status(404).json({ msg: "Region not found." });
        }

        console.log(region);
        res.status(200).json({ region });
    } catch (error) {
        console.error("Error fetching region by ID:", error);
        res.status(500).json({ msg: "Something went wrong while fetching the region." });
    }
};

// Update a region
const updateRegion = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedRegion = req.body;

        const updatedRegionResult = await Region.findByIdAndUpdate(
            id,
            updatedRegion,
            { new: true, runValidators: true } // Ensure new document is returned and validations are applied
        );

        if (!updatedRegionResult) {
            return res.status(404).json({ msg: "Region not found." });
        }

        console.log(updatedRegionResult);
        res.status(200).json({ msg: "Region updated successfully!", region: updatedRegionResult });
    } catch (error) {
        console.error("Error updating region:", error);
        res.status(500).json({ msg: "Failed to update region." });
    }
};

// Delete a region
const deleteRegion = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedRegion = await Region.findByIdAndDelete(id);

        if (!deletedRegion) {
            return res.status(404).json({ msg: "Region not found." });
        }

        console.log(deletedRegion);
        res.status(200).json({ msg: "Region deleted successfully!", region: deletedRegion });
    } catch (error) {
        console.error("Error deleting region:", error);
        res.status(500).json({ msg: "Failed to delete region." });
    }
};

module.exports = {
    getRegion,
    postRegion,
    searchRegion,
    updateRegion,
    deleteRegion,
};
