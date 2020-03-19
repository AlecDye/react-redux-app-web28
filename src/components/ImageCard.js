import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 300
  },
  media: {
    height: 200
  }
});

const ImageCard = props => {
  const classes = useStyles();
  // console.log("ImageCard", props);
  // console.log(props.item.url);
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={props.item.download_url}
        // width={props.item.width}
        // height={props.item.height}
        alt="alt-text"
      />
      <CardContent>
        <Typography variant="body2">{props.item.author}</Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
