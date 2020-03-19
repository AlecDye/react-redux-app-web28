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
        props.imageArray.map(item => <ImageCard />)
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    imageArray: state.imageArray
  };
};

export default connect(mapStateToProps, {})(ImageList);
