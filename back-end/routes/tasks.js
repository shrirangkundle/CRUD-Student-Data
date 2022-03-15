const express = require("express");
const router = express.Router();
const {
  getAllStudents,
  createStudent,
  getStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudent,
} = require("../controllers/students");

router
  .route("/")
  .get(getAllStudents)
  .post(createStudent)
  .delete(deleteAllStudent);
router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

module.exports = router;
