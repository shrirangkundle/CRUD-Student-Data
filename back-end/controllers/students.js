const Student = require("../models/students");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/customError");
const getAllStudents = asyncWrapper(async (req, res) => {
  const tasks = await Student.find({});
  res.status(200).json({ tasks });
});

const createStudent = asyncWrapper(async (req, res) => {
  const task = await Student.create(req.body);
  res.status(201).json({ task });
});

const getStudent = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Student.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});
const deleteStudent = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Student.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }
  res.status(200).json({ task });
});
const updateStudent = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Student.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404));
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
};
