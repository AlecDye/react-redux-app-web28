import React from "react";
import { connect } from "react-redux";

import ImageCard from "./ImageCard";

const ImageList = () => {
  return (
    <>
      <ImageCard />
    </>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, {})(ImageList);
