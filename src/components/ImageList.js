import React from "react";
import { connect } from "react-redux";

import ImageCard from "./ImageCard";

const ImageList = props => {
  console.log("ImageList", props);
  return (
    <>
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        props.imageData.map(item => (
          //   <ImageCard key={item.id} url={item.url} author={item.author} />
          <ImageCard key={item.id} item={item} />
        ))
      )}
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    imageData: state.imageData
  };
};

export default connect(mapStateToProps, {})(ImageList);
