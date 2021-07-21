import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  root: {
    background: "#050A30",
    color: "white",
    padding: "0px",
    justifyContent: "center",
    textAlign: "center",
    "& .MuiGrid-root": {
      justifyContent: "center",
      textAlign: "center",
    },
    "& .MuiIconButton-root": {
      padding: 0,
      margin: "10px",
    },
  },
  fbIcon: {
    color: "white",
  },
});

function TopStripe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      To receive Notifications . please join us on{" "}
      <a href="https://www.facebook.com/groups/548558866554350" target="_blank">
        <IconButton disableRipple={true} disableFocusRipple={true}>
          <FacebookIcon className={classes.fbIcon} />
        </IconButton>
      </a>
    </div>
  );
}

export default TopStripe;
