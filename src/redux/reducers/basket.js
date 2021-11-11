import { FETCH } from "../../constants/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export default (baskets = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    default:
      return baskets;
  }
};
