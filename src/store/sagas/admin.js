import { ADMIN } from "../actionTypes";
import { generateWatcher } from "./_generate";

export const adminLoginSaga = generateWatcher({ actionType: ADMIN.LOGIN });
export const adminLogoutSaga = generateWatcher({ actionType: ADMIN.LOGOUT });
