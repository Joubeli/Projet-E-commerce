import { combineReducers } from "redux";
import reducerUser from "./reducerUser";
import reducerProduct from "./reducerProduct";
import reducerShop from "./reducerShop"
import reducerOrder from "./reducerOrder";
import reducerAdmin from "./reducerAdmin";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
  reducerProduct: reducerProduct,
  reducerOrder: reducerOrder,
  reducerShop:reducerShop,
  reducerAdmin:reducerAdmin
 
});

export default rootReducer;