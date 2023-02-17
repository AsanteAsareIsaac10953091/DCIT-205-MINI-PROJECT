const express = require("express");
const cors = require("cors");
const { studentModel } = require("./db");

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
const Student = studentModel;

app.get("/", (req, res) => {
  res.status(200).send("server running");
});

app.get("/student/:id", async (req, res) => {
  const { id } = req.params;
  //   fetch student data
  let student;
  try {
    student = await Student.findOne({
      studentID: id,
    });
  } catch (error) {
    console.log("error ", error);
  }

  if (!student) return res.status(404).json({ error: "student not found" });

  return res.status(200).json({ message: "success", data: student });
});

app.post("/register", async (req, res) => {
  const { fname, lname, id, email, program, level } = req.body;
  let response;
  // saving to db
  try {
    response = await Student.create({
      studentID: id,
      firstName: fname,
      lastName: lname,
      email: email,
      level: level,
      program: program,
    });
  } catch (error) {
    console.log("error creating record: " + error);
  }

  return res.status(201).json({ message: "success", data: response });
});
app.listen(port, () => console.log(`server listening on port ${port}!`));
