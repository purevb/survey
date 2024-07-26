const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST","PUT","DELETE"], 
  credentials: true 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const Status = require("./routes/survey_status");
// app.use("/api",Status);
const Survey = require("./routes/survey")
app.use("/api",Survey);
const Type = require("./routes/question_type");
app.use("/api",Type);
const Question = require("./routes/question");
app.use("/api",Question);
// const Qoption = require("./routes/question_options");
// app.use("/api",Qoption);
const User = require("./routes/users");
app.use("/api",User);
const Response = require("./routes/response");
app.use("/api",Response);
// const Answer = require("./routes/answer");
// app.use("/api",Answer);
const Aop = require("./routes/answer_options");
app.use("/api",Aop);
const Asuult = require("./routes/asuultavah");
app.use("/api",Asuult);
const Squestion = require("./routes/survey_questions");
app.use("/api",Squestion);


const connectToDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/SurveyDB', {});
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectToDB();
const port = 3106;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

app.get("/" ,(req,res)=>{
  res.status(200).send("Hello from the server!");
});
