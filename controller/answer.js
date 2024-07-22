// const Answer = require("../models/answers");

// const postAnswer = async (req, res) => {
//   try {
//     const newAnswer = new Answer(req.body);
//     await newAnswer.save().then((answer) => {
//       console.log(answer);
//       res.status(200).json({ answer: newAnswer });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "aldaa" });
//   }
// };
// const getAnswers = async (req, res) => {
//   try {
//     await Answer.find().then((answer) => {
//       console.log(answer);
//       res.status(200).json({ answer: answer });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "aldaa" });
//   }
// };
// const search = async (req, res) => {
//   try {
//     const id = req.params.id;
//     await Answer.findById(id).then((answer) => {
//       console.log(answer);
//       res.status(200).json({ answer: answer });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "Aldaa" });
//   }
// };
// const updateAnswer = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const updatedAnswer = req.body;
//     const updatedAnswerResult = await Answer.findByIdAndUpdate(
//       { _id: id },
//       updatedAnswer,
//       { new: true }
//     );

//     if (updatedAnswerResult) {
//       console.log(updatedAnswerResult);
//       res.status(200).json({ answer: updatedAnswerResult });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "aldaa" });
//   }
// };
// const deleteAnswer = async (req, res) => {
//   try {
//     const id = req.param.id;
//     await Answer.findByIdAndDelete(id).then((answer) => {
//       console.log(answer);
//       res.status(200).json({ msg: "Amjilttai ustlaa", msg: answer });
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ msg: "aldaa" });
//   }
// };
// module.exports = {
//   postAnswer,
//   getAnswers,
//   search,
//   updateAnswer,
//   deleteAnswer,
// };
