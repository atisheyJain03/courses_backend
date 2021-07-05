const Course = require("../models/courseModel");

const getAllCourse = async (req, res) => {
  try {
    const data = await Course.find().sort({
      status: 1,
      createdAt: -1,
    });
    res.status(200).json({
      length: data.length,
      data,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

const getOneCourse = async (req, res) => {
  try {
    // console.log(req.params);
    const data = await Course.findById(req.params.id);
    res.status(200).json({
      data,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};
const incCount = async (req, res) => {
  try {
    console.log(req.params);
    const data = await Course.findByIdAndUpdate(req.params.id, {
      $inc: { clicks: 1 },
    });
    res.status(200).json({
      status: "success",
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
module.exports = { getAllCourse, getOneCourse, incCount };
