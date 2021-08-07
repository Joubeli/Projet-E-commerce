import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerProduct from "./reducerProduct";
// import reducerShop from "./reducerShop"
import reducerOrder from "./reducerOrder";

/* const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
  // reducerShop: reducerShop, */

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
  reducerOrder: reducerOrder,
});

export default rootReducer;