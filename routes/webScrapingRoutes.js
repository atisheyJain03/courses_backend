const express = require("express");
const {
  scrapUsingCheerio,
  checkCourses,
  deleteExpireCourse,
  addLink,
} = require("../controller/scrapingController");
const router = express.Router();

// CREATE QUEUE
router.post("/", scrapUsingCheerio);
router.post("/link", addLink);
router.delete("/", deleteExpireCourse);
router.get("/checkPrice/:page", checkCourses);

module.exports = router;
