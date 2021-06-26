import { useEffect, useState, Fragment } from "react";
import axios from "../../axios";
import CardCustom from "../../components/CardCustom.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ErrorPage from "./../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  card: {
    textAlign: "-webkit-center",
  },
});

function Homepage() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios
      .get("/courses")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("🚀 ~ file: Homepage.js ~ line 35 ~ useEffect ~ err", err);
        setError(true);
        setLoading(false);
      });
  }, []);
  // console.log(data);

  if (error) return <ErrorPage />;
  if (loading) return <Loader />;
  return (
    <div className="App">
      <Grid container alignItems="center" justify="center">
        {data.map((val, ind) => (
          <Fragment key={val._id}>
            <Grid item xs={12} sm={6} lg={4} className={classes.card}>
              <CardCustom
                title={val.title}
                image={val.image}
                heading={val.heading}
                status={val.status}
                time={val.createdAt}
                url={val.url}
                id={val._id}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default Homepage;
