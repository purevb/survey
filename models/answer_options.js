const mongoose = require("mongoose");
const answers_options_schema = new mongoose.Schema({
  survey_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "survey",
  },
  question_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "question",
  },
  response_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "response",
  },
  user_choice: [
    {
      type: mongoose.Schema.Types.Mixed,
      validate: {
        validator: function (value) {
          return (
            value === null ||
            typeof value === "string" ||
            mongoose.Types.ObjectId.isValid(value)
          );
        },
        message: (props) => `${props.value} is not a valid string or ObjectId!`,
      },
    },
  ],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("answers_options", answers_options_schema);
