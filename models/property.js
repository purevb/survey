const mongoose = require("mongoose");

const property = new mongoose.Schema({
  property_type_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "property_type",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "region",
  },
  nightly_price: {
    type: String,
    required: [true, 'price is required'],
  },
  property_name: {
    type: String,
    required: [true, 'property_name is required'],
  },
  num_beds: {
    type: Number,
    required: [true, 'num_beds is required'],
  },
  squares: {
    type: Number,
    required: [true, 'squares is required'],
  },
  description: {
    type: String,
    required: [true, 'description is required'],
  },
  location: {
    type: String,
    required: [true, 'location is required'],
  },
  another_things: {
    type: String,
    required: [true, 'another_things is required'],
  },
  images: [{
    type: String,
    required: [true, 'images is required'],
  }],

});

module.exports = mongoose.model("property", property);
