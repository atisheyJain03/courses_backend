import React from "react";
import { makeStyles, Paper, Grid, IconButton } from "@material-ui/core";
import logo from "../../images/inqueue_full.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  par: {
    paddingTop: "40px",
    padding: "70px",
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
});

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.par}>
      <Paper elevation={0}>
        <Grid container>
          <Grid item xs={12} md={10}>
            <Link to="/">
              <img src={logo} className={classes.img} />
            </Link>
          </Grid>
          <Grid item xs={12} md={1}>
            <Link to="/about" className={classes.link}>
              about us
            </Link>
          </Grid>
          <Grid item xs={12} md={1}>
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
