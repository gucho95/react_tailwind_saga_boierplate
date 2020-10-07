const generate = (actionName) => ({
  WATCH: `WATCH__${actionName}`,
  LOAD: `LOAD__${actionName}`,
  FAIL: `FAIL__${actionName}`,
  SUCCESS: `SUCCESS__${actionName}`,
  RESET: `RESET__${actionName}`,
});

export const generateCrud = ({ actionName }) => ({
  FIND: generate(`FIND__${actionName}`),
  FIND_ONE: generate(`FIND_ONE__${actionName}`),
  CREATE: generate(`CREATE__${actionName}`),
  UPDATE: generate(`UPDATE__${actionName}`),
  REMOVE: generate(`REMOVE__${actionName}`),
});

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const USERS = generateCrud({ actionName: "USERS" });

export const ADMIN = {
  LOGIN: generate("ADMIN_LOGIN"),
  LOGOUT: generate("ADMIN_LOGOUT"),
};
