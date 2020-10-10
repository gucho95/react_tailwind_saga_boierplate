const FB = window.FB;

export default {
  facebookLogin: () => new Promise(async (resolve) => FB.login((response) => resolve(response))),
  facebookLogout: () => new Promise(async (resolve) => FB.logout((response) => resolve(response))),
  facebookGetLoginStatus: () => new Promise(async (resolve) => FB.getLoginStatus((response) => resolve(response))),
  facebookMe: () =>
    new Promise(async (resolve) =>
      FB.api("/me", { fields: "birthday,email,hometown" }, (response) => resolve(response))
    ),
};
