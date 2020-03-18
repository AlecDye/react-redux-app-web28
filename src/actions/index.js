import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://picsum.photos/v2/list")
    .then(res => console.log("@@@", res))
    .catch(err => console.error);
};
