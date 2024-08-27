const { response } = require("express");
const User = require("../models/users");
const UserService = require("../services/user_services");
const asyncHandler = require("express-async-handler");
const getUser = async (req, res) => {
  try {
    await User.find().then((user) => {
      console.log(user);
      res.status(200).json({ user: user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaaaa" });
  }
};
const search = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findById(id).then((user) => {
      console.log(user);
      res.status(200).json({ user: user, msg: "Oldclooo" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "oldhgu bsnde" });
  }
};

const postUser = asyncHandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const succesRes = await UserService.registerUser(email, password);
      res.json({ status: true, success: "User Registered Succesfully" });
    } else {
      throw new Error("User already exists");
    }
  } catch (err) {
    throw err;
  }
});
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.checkuser(email);
    const isMatch = await user.comparePassword(password);
    if (user && isMatch) {
      let tokenData = { _id: user._id, email: user.email };
      const token = await UserService.generateToken(
        tokenData,
        "secret key",
        "1h"
      );
      res.status(200).json({ status: true, token: token, id: user._id });
    } else {
      throw new Error("Password in valid or User dont exist");
    }
  } catch (err) {
    throw err;
  }
});

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = req.body;
    const updatedUserResult = await User.findByIdAndUpdate(
      { _id: id },
      updatedUser,
      { new: true }
    );
    if (updatedUserResult) {
      console.log(updatedUserResult);
      res.status(200).json({ user: updatedUserResult });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "ajilsngue bro" });
  }
};
module.exports = {
  loginUser,
  getUser,
  search,
  postUser,
  updateUser
};
//07a9560916d39825b5913093c0534bf2efe69392bcb6ba9b6bcb259ac787f4a2
