import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import phones from "reducers/phones";
import phonesPage from "reducers/phonesPage";
import phonePage from "reducers/phonePage";
import basket from "reducers/basket";

const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    router: connectRouter(history),
  });

export default createRootReducer;
