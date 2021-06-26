import axios from "axios";
import Cheerio from "cheerio";
import Puppeteer from "puppeteer";
import fs from "fs";
import Course from "../models/courseModel.js";

export const getAllCourse = async (req, res) => {
  try {
    const data = await Course.find();
    res.status(200).json({
      length: data.length,
      data,
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: coursesRoutes.js ~ line 11 ~ getAllCourse ~ err",
      err
    );
    res.status(500).json({
      err,
    });
  }
};

export const getOneCourse = async (req, res) => {
  try {
    console.log(req.params);
    const data = await Course.findById(req.params.id);
    res.status(200).json({
      data,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: coursesRoutes.js ~ line 11 ~ getAllCourse ~ err",
      err
    );
    res.status(500).json({
      err,
    });
  }
};
