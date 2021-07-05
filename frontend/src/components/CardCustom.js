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
import { Chip } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
}) {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      onClick={() => window.open(`/course/${id}`, "_blank")}
    >
      <CardActionArea className={classes.actionArea}>
        <CardMedia className={classes.media} image={image} title={title} />

        <CardContent>
          <Chip
            size="small"
            label={status === "active" ? "Active" : "Expired"}
            className={
              status === "active" ? classes.available : classes.expired
            }
          />
          <Chip
            // variant="outlined"
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
  );
}
