import { combineReducers } from "redux";
import users from "./_example";
import admin from "./admin";
// reducers
export const initialState = { data: null, loaded: false, failed: false };

const RootReducer = combineReducers({ users, admin });

export default RootReducer;
