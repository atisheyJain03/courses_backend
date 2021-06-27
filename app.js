import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import session from "express-session";
// // FOR ENVIRONMENT VARIABLES
// import dotenv from "dotenv";
// dotenv.config({ path: "./config.env" }); // THIS IS IMPORTANT

// // IMPORTS FROM NODE MODULES
// import helmet from "helmet";
import morgan from "morgan";
// import rateLimit from "express-rate-limit";

// import expressMongoSanitize from "express-mongo-sanitize";
// import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
// import hpp from "hpp";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

// // IMPORT FROM OTHER MODULES
// import AppError from "./utils/appError.js";
// import globalErrorHandler from "./controllers/errorController.js";
// import userRouter from "./routes/userRoutes.js";
// import shopRouter from "./routes/shopRoutes.js";
// import queueRouter from "./routes/queueRoutes.js";
// import serviceRouter from "./routes/serviceRoutes.js";

import webScrapingRoute from "./routes/webScrapingRoutes.js";
import coursesRoutes from "./routes/coursesRoutes.js";
import Course from "./models/courseModel.js";
const app = express();

app.enable("trust proxy");

// // app.set("view engine", "html");

// // 1) GLOBAL MIDDLEWARES

app.use(cors());
// app.use(cors({ credentials: true, origin: "https://coursesbackend.web.app" }));
// Access-Control-Allow-Origin *

// app.options("*", cors());
// // app.options('/api/v1/tours/:id', cors());

// // Set security HTTP headers
// app.use(helmet());

// // app.enable("trust proxy"); // optional, not needed for secure cookies
// // app.use(
// //   session({
// //     secret: "somesecret",
// //     // store : ..., // store works fine, sessions are stored
// //     key: "sidhelloworld",
// //     proxy: true, // add this when behind a reverse proxy, if you need secure cookies
// //     cookie: {
// //       secure: true,
// //     },
// //   })
// // );

// // Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(morgan("dev"));
// // Limit requests from same API
// // LATER WILL CHANGE IT TO 100

// const limiter = rateLimit({
//   max: 1000,
//   windowMs: 60 * 60 * 1000,
//   message: "Too many requests from this IP, please try again in an hour!",
// });
// app.use("/api", limiter);

// // // Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
// // app.post(
// //   '/webhook-checkout',

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// //   bookingController.webhookCheckout
// // );

// // Body parser, reading data from body into req.body
// app.use(express.json({ limit: "10kb" }));
// app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// // Data sanitization against NoSQL query injection
// app.use(expressMongoSanitize());

// // Data sanitization against XSS
// app.use(xss());

// // // Prevent parameter pollution
// // app.use(
// //   hpp({
// //     whitelist: [
// //       'duration',
// //       'ratingsQuantity',
// //       'ratingsAverage',
// //       'maxGroupSize',
// //       'difficulty',
// //       'price'
// //     ]
// //   })
// // );

app.use(compression());

// // Test middleware
// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

// //* THIS IS FOR FRONTEND API
// app.use((req, res, next) => {
//   // CONVERT BODY
//   req.body = req.body.data;
//   next();
// });

// // this route is for images
// app.use("/public", express.static("public"));

// // app.use(express.static(path.join(".", "inqueue", "build")));

// // app.get("/", (req, res) => {
// //   res.sendFile(path.join(".", "inqueue", "build", "index.html"));
// // });

// app.use("/api/v1/users", userRouter);
// app.use("/api/v1/shops", shopRouter);
// app.use("/api/v1/service", serviceRouter);
// app.use("/api/v1/queue", queueRouter);
// app.all("/", (req, res) => {
//   res.send("hello from server");
// });
// // NOT FOUND

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./frontend", "build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.error(err);
    }
    data = data.replace(/__TITLE__/g, "Hello World");
    // console.log("🚀 ~ file: app.js ~ line 155 ~ fs.readFile ~ data", data);
    res.send(data);
  });
});

app.get("/course/:id", async (req, res) => {
  try {
    console.log(req.params);
    let resource = null;
    if (req.params.id != "foreground.bundle.js") {
      resource = await Course.findById(req.params.id);
    }
    console.log("🚀 ~ file: app.js ~ line 169 ~ app.get ~ resource", resource);
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
            .replace(/__TIME/g, resource.createdAt);
        }
      }
      res.send(data);
    });
    // console.log("🚀 ~ file: app.js ~ line 181 ~ app.get ~ data", data);
    // console.log("🚀 ~ file: app.js ~ line 182 ~ app.get ~ resource", resource);
    // if (resource) {
    //   data = data
    //     .replace(/__TITLE__/g, resource.title)
    //     .replace(/__HEADING__/g, resource.heading)
    //     .replace(/__ID__/g, resource._id)
    //     .replace(/__IMAGE__/g, resource.image)
    //     .replace(/__TIME/g, resource.createdAt);
    // }

    // res.send(data);
  } catch (err) {
    const filePath = path.resolve(
      __dirname,
      "./frontend",
      "build",
      "index.html"
    );
    console.log(
      "🚀 ~ file: coursesRoutes.js ~ line 11 ~ getAllCourse ~ err",
      err
    );
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

app.use("/api/v1/scrap", webScrapingRoute);
app.use("/api/v1/courses", coursesRoutes);
// app.use("/", (req, res) => {
//   res.send("BACKEND OF UDEMY COURSE PROJECT");
// });

// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

// // GLOBAL ERROR HANDLER
// app.use(globalErrorHandler);

export default app;
