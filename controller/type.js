const Type= require("../models/question_type");


const getType = async(req,res)=>{
    try{
        await Type.find().then((type)=>{
            console.log(type);
            res.status(200).json({type:type});
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Yu c alga"});
    }
}
const postType = async(req,res)=>{
    try{
        const newType = new Type(req.body);
        newType.save().then((type)=>{
            console.log(type);
            res.status(200).json({msg:"Amjiltta shu"})
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"Ajilsngueots"})
    }

}
const searchType = async(req,res)=>{
    try{
        const id = req.params.id;
        await Type.findById(id).then((type)=>{
            console.log(type);
            res.status(200).json({type:type});
        })        
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg:"ajillhgu bnsde"});
    }
}

const updateType = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedType=req.body;
        const updatedTypeResult= await Type.findByIdAndUpdate({_id:id},updatedType,{new : true});
        if(updatedTypeResult){
            console.log(updatedTypeResult);
            res.status(200).json({type:updatedTypeResult});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"ajilsngue bro"})
    }
}
const deleteType = async(req,res)=>{
    try{
        const id = req.params.id;
        await Type.findByIdAndDelete(id).then((type)=>{
            console.log(type);
            res.status(200).json({msg:"Amjilttai ustla",type:type});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"alga bnsde"})
    }
}
// const updatedType = new Type(req.body)
//         const updatedTypedResult= await Type.findByIdAndUpdate({_id:id},updatedType,{new :true})
module.exports={
    getType,
    postType,
    searchType,
    updateType,
    deleteType
};