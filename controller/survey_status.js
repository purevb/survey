const Status = require("../models/survey_status.js");

const getSurveyStatus = async (req, res) => {
  try {
    Status.find().then((status) => {
      console.log(status);
      res.status(200).json({ status: status });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ajluulaac archaagu" });
  }
};

const postStatus = async (req, res) => {
  try {
    const newStatus = new Status(req.body);
    newStatus.save().then((statuses) => {
      console.log(statuses);
      res.status(200).json({ msg: "Amjilttai hadgalagdlaa" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hadgalagdahgui bn" });
  }
};

const searchStatus = async (req, res) => {
  try {
    const id = req.params.id;
    await Status.findById(id).then((status) => {
      console.log(status);
      res.status(200).json({ status: status });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "bhgubn" });
  }
};
const updateStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedStatus = req.body;
    const updatedStatusResult = await Status.findOneAndUpdate(
      { _id: id },
      updatedStatus,
      { new: true }
    );
    if (updatedStatusResult) {
      console.log(updatedStatusResult);
      res.status(200).json({
        msg: "Status successfully updated",
        status: updatedStatusResult,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "bolhgu bn" });
  }
};

const deleteStatus = async (req,res)=>{
    try{
        const id= req.params.id;
        await Status.findByIdAndDelete(id).then((status)=>{
            console.log(status);
            res.status(200).json({msg:"Utsclaa :(",status:status})
        })
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"ustgldaaa"})
    }
}
module.exports = {
  getSurveyStatus,
  postStatus,
  searchStatus,
  updateStatus,
  deleteStatus
};
