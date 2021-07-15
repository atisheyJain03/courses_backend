import { IconButton, makeStyles } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";

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
  },
  fbIcon: {
    color: "white",
  },
});

function TopStripe() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      To receive Notifications . please Follow us on{" "}
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
    </div>
  );
}

export default TopStripe;
