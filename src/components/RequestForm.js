import React from "react";
import { connect } from "react-redux";

import { Button } from "@material-ui/core";

import { getData } from "../actions";

const RequestForm = props => {
  const handleGetData = event => {
    event.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div className="loading-text">Fetching images...</div>
      ) : (
        <Button onClick={handleGetData}>Click me</Button>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStateToProps, { getData })(RequestForm);
