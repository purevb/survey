const PropertyType = require("../models/property_type.js");

const getPropertyType = async (req, res) => {
  try {
    const propertyTypes = await PropertyType.find();
    console.log(propertyTypes);
    res.status(200).json({ propertyTypes });
  } catch (error) {
    console.error("Error fetching property types:", error);
    res.status(500).json({ msg: "Failed to fetch property types." });
  }
};

const postPropertyType = async (req, res) => {
  try {
    const newPropertyType = new PropertyType(req.body);
    const savedPropertyType = await newPropertyType.save();
    console.log(savedPropertyType);
    res.status(201).json({ msg: "Property type saved successfully!", propertyType: savedPropertyType });
  } catch (error) {
    console.error("Error saving property type:", error);
    res.status(500).json({ msg: "Failed to save property type." });
  }
};

const searchPropertyType = async (req, res) => {
  try {
    const id = req.params.id;
    const propertyType = await PropertyType.findById(id);

    if (!propertyType) {
      return res.status(404).json({ msg: "Property type not found." });
    }

    console.log(propertyType);
    res.status(200).json({ propertyType });
  } catch (error) {
    console.error("Error fetching property type by ID:", error);
    res.status(500).json({ msg: "Failed to fetch property type." });
  }
};

const updatePropertyType = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPropertyType = req.body;

    const updatedPropertyTypeResult = await PropertyType.findByIdAndUpdate(
      id,
      updatedPropertyType,
      { new: true, runValidators: true }
    );

    if (!updatedPropertyTypeResult) {
      return res.status(404).json({ msg: "Property type not found." });
    }

    console.log(updatedPropertyTypeResult);
    res.status(200).json({ msg: "Property type updated successfully!", propertyType: updatedPropertyTypeResult });
  } catch (error) {
    console.error("Error updating property type:", error);
    res.status(500).json({ msg: "Failed to update property type." });
  }
};

const deletePropertyType = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedPropertyType = await PropertyType.findByIdAndDelete(id);

    if (!deletedPropertyType) {
      return res.status(404).json({ msg: "Property type not found." });
    }

    console.log(deletedPropertyType);
    res.status(200).json({ msg: "Property type deleted successfully!", propertyType: deletedPropertyType });
  } catch (error) {
    console.error("Error deleting property type:", error);
    res.status(500).json({ msg: "Failed to delete property type." });
  }
};

module.exports = {
  getPropertyType,
  postPropertyType,
  searchPropertyType,
  updatePropertyType,
  deletePropertyType,
};
