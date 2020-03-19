import { FETCH_DATA, UPDATE_DATA } from "../actions";

const initialState = {
  imageArray: [],
  isFetchingData: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        imageArray: [],
        isFetchingData: true
      };
    case UPDATE_DATA:
      return {
        ...state,
        imageArray: action.payload,
        isFetchingData: false
      };
    default:
      return state;
  }
};
