import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import moment from "moment-timezone";
import { Chip } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
const useStyles = makeStyles({
  root: {
    maxWidth: 320,
    minWidth: 320,
    textAlign: "start",
    // height: 360,
    marginBottom: 30,
    "& .MuiCardActionArea-root": {
      height: "90%",
    },
    "& .MuiCardContent-root": {
      height: 200,
      overflow: "hidden",
    },
    "& .MuiChip-root": {
      marginRight: "10px",
      minWidth: "50px",
      marginBottom: "10px",
    },
  },
  media: {
    height: 140,
  },
  heading: {
    height: 96,
    overflow: "hidden",
  },
  cardArea: {
    // height: 96,
  },
  expired: {
    color: "black",
    background: "#f8433f",
    // fontWeight: "600",
    // marginBottom: "10px",
    letterSpacing: 1,
  },
  available: {
    color: "black",
    background: "#adff2f",
    // fontWeight: "600",
    // marginBottom: "10px",
    letterSpacing: 1,
  },
  category: {
    background: "#8710D8",
    color: "white",
  },
  a: {
    display: "block",
    maxWidth: "fit-content",
    transition: "all 0.3s",
    "&:hover": {
      textDecoration: "none",
      boxShadow:
        "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)",
      transform: "scale(0.99)",
    },
  },
});

const getTime = (time) => {
  return moment(time).fromNow();
};

export default function CardCustom({
  image,
  title,
  heading,
  status,
  id,
  createdAt,
  clicks,
  primaryCategory,
}) {
  const classes = useStyles();
  return (
    <a href={`/course/${id}`} className={classes.a} target="_blank">
      <Card className={classes.root} elevation={20}>
        <CardActionArea className={classes.actionArea} disableRipple={true}>
          <CardMedia className={classes.media} image={image} title={title} />
          <CardContent>
            <Chip
              size="small"
              className={classes.category}
              label={primaryCategory}
            />
            <Chip
              size="small"
              label={status === "active" ? "Active" : "Expired"}
              className={
                status === "active" ? classes.available : classes.expired
              }
            />

            <Chip
              variant="outlined"
              size="small"
              icon={<VisibilityIcon />}
              label={clicks}
            />
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.heading}
            >
              {heading.length <= 120
                ? heading
                : heading.substring(0, 117) + "..."}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="caption" align="right" display="block">
            Added {getTime(createdAt)}
          </Typography>
        </CardActions>
      </Card>
    </a>
  );
}
