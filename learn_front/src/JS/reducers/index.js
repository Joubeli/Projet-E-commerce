import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerProduct from "./reducerProduct";
// import reducerShop from "./reducerShop"

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
  // reducerShop: reducerShop,
});

export default rootReducer;