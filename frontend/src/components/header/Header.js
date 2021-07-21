import React from "react";
import { makeStyles, Paper, Grid, IconButton } from "@material-ui/core";
import logo from "../../images/inqueue_full.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles((theme) => ({
  par: {
    padding: "30px 70px",
    paddingTop: "40px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  link: {
    // marginLeft: "60px",
    textDecoration: "underline",
    textTransform: "lowercase",
    letterSpacing: "1px",
    color: "#050a30",
    fontWeight: "700",
    display: "block",
    marginTop: "10px",
    marginLeft: "8px",
    maxWidth: "fit-content",
  },
  img: {
    // display: "block",
    width: "200px",
    cursor: "pointer",
    maxWidth: "fit-content",
    // marginLeft: "30px",
    // marginLeft: "7%",
  },

  card: {
    textAlign: "-webkit-center",
    cursor: "pointer",
  },
  fbIcon: {
    color: "#050a30",
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
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.par}>
      <Paper elevation={0}>
        <Grid container>
          <Grid item xs={12} md={9}>
            <a href="/">
              <img src={logo} className={classes.img} />
            </a>
          </Grid>
          <Grid item xs={4} md={2}>
            <Link to="/add-a-course" className={classes.link}>
              Add a Course
            </Link>
          </Grid>
          <Grid item xs={2} sm={1}>
            <IconButton
              onClick={() =>
                window.open(
                  `https://www.facebook.com/groups/548558866554350`,
                  "_blank"
                )
              }
              disableRipple={true}
              disableFocusRipple={true}
            >
              <FacebookIcon className={classes.fbIcon} />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Header;
