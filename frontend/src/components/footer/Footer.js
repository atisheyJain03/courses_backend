import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    background: "#050A30",
    color: "white",
    padding: "15px",
    "& .MuiGrid-root": {
      justifyContent: "center",
      textAlign: "center",
    },
  },
});

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row"
      >
        <Grid item xs={12} md={2}>
          <Link to="/term-and-condition">Terms and Conditions</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Grid>
        <Grid item xs={12} md={1}>
          <Link to="/about">About</Link>
        </Grid>
        <Grid item xs={12} md={2}>
          <Link to="/contact">Contact Us</Link>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
