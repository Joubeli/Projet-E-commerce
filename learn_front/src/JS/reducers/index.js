import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerProduct from "./reducerProduct";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
});

export default rootReducer;