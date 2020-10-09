import { ADMIN, FACEBOOK_AUTH } from "../actionTypes";
import services from "store/services";
import { generateWatcher } from "./_generate";

export const loginSaga = generateWatcher({ actionType: ADMIN.LOGIN });
export const logoutSaga = generateWatcher({ actionType: ADMIN.LOGOUT });

export const loginFacebookSaga = generateWatcher({
  actionType: FACEBOOK_AUTH.LOGIN,
  service: services.auth.facebookLogin,
});

export const logoutFacebookSaga = generateWatcher({
  actionType: FACEBOOK_AUTH.LOGOUT,
  service: services.auth.facebookLogout,
});

export const checkFacebookLoginSaga = generateWatcher({
  actionType: FACEBOOK_AUTH.CHECK_STATUS,
  service: services.auth.facebookGetLoginStatus,
});

export const facebookMeSaga = generateWatcher({
  actionType: FACEBOOK_AUTH.ME,
  service: services.auth.facebookMe,
});
