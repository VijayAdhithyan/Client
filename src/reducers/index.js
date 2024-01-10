import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import getAllTaskReducer from "./task";

export default combineReducers({
  authReducer,
  currentUserReducer,
  getAllTaskReducer,
});
