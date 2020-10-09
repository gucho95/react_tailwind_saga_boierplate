import { ADMIN } from "../actionTypes";
import { initialState } from "./_generate";
const { LOGIN, LOGOUT } = ADMIN;

// custom reducer
export default (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [LOGIN.LOAD, LOGOUT.LOAD].includes(type):
      return { ...state, loaded: false };
    case [LOGIN.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [LOGIN.SUCCESS, LOGOUT.SUCCESS].includes(type):
      return { ...state, data: response.payload, loaded: true };
    // create
    default:
      return state;
  }
};
