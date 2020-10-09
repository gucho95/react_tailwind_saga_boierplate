import { ADMIN, FACEBOOK_AUTH } from "store/actionTypes";

export default {
  login: (payload) => ({ type: ADMIN.LOGIN.WATCH, payload }),
  logout: () => ({ type: ADMIN.LOGOUT.WATCH }),
  facebookLogin: () => ({ type: FACEBOOK_AUTH.LOGIN.WATCH }),
  facebookLogout: () => ({ type: FACEBOOK_AUTH.LOGOUT.WATCH }),
  facebookGetLoginStatus: () => ({ type: FACEBOOK_AUTH.CHECK_STATUS.WATCH }),
  facebookMe: () => ({ type: FACEBOOK_AUTH.ME.WATCH }),
};
