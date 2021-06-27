const express = require("express");
const {
  scrapUsingCheerio,
  checkCourses,
} = require("../controller/scrapingController");
const router = express.Router();

// CREATE QUEUE
router.post("/", scrapUsingCheerio);
router.get("/checkPrice/:page", checkCourses);

module.exports = router;
