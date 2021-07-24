import { combineReducers } from "redux";
import reducerUser from "./reducerUser";

const rootReducer = combineReducers({
  reducerUser: reducerUser,
});

export default rootReducer;