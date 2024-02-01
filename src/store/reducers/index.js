import { combineReducers } from "redux";
import { globalReducer } from "./globalReducer";
import { userReducer } from "./userReducers";
import { productReducer } from "./productReducer";
import { orderReducer } from "./orderReducer";
import { shopingCartReducer } from "./shopingCartReducer";

import { storeReducer } from "./storeReducer";

export const reducers = combineReducers({
  general: globalReducer,
  user: userReducer,
  store: storeReducer,
  shopping: shopingCartReducer,
  product: productReducer,
  order: orderReducer,
  user: userReducer,
});
