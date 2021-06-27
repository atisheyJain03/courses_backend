const express = require("express");
const {
  getAllCourse,
  getOneCourse,
} = require("../controller/coursesController.js");

const router = express.Router();

router.get("/:id", getOneCourse);
router.get("/", getAllCourse);

module.exports = router;
