const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, "User ID is required"],
    trim: true,
  },
  sex: {
    type: Number,
    required: [true, "sex is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
  },

  phoneNumber: {
    type: String,
    required: [true, "phone number is required"],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  admin:{
    type:Boolean,
    required:[true,"admin mun ymu bish ymu"]
  }
});
module.exports = mongoose.model("User", userSchema);
