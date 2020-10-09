import { combineReducers } from "redux";
import users from "./_example";
import admin from "./admin";
import localization from "./localization";

export default combineReducers({ users, admin, localization });
