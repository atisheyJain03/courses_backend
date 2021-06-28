import React from "react";
import { makeStyles, Paper, Link } from "@material-ui/core";
import logo from "../../images/inqueue_full.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

  img: {
    display: "block",
    width: "200px",
    cursor: "pointer",
    margin: "30px",
    marginLeft: "7%",
  },

  card: {
    textAlign: "-webkit-center",
  },
});

function Header() {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <Link href="/">
        <img src={logo} className={classes.img} />
      </Link>
    </Paper>
  );
}

export default Header;
