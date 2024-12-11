const mongoose = require("mongoose");
const property_type = new mongoose.Schema({
  type_name: {
    type: String,
    required: [true, " type_name is required"],
  },

});

module.exports = mongoose.model("propertytype", property_type);
