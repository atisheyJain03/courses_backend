const express = require("express");
const { createOneLink } = require("../controller/waitingListController.js");

const router = express.Router();

router.post("/", createOneLink);

module.exports = router;
