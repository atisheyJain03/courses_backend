import React from "react";
import { makeStyles, Grid, IconButton } from "@material-ui/core";
import logo from "../../images/inqueue_full.png";
import FacebookIcon from "@material-ui/icons/Facebook";

const useStyles = makeStyles({
  par: {
    // padding: "20%",
    paddingTop: "40px",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    color: "#050a30",
    minHeight: "80vh",
    "& a": {
      color: "#050a30",
      textDecoration: "underline",
    },
  },
  about: {
    fontWeight: 600,
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

    maxWidth: "80vw",
    // marginLeft: "30px",
    // marginLeft: "7%",
  },

  card: {
    textAlign: "-webkit-center",
    cursor: "pointer",
  },
  fbIcon: {
    color: "#050a30",
    fontSize: 96,
  },
});

function ContactUs() {
  const classes = useStyles();
  return (
    <div className={classes.par}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <img src={logo} className={classes.img} />
        </Grid>
        <Grid item xs={12} md={7}>
          <div className={classes.about}>
            You can contact us through facebook, by contacting us through
            facebook group mentioned below .OR you can mail us at{" "}
            <a href="mailto:inqueue.courses@gmail.com">
              inqueue.courses@gmail.com
            </a>
          </div>
          <div>
            <h1>Follow us on</h1>
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
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
