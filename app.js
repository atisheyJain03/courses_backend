const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const compression = require("compression");
const fs = require("fs");

const coursesRoutes = require("./routes/coursesRoutes.js");
const Course = require("./models/courseModel.js");
const app = express();

app.enable("trust proxy");

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(compression());

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./frontend", "build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return err;
    }
    data = data
      .replace(/__TITLE__/g, "inQueue")
      .replace(
        /__HEADING__/g,
        "Here you can get discount coupon code for paid udemy courses"
      );
    res.send(data);
  });
});

app.get("/course/:id", async (req, res) => {
  try {
    // console.log(req.params);
    let resource = null;
    if (req.params.id != "foreground.bundle.js") {
      resource = await Course.findById(req.params.id);
    }
    // console.log("🚀 ~ file: app.js ~ line 169 ~ app.get ~ resource", resource);
    const filePath = path.resolve(
      __dirname,
      "./frontend",
      "build",
      "index.html"
    );
    fs.readFile(filePath, "utf8", (err, data) => {
      if (data) {
        if (resource) {
          data = data
            .replace(/__TITLE__/g, resource.title)
            .replace(/__HEADING__/g, resource.heading)
            .replace(/__ID__/g, resource._id)
            .replace(/__IMAGE__/g, resource.image)
            .replace(/__TIME__/g, resource.createdAt);
        }
      }
      res.send(data);
    });
  } catch (err) {
    const filePath = path.resolve(
      __dirname,
      "./frontend",
      "build",
      "index.html"
    );
    // console.log(
    //   "🚀 ~ file: coursesRoutes.js ~ line 11 ~ getAllCourse ~ err",
    //   err
    // );
    fs.readFile(filePath, "utf8", (err, data) => {
      if (data) {
        res.send(data);
      }
      if (err) {
        res.send(err);
      }
    });
  }
});

app.use(express.static(path.resolve(__dirname, "./frontend", "build")));

app.use("/api/v1/courses", coursesRoutes);

app.use("*", (req, res) => {
  const filePath = path.resolve(__dirname, "./frontend", "build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return err;
    }
    data = data
      .replace(/__TITLE__/g, "inQueue")
      .replace(
        /__HEADING__/g,
        "Here you can get discount coupon code for paid udemy courses"
      );
    res.send(data);
  });
});

module.exports = app;
