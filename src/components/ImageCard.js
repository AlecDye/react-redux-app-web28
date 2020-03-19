import React from "react";

const ImageCard = props => {
  console.log("ImageCard", props);
  return (
    <div className="image-card">
      <img src={props.url} alt="Random" />
      <p>Author: {props.author}</p>
    </div>
  );
};

export default ImageCard;
