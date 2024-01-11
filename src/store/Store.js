// store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import globalReducer from "./reducers/globalReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import storeReducer from "./reducers/storeReducer";

const store = createStore(
  combineReducers({
    global: globalReducer,
    user: userReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
    store: storeReducer,
  }),
  applyMiddleware(thunk, logger)
);

export default store;
