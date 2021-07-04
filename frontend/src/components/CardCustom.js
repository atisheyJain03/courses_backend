import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Ribbon.css";
import moment from "moment-timezone";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
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
}) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      onClick={() => window.open(`/course/${id}`, "_blank")}
    >
      <CardActionArea className={classes.actionArea}>
        <span className={status === "active" ? "ribbonGreen" : "ribbonRed"}>
          <span>{status === "active" ? "Active" : "Expired"}</span>
        </span>
        <CardMedia className={classes.media} image={image} title={title} />
        <CardContent>
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
  );
}
