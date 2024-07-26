const Survey = require("../models/survey.js");

const getSurvey = async (req, res) => {
  try {
    Survey.find().then((surveys) => {
      console.log(surveys);
      res.status(200).json({ surveys: surveys });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "ajllhgu bn" });
  }
};
const postSurvey = async (req, res) => {
  try {
    const newSurvey = new Survey(req.body);

    newSurvey.save().then((savedSurvey) => {
      console.log(savedSurvey);
      res.status(201).json({ data:savedSurvey, msg: "survey hadaglagdlaa" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "surveys nemeecee aldaa garaad bn" });
  }
};
const searchSurvey = async (req, res) => {
  try {
    const id = req.params.id;
    Survey.findById(id).then((survey) => {
      console.log(survey);
      res.status(200).json({ survey: survey });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "bhgu bn bhgu bn" });
  }
};

const updateSurvey = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedSurvey = req.body;

    const existingSurvey = await Survey.findById(id);
    if (!existingSurvey) {
      return res.status(404).json({ msg: 'Survey not found' });
    }

    
    const updatedSurveyResult = await Survey.findByIdAndUpdate(
      id, 
      updatedSurvey,
      { new: true }  
    );

    console.log(updatedSurveyResult);
    res.status(200).json({
      msg: 'Survey updated successfully',
      status: updatedSurveyResult
    });
  } catch (error) {
    console.error('Error updating survey:', error.message);
    res.status(500).json({ msg: 'Error updating survey', error: error.message });
  }
};


const deleteSurvey = async(req,res)=>{
    try{
        const id = req.params.id;
        await Survey.findByIdAndDelete(id).then((deletedSurvey)=>{
            console.log(deletedSurvey);
            res.status(200).json({ msg: "Survey succesfully deleted"});
        })

    }catch(error){
        console.log(error);
        res.status(500).json({ msg: "Usthgu bn" });
    }
}

module.exports = {
  getSurvey,
  postSurvey,
  searchSurvey,
  updateSurvey,
  deleteSurvey
};
