import express from "express";
import {
  checkCourses,
  scrapUsingCheerio,
} from "../controller/scrapingController.js";

const router = express.Router();

// CREATE QUEUE
router.post("/", scrapUsingCheerio);
router.get("/checkPrice", checkCourses);

export default router;
