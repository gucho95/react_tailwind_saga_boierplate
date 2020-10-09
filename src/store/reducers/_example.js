import { USERS } from "../actionTypes";
import { generateReducer } from "./_generate";

export default (state, action) => generateReducer({ state, action, actionType: USERS });
