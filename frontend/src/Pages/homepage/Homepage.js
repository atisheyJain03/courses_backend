import { useEffect, useState, Fragment } from "react";
import axios from "../../axios";
import CardCustom from "../../components/CardCustom.js";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import ErrorPage from "./../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { unstable_batchedUpdates } from "react-dom";
import Axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

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
  loader: {
    transform: "translateY(-20px)",
    marginBottom: 20,
  },
  seenAll: {
    fontWeight: "500",
    letterSpacing: "2px",
    lineHeight: "20px",
  },
}));

let cancelTokenSearch;

function Homepage() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [prevData, setPrevData] = useState([]);
  const [loadMore, setLoadMore] = useState(true);

  const pageHandler = () => {
    axios
      .get(`/courses/allCourses/${page + 1}`)
      .then((res) => {
        if (res.data.data.length == 0) {
          setLoadMore(false);
        }
        unstable_batchedUpdates(() => {
          setData((data) => [...data, ...res.data.data]);
          setPrevData((data) => [...data, ...res.data.data]);
          setPage((page) => page + 1);
        });
      })
      .catch((err) => {
        unstable_batchedUpdates(() => {
          setError(true);
        });
      });
  };

  const handleSearch = (event) => {
    const val = event.target.value;

    if (!val) {
      setData(prevData);
      setSearch(val);
      return;
    }
    setSearch(val);
    setLoading(true);
    setData([]);

    if (typeof cancelTokenSearch != typeof undefined) {
      cancelTokenSearch.cancel("cancelling previous search");
    }
    cancelTokenSearch = Axios.CancelToken.source();

    const body = { title: val };
    axios
      .post("/courses/searchCourse/search", body, {
        cancelToken: cancelTokenSearch.token,
      })
      .then((res) => {
        unstable_batchedUpdates(() => {
          setData((data) => [...data, ...res.data.data]);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err.message != "cancelling previous search") {
          unstable_batchedUpdates(() => {
            setError(true);
            setLoading(false);
          });
        }
      });
  };

  useEffect(() => {
    axios
      .get("/courses/allCourses/1")
      .then((res) => {
        unstable_batchedUpdates(() => {
          setData((data) => [...res.data.data]);
          setPrevData((data) => [...res.data.data]);
          setLoading(false);
        });
      })
      .catch((err) => {
        unstable_batchedUpdates(() => {
          setError(true);
          setLoading(false);
        });
      });
  }, []);

  if (error) return <ErrorPage />;
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
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={data.length}
        next={pageHandler}
        endMessage={
          !search.length && (
            <h3 className={classes.seenAll}>Yay! You have seen it all</h3>
          )
        }
        scrollThreshold={0.8}
        hasMore={!search.length && loadMore}
        loader={
          <div className={classes.loader}>
            <Loader />
          </div>
        }
      >
        <>
          {search.length > 0 && !loading && (
            <h4 className={classes.result}>result - {data.length}</h4>
          )}
        </>
        <Grid container alignItems="center" justify="center">
          {data.map((val, ind) => (
            <Fragment key={val._id}>
              <Grid item xs={12} sm={6} lg={4} className={classes.card}>
                <CardCustom
                  title={val.title}
                  image={val.image}
                  heading={val.heading}
                  status={val.status}
                  id={val._id}
                  createdAt={val.createdAt}
                  clicks={val.clicks}
                />
              </Grid>
            </Fragment>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
}

export default Homepage;
