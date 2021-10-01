import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { IconButton, InputBase } from "@material-ui/core";
import SendIcon from "@mui/icons-material/Send";
import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@mui/icons-material/Close";

import axios from "../../axios";
const useStyles = makeStyles((theme) => ({
  "@keyframes rightIn": {
    "0%": {
      opacity: 0,
      transform: "translateX(100%)",
    },
    "80%": {
      opacity: 0.95,
      transform: "translateX(-3%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0%)",
    },
  },
  "@keyframes leftIn": {
    "0%": {
      opacity: 0,
      transform: "translateX(-100%)",
    },
    "80%": {
      opacity: 0.95,
      transform: "translateX(3%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateX(0%)",
    },
  },
  root: {
    zIndex: "10000",
    "& button": {
      zIndex: "10000",
      position: "fixed",
      right: "20px",
      bottom: "20px",
      background: "#050A30",
      color: "#FFFFFF",
      "&:hover": {
        background: "#050A30",
      },
    },
  },
  inputBlock: {
    overflow: "hidden",
    position: "fixed",
    // background: "pink",
    width: "80%",

    bottom: "25px",
    zIndex: "1000",
    margin: "auto",
    transform: "translateX(-50%)",
    left: "50%",
    padding: "0px 20px",
    borderRadius: "20px",
    flexGrow: 1,
  },
  inputFlex: {
    display: "flex",
    background: "#dddee0",
    borderRadius: "20px",
    padding: "5px 10px",
    animation: `$rightIn 600ms ${theme.transitions.easing.easeInOut}`,
  },

  input: {
    width: "95%",
    background: "transparent",
    border: "none",
    color: "#050a30",
    padding: "5px",
    fontWeight: "500",
    "&:focus-visible": {
      border: "none",
      outline: "none",
    },
  },
  para: {
    animation: `$leftIn 600ms ${theme.transitions.easing.easeInOut}`,
    background: "#ad0000",
    color: "white",
    margin: "5px 0px",
    borderRadius: "32px",
    fontWeight: "500",
    padding: "5px",
    paddingLeft: "18px",
    fontSize: "smaller",
  },
  sendIcon: {
    cursor: "pointer",
  },
  form: {
    display: "flex",
    width: "100%",
  },
}));

function AddCourse() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    let val = value;
    val = val.trim();
    if (val.length === 0) {
      alert("Please enter a course link");
    } else if (val.split("/")[2] !== "www.udemy.com") {
      alert("Please enter a valid udemy course link");
    } else {
      console.log(val);
      axios
        .post(`/waitingList`, { link: val }, {})
        .then((res) => {
          alert(
            "Course added to review list.We will post it as soon as possible."
          );
        })
        .catch((err) => {
          alert("Something went wrong");
          console.log(err);
        });
    }
  };

  return (
    <div className={classes.root}>
      <IconButton onClick={() => setOpen((open) => !open)}>
        {open ? <CloseIcon /> : <AddIcon />}
      </IconButton>
      {open && (
        <div className={classes.inputBlock}>
          <div className={classes.inputFlex}>
            <form onSubmit={handleSubmit} className={classes.form}>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                type="text"
                placeholder="https://www.udemy.com/course/learn-front-end-development/?couponCode=TRY10FREE92108"
                className={classes.input}
              />
              <SendIcon className={classes.sendIcon} onClick={handleSubmit} />
            </form>
          </div>
          <p className={classes.para}>
            Note: Only paste link of udemy course . It will not work for any
            other website's link and paste conplete link as shown
          </p>
        </div>
      )}
    </div>
  );
}

export default AddCourse;
