import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import phones from "reducers/phones";
import phonesPage from "reducers/phonesPage";
import phonePage from "reducers/phonePage";
import basket from "reducers/basket";
import categories from "reducers/categories";

const createRootReducer = (history) =>
  combineReducers({
    phones,
    phonesPage,
    phonePage,
    basket,
    categories,
    router: connectRouter(history),
  });

export default createRootReducer;
