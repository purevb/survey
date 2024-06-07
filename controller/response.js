const Res = require("../models/response");

const postResponse= async(req,res)=>{
    try{
        const newRes = new Res(req.body);
        await newRes.save().then((response)=>{
            console.log(response);
            res.status(200).json({msg:"Amjilttai",response:newRes});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"aldaa garlaa"})
    }
}
const getResponse = async(req,res)=>{
    try{
        await Res.find().then((response)=>{
            console.log(response);
            res.status(200).json({response:response})
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
const search = async(req,res)=>{
    try{
        const id = req.params.id;
        await Res.findById(id).then((response)=>{
            console.log(response);
            res.status(200).json({response:response});
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
const deleteResponse= async(req,res)=>{
    try{
        const id = req.params.id;
        await Res.findByIdAndDelete(id).then((response)=>{
            console.log(response);
            res.status(500).json({msg:"amjilttai ustla",response:response});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
module.exports={
postResponse,
getResponse,
search,
deleteResponse

}