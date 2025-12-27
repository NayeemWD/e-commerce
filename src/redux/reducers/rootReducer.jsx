import { combineReducers } from "redux";
import cartReducer from "./cartReducer.jsx";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
