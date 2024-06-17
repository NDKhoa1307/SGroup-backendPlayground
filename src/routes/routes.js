const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Importing controllers
const greeting = require("../controllers/greeting");
router.get("/api/hello", (req, res) => {
  greeting(req, res);
});

// Importing middlewares
const { postingValidation } = require("../middlewares/students.middlewares");

// Importing packages
const {
  getStudents,
  postStudents,
  updateStudents,
  deleteStudents,
} = require("../controllers/students.controllers");
router
  .route("/api/students")
  .get(getStudents)
  .post(postingValidation, postStudents)
  .put(updateStudents)
  .delete(deleteStudents);

module.exports = router;