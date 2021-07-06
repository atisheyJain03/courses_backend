const express = require("express");
const {
  getAllCourse,
  getOneCourse,
  incCount,
  getTopSix,
} = require("../controller/coursesController.js");

const router = express.Router();

router.get("/:id", getOneCourse);
router.get("/", getAllCourse);
router.post("/:id", incCount);
router.get("/clicks/topSix", getTopSix);

module.exports = router;
