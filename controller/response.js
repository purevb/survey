const Res = require("../models/response");

const postResponse = async (req, res) => {
  try {
    const newRes = new Res(req.body);
    await newRes.save().then((response) => {
      console.log(response);
      res.status(200).json({ msg: "Amjilttai", response: newRes });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "aldaa garlaa" });
  }
};

const getResponse = async (req, res) => {
  try {
    await Res.find().then((response) => {
      console.log(response);
      res.status(200).json({ response: response });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server Error", error: error.message });
  }
};

const updateResponse = async (req, res) => {
  try {
    const id = req.params.id;
    const { end_date } = req.body;

    const existingResponse = await Res.findById(id);
    if (!existingResponse) {
      return res.status(404).json({ msg: 'Response not found' });
    }
    
    existingResponse.end_date = end_date;
    const updatedResponse = await existingResponse.save();

    console.log(updatedResponse);
    res.status(200).json({
      msg: 'Response updated successfully',
      status: updatedResponse
    });
  } catch (error) {
    console.error('Error updating response:', error.message);
    res.status(500).json({ msg: 'Error updating response', error: error.message });
  }
};

const search = async (req, res) => {
  try {
    const id = req.params.id;
    await Res.findById(id).then((response) => {
      console.log(response);
      res.status(200).json({ response: response });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Aldaa" });
  }
};

const deleteResponse = async (req, res) => {
  try {
    const id = req.params.id;
    await Res.findByIdAndDelete(id).then((response) => {
      console.log(response);
      res.status(200).json({ msg: "amjilttai ustla", response: response });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Aldaa" });
  }
};

module.exports = {
  postResponse,
  updateResponse,
  getResponse,
  search,
  deleteResponse,
};
