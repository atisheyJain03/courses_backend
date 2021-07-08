const express = require("express");
const {
  getAllCourse,
  getOneCourse,
  incCount,
  getTopSix,
  search,
} = require("../controller/coursesController.js");

const router = express.Router();

router.get("/:id", getOneCourse);
router.get("/allCourses/:page", getAllCourse);
router.post("/:id", incCount);
router.get("/clicks/topSix", getTopSix);
router.post("/searchCourse/search", search);

module.exports = router;
