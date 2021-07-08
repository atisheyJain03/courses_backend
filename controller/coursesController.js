const Course = require("../models/courseModel");

const getAllCourse = async (req, res) => {
  try {
    const page = (req.params.page || 1) * 1;
    const limit = 12;

    const data = await Course.find()
      .sort({
        status: 1,
        createdAt: -1,
        _id: 1,
      })
      .skip((page - 1) * limit)
      .limit(limit);
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
    // console.log("********* " + req.params.id);
    const data = await Course.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { clicks: 1 },
      },
      { new: true }
    );
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
const getTopSix = async (req, res) => {
  try {
    const data = await Course.find({ status: "active" })
      .sort({
        clicks: -1,
      })
      .limit(6);
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};

const search = async (req, res) => {
  try {
    const title = req.body.title;
    const regex = new RegExp(title, "i"); // i for case insensitive
    const data = await Course.find({
      title: { $regex: regex },
    }).sort({
      status: 1,
    });
    res.status(200).json({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(
      "🚀 ~ file: coursesController.js ~ line 97 ~ search ~ err",
      err
    );
    res.status(500).json({
      err,
    });
  }
};
module.exports = { getAllCourse, getOneCourse, incCount, getTopSix, search };
