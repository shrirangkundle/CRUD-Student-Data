const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is must"],
    trim: true,
    maxlength: [20, "max len is 20"],
  },
  surname: {
    type: String,
    required: [true, "surname is must"],
    trim: true,
    maxlength: [20, "max len is 20"],
  },
  age: {
    type: Number,
    required: [true, "age is must"],
  },
  class: {
    type: Number,
    required: [true, "age is must"],
  },
  school: {
    type: String,
    required: [true, "school is must"],
    trim: true,
    maxlength: [20, "max len is 20"],
  },
});

module.exports = mongoose.model("student", studentSchema);
