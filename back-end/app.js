// console.log("task manager setup");

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
require("dotenv").config();

//middleware
// app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/student", tasks);

//404 error handler

app.use(notFound);

//bad request middleware
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
