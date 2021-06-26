import express from "express";
import { getAllCourse, getOneCourse } from "../controller/coursesController.js";

const router = express.Router();

router.get("/:id", getOneCourse);
router.get("/", getAllCourse);

export default router;
