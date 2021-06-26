import React, { useEffect, useState } from "react";
import MetaDecorative from "../../utils/MetaDecorative";
import { Typography, Button, makeStyles } from "@material-ui/core";
import axios from "../../axios";
import ErrorPage from "./../ErrorPage/ErrorPage";
import Loader from "./../../components/Loader/Loader";

const useStyles = makeStyles({
  root: {
    width: "80%",
    margin: "auto",
  },

  img: {
    width: "100%",
    height: "70vh",
    display: "block",
    margin: "auto",
    marginBottom: "30px !important",
  },
  btn: {
    margin: "20px auto",
    background: "#111e6c",
    "& a": {
      background: "#111e6c",
    },
  },
});

function CoursePage() {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  // console.log("&&&&&&&&&&");
  useEffect(() => {
    axios
      .get(`/courses/${window.location.href.split("/")[4]}`)
      .then((res) => {
        setData(res.data.data);
        // console.log(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <div className={classes.root}>
      {!data ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <MetaDecorative
            title={data.title}
            heading={data.heading}
            image={data.image}
            url={data.url}
            time={data.time}
          />
          <img src={data.image} alt={data.title} className={classes.img} />
          <Typography variant="h3" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="h6">{data.heading}</Typography>
          <div className={classes.btn} style={{ background: "#11136c" }}>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              href={data.url}
              size="large"
            >
              Enroll Now
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CoursePage;
