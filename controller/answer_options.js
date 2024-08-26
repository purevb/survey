const Aop = require("../models/answer_options");
// 

const postAoptions = async (req, res) => {
  try {
    const newAoption = new Aop(req.body);
    newAoption.save().then((aoption) => {
      console.log(aoption);
      res.status(200).json({ aoption: newAoption });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa" });
  }
};

const postAoptionses = async (req, res) => {
  try {
    const answerOptions = req.body.aoption;
    const newAoption = await  Aop.insertMany(answerOptions);
    res.status(200).json({aoption:newAoption})
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa" });
  }
};

const getAoptions = async (req, res) => {
  try {
<<<<<<< HEAD
    await Aop.find().populate().then((aoption) => {
=======
    await Aop.find()
    // .populate("question_id")
    .then((aoption) => {
>>>>>>> bbdb6e1ee7a32d9980c27738e274c99615698bfb
      console.log(aoption);
      res.status(200).json({ aoption: aoption });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaaa" });
  }
};

const search = async (req, res) => {
  try {
    const id = req.params.id;
    await Aop.findById(id).then((aoption) => {
      console.log(aoption);
      res.status(200).json({ aoption: aoption });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa" });
  }
};

const updateAoptoins = async(req,res)=>{
    try{
        const id = req.params.id;
        const updatedAoption = req.body;
        const updatedAoptionResult = await Aop.findByIdAndUpdate(
            {_id:id},
            updatedAoption,
            {new:true}
        ) 
        if(updatedAoptionResult){
            console.log(updatedAoptionResult);
            res.status(200).json({msg:"Shineclegdlee",aoption:updatedAoptionResult});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"aldaa "})
    }
}

const deleteAoptions = async (req, res) => {
  try {
    const id = req.params.id;
    await Aop.findByIdAndDelete(id).then((aoption) => {
      console.log(aoption);
      res.status(200).josn({ msg: "aldaa" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa" });
  }
};

module.exports = {
  postAoptions,
  postAoptionses,
  getAoptions,
  search,
  updateAoptoins,
  deleteAoptions
};
