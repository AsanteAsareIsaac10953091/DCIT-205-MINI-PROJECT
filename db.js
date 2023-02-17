const mongoose = require("mongoose");
const studentSchema = require("./schema");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  authSource: "admin",
  user: "admin",
  pass: "password",
};

// local connection

// const mongoDB = "mongodb://127.0.0.1/mini_project_db";
// mongoose
//   .connect(mongoDB, options)
//   .then(() => console.log("Mongo DB connection successful"))
//   .catch((err) => console.log("Error connecting to Mongo DB", err));

// mongo atlas(cloud based)
const mongoDB =
  "mongodb+srv://adminme:adminpass@cluster0.kbnpvtm.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongo DB connection successful"))
  .catch((err) => console.log("Error connecting to Mongo DB", err));
const studentModel = mongoose.model("student", studentSchema);

module.exports = { studentModel };
