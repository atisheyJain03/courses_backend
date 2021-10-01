const WaitingList = require("../models/waitingListModel.js");

const createOneLink = async (req, res) => {
  try {
    let data = "";
    const link = req.body.link;
    data = await WaitingList.findOne({ link });
    if (!data) data = await WaitingList.create(req.body);
    res.status(200).json({
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

module.exports = { createOneLink };
