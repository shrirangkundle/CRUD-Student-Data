require("dotenv").config();

const connectDB = require("./db/connect");
const StudentModel = require("./models/students");

const studentDummy = require("./studentDummy.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await StudentModel.deleteMany();
    await StudentModel.create(studentDummy);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
