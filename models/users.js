const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email is required"],
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  particatedSurveys: [
    {
      type: mongoose.Schema.Types.Mixed,
      ref: "survey",
      required: false,
    },
  ],
});
userSchema.pre("save", async function () {
  try {
    var user = this;
    const salt = await bcrypt.genSalt(10);
    const hashpass = await bcrypt.hash(user.password, salt);
    user.password = hashpass;
  } catch (err) {
    throw err;
  }
});

userSchema.methods.comparePassword = async function (userPassword) {
  try {
    const isMatch = await bcrypt.compare(userPassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};
module.exports = mongoose.model("User", userSchema);
