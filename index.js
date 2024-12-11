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

const region = require("./routes/region");
app.use("/api", region);
const property = require("./routes/property");
app.use("/api", property);
const ptype = require("./routes/property_type");
app.use("/api", ptype);
const User = require("./routes/users");
app.use("/api", User);
const favorite = require("./routes/favorite");
app.use("/api", favorite);
const booking = require("./routes/booking");
app.use("/api", booking);
const bstatus = require("./routes/booking_status");
app.use("/api", bstatus);


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
