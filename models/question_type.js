const mongoose=require("mongoose")
const questions_type_schema = new mongoose.Schema({
    questions_type_id: {
        type: Number,
        required: [true, "id is required"],
        trim: true,
    },
    question_type: {
        type: String,
        required: [true, "type is required"],
        enum: ['Multiple Choice', 'Logical', 'Numeric', 'Single Choice','Text'] 
      }
   
});

module.exports = mongoose.model("questions_type", questions_type_schema);