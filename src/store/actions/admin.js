import { ADMIN } from "store/actionTypes";

export default {
  login: (payload) => ({ type: ADMIN.LOGIN.WATCH, payload }),
  logout: () => ({ type: ADMIN.LOGOUT.WATCH }),
};
