import * as R from "ramda";

import { FETCH_PHONES_SUCCESS } from "../actionTypes";

const initialState = {
  ids: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PHONES_SUCCESS:
      return R.mergeRight(state, {
        ids: R.pluck("id", payload),
      });
    default:
      return state;
  }
};