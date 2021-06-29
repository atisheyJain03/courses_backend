import { useEffect, useState, Fragment } from "react";
import axios from "../../axios";
import CardCustom from "../../components/CardCustom.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ErrorPage from "./../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  card: {
    textAlign: "-webkit-center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    // "&:hover": {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#050a30",
    zIndex: "9999",
    marginTop: 3,
  },
  inputRoot: {
    color: "#050a30",
    background: "#dddee0",
    borderRadius: "50px",
    marginTop: "5px",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "24ch",
      "&:focus": {
        width: "40ch",
      },
    },
  },
  searchBar: {
    maxWidth: "fit-content",
    margin: "auto",
    marginBottom: "61px",
  },
  result: {
    marginTop: "0px",
    color: "#050a30",
    letterSpacing: "2px",
  },
}));

function Homepage() {
  const classes = useStyles();
  const [realData, setRealData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    const val = event.target.value;
    setSearch(val);
    const result = realData.filter((word) =>
      word.title.toLowerCase().includes(val.toLowerCase())
    );
    setData(result);
  };

  useEffect(() => {
    axios
      .get("/courses")
      .then((res) => {
        setRealData(res.data.data);
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
      <div className={classes.searchBar}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            const
            value={search}
            onChange={handleSearch}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </div>
      <h4 className={classes.result}>result - {data.length}</h4>
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
                createdAt={val.createdAt}
              />
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}

export default Homepage;
