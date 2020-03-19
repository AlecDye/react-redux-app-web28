import React from "react";
import { connect } from "react-redux";

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
        <button onClick={handleGetData}>Click me</button>
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
