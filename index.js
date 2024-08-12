const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require('./middleware/errorHandler');

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true 
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Survey = require("./routes/survey");
app.use("/api", Survey);
const Type = require("./routes/question_type");
app.use("/api", Type);
const Question = require("./routes/question");
app.use("/api", Question);
const User = require("./routes/users");
app.use("/api", User);
const Response = require("./routes/response");
app.use("/api", Response);
const Aop = require("./routes/answer_options");
app.use("/api", Aop);
const Asuult = require("./routes/asuultavah");
app.use("/api", Asuult);
const Squestion = require("./routes/survey_questions");
app.use("/api", Squestion);

const connectToDB = async () => {

  try {
    await mongoose.connect('mongodb+srv://a:a@survey.pqwcm.mongodb.net/?retryWrites=true&w=majority&appName=survey');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};  
connectToDB();

const port = 3106;
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
