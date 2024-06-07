const User = require("../models/users");

const getUser= async(req,res)=>{
    try{
        await User.find().then((user)=>{
          console.log(user);
          res.status(200).json({user:user});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"aldaaaa"})
    }
}
const search = async (req,res)=>{
    try{
        const id = req.params.id;
        await User.findById(id).then((user)=>{
            console.log(user);
            res.status(200).json({user:user,msg:"Oldclooo"})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"oldhgu bsnde"})
    }
}
const postUser = async(req,res)=>{
    try{
        const newUser = new User(req.body);
        await newUser.save().then((user)=>{
            console.log(user);
            res.status(200).json({user:user,msg:"Amjiltttai"})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"aldaaa"})
    }
}
module.exports={
    getUser,
    search,
    postUser
}