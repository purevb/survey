const SurveyQ= require("../models/survey_questions");

const postSurvey_Question = async (req,res)=>{
    try{    
        const newSurveyQuestion = new SurveyQ(req.body);
        await newSurveyQuestion.save().then((surveyq)=>{
            console.log(surveyq);
            res.status(200).json({surveyq:newSurveyQuestion});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
const getSurvey_Question = async(req,res)=>{
    try{
        await SurveyQ.find().then((surveyq)=>{
            console.log(surveyq);
            res.status(200).json({surveyq:surveyq});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
const search = async(req,res)=>{
    try{
        const id = req.params.id;
        await SurveyQ.findById(id).then((surveyq)=>{
            console.log(surveyq);
            res.status(200).json({surveyq:surveyq});
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}
const deleteSurvey_Question = async(req,res)=>{
    try{
        const id = req.params.id;
        await SurveyQ.findByIdAndDelete(id).then((surveyq)=>{
            console.log(surveyq);
            res.status(200).json({surveyq:surveyq})
        })

    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Aldaa"})
    }
}

module.exports={
    postSurvey_Question,
    getSurvey_Question,
    search,
    deleteSurvey_Question
}