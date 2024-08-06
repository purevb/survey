const { response } = require("express");
const User = require("../models/users");
const UserService = require("../services/user_services");
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

const postUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const findUser= await User.findOne({email:email});
    if(!findUser){
      const succesRes = await UserService.registerUser(email, password);
      res.json({ status: true, success: "User Registered Succesfully" });
    }else {
      throw new Error("User already exists");
    }
    } catch (err) {
    throw err;
  }
};
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.checkuser(email);
    console.log(user);
    if (!user) {
      throw new Error("User dont exist");
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch === false) {
      throw new Error("Password invalid");
    }
    let tokenData = { _id: user._id, email: user.email };
    const token = await UserService.generateToken(tokenData, "secret key", "1h");
    res.status(200).json({ status: true, token: token });
  } catch (err) {
    throw err;
  }
};
module.exports = {
  loginUser,
  getUser,
  search,
  postUser,
};
//07a9560916d39825b5913093c0534bf2efe69392bcb6ba9b6bcb259ac787f4a2
