import React, { useEffect, useState, Fragment } from "react";

import { Chip, Typography, Button, makeStyles, Grid } from "@material-ui/core";
import axios from "../../axios";
import ErrorPage from "./../ErrorPage/ErrorPage";
import Loader from "./../../components/Loader/Loader";
import VisibilityIcon from "@material-ui/icons/Visibility";
import CardCustom from "../../components/CardCustom";
import Footer from "../../components/footer/Footer";
// import { decode } from "html-entities";
import { decode, decodeEntity } from "html-entities";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
    "& .MuiChip-root": {
      marginRight: "10px",
      minWidth: "50px",
      marginBottom: "10px",
    },
  },

  img: {
    maxWidth: "100%",
    // height: "70vh",

    display: "block",
    margin: "auto",
    marginBottom: "30px !important",
  },
  btn: {
    margin: "20px auto",
    maxWidth: "fit-content",
    background: "#111e6c",
    "& a": {
      background: "#111e6c",
    },
  },
  expired: {
    color: "black",
    background: "#f8433f",
  },
  available: {
    color: "black",
    background: "#adff2f",
  },
  otherCourses: {
    textTransform: "uppercase",
    borderBottom: "3px solid #050a30",
    // textAlign: "-webkit-center",
    marginBottom: "20px",
    paddingBottom: "10px",
  },
  link: {
    color: "red",
  },
  category: {
    background: "#8710D8",
    color: "white",
  },
  details: {
    letterSpacing: ".5px",
    lineHeight: "24px",
    color: "#212121",
    fontWeight: "400",
  },
});

function CoursePage() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [topSix, setTopSix] = useState([]);
  useEffect(() => {
    axios.post(`/courses/${window.location.href.split("/")[4]}`);
    axios
      .get(`/courses/clicks/topSix`)
      .then((res) => setTopSix(res.data.data))
      .catch((err) => setError(true));
    axios
      .get(`/courses/${window.location.href.split("/")[4]}`)
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  // console.log(data);
  // console.log(decode(data.description));
  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <>
      <div className={classes.root}>
        {!data ? (
          <ErrorPage />
        ) : (
          <>
            {/* <MetaDecorative
              title={data.title}
              heading={data.heading}
              image={data.image}
              url={data.url}
              time={data.time}
            /> */}
            <Typography variant="h3" gutterBottom>
              {data.title}
            </Typography>
            <img src={data.image} alt={data.title} className={classes.img} />

            <Chip label={data.primaryCategory} className={classes.category} />
            <Chip
              label={data.status === "active" ? "Active" : "Expired"}
              className={
                data.status === "active" ? classes.available : classes.expired
              }
            />

            <Chip
              icon={<VisibilityIcon />}
              label={data.clicks}
              variant="outlined"
            />

            <Typography variant="h6">{data.heading}</Typography>

            <div className={classes.details}>
              <h3>What you will Learn</h3>
              <ul>
                {data.whatYouWillLearn.map((item, index) => (
                  <li key={item.split(" ")[0] + index}>{item}</li>
                ))}
              </ul>
              <h3>Requirements</h3>
              <ul>
                {data.requirements.map((item, index) => (
                  <li key={item.split(" ")[0] + index}>{item}</li>
                ))}
              </ul>
              <h3>Description</h3>
              {ReactHtmlParser(decode(data.description)) || null}
              <h3>Who this course is for:</h3>
              <ul>
                {data.whoShouldAttend.map((item, index) => (
                  <li key={item.split(" ")[0] + index}>{item}</li>
                ))}
              </ul>
            </div>

            <p className={classes.link}>
              <span style={{ textTransform: "uppercase", fontWeight: "600" }}>
                link -{" "}
              </span>{" "}
              {data.url}
            </p>

            <div className={classes.btn} style={{ background: "#11136c" }}>
              <Button
                variant="contained"
                color="secondary"
                // fullWidth
                href={data.url}
                size="large"
              >
                Enroll Now
              </Button>
            </div>
            <div>
              <Typography
                variant="h5"
                gutterBottom
                className={classes.otherCourses}
              >
                other top courses
              </Typography>
              <Grid container alignItems="center" justify="center">
                {topSix.map((val, ind) => (
                  <Fragment key={val._id}>
                    <Grid item xs={12} sm={6} lg={4} className={classes.card}>
                      <CardCustom
                        title={val.title}
                        image={val.image}
                        heading={val.heading}
                        status={val.status}
                        id={val.slug}
                        createdAt={val.updatedAt}
                        clicks={val.clicks}
                        primaryCategory={val.primaryCategory}
                      />
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default CoursePage;
