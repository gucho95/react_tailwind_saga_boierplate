const generate = (actionName) => ({
  WATCH: `${actionName}__WATCH`,
  LOAD: `${actionName}__LOAD`,
  FAIL: `${actionName}__FAIL`,
  SUCCESS: `${actionName}__SUCCESS`,
  RESET: `${actionName}__RESET`,
});

export const generateCrud = ({ actionName }) => ({
  FIND: generate(`FIND__${actionName}`),
  FIND_ONE: generate(`FIND_ONE__${actionName}`),
  CREATE: generate(`CREATE__${actionName}`),
  UPDATE: generate(`UPDATE__${actionName}`),
  REMOVE: generate(`REMOVE__${actionName}`),
});

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
export const USERS = generateCrud({ actionName: 'USERS' });

export const ADMIN = {
  LOGIN: generate('ADMIN_LOGIN'),
  LOGOUT: generate('ADMIN_LOGOUT'),
};

export const FACEBOOK_AUTH = {
  LOGIN: generate('FACEBOOK_LOGIN'),
  LOGOUT: generate('FACEBOOK_LOGOUT'),
  CHECK_STATUS: generate('FACEBOOK_CHECK_STATUS'),
  ME: generate('FACEBOOK_ME'),
};
