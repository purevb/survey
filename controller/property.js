const Property = require("../models/property.js");

// Create a new property
const createProperty = async (req, res) => {
  try {
    const properties = req.body;
    const savedProperties = await Property.insertMany(properties);
    res.status(201).json({ msg: "Properties created successfully!", properties: savedProperties });
  } catch (error) {
    console.error("Error creating properties:", error);
    res.status(500).json({ msg: "Failed to create properties.", error: error.message });
  }
};


const getAllProperties = async (req, res) => {
  try {
    Property.find().then((property) => {
      console.log(property);
      res.status(200).json({ property: property });

    })
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch properties.', error: err.message });
  }
};


// const getQuestion = async (req, res) => {
//   try {
//     await Ques.find()
//       .populate("questions_type_id")
//       .then((question) => {
//         //
//         console.log(question);
//         res.status(200).json({ question: question });
//       });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "aldaatai bn" });
//   }
// };

// Get a property by ID
const getPropertyById = async (req, res) => {
  try {
    const id = req.params.id;
    const property = await Property.findById(id)
      .populate("property_type_id", "type_name")
      .populate("user_id", "name email")
      .populate("region_id", "region_name");

    if (!property) {
      return res.status(404).json({ msg: "Property not found." });
    }

    res.status(200).json({ property });
  } catch (error) {
    console.error("Error fetching property by ID:", error);
    res.status(500).json({ msg: "Failed to fetch property.", error: error.message });
  }
};

// Update a property
const updateProperty = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPropertyData = req.body;

    const updatedProperty = await Property.findByIdAndUpdate(
      id,
      updatedPropertyData,
      { new: true, runValidators: true }
    )
      .populate("property_type_id", "type_name")
      .populate("user_id", "name email")
      .populate("region_id", "region_name");

    if (!updatedProperty) {
      return res.status(404).json({ msg: "Property not found." });
    }

    res.status(200).json({ msg: "Property updated successfully!", property: updatedProperty });
  } catch (error) {
    console.error("Error updating property:", error);
    res.status(500).json({ msg: "Failed to update property.", error: error.message });
  }
};

// Delete a property
const deleteProperty = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProperty = await Property.findByIdAndDelete(id);

    if (!deletedProperty) {
      return res.status(404).json({ msg: "Property not found." });
    }

    res.status(200).json({ msg: "Property deleted successfully!", property: deletedProperty });
  } catch (error) {
    console.error("Error deleting property:", error);
    res.status(500).json({ msg: "Failed to delete property.", error: error.message });
  }
};

module.exports = {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
};
