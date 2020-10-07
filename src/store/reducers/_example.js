import { USERS } from "../actionTypes";
import { initialState } from ".";
const { FIND, UPDATE, CREATE, REMOVE } = USERS;

export default (state = initialState, action) => {
  const { type, response } = action;
  switch (true) {
    case [FIND.LOAD, UPDATE.LOAD, CREATE.LOAD, REMOVE.LOAD].includes(type):
      return { ...state, loaded: false };
    case [FIND.FAIL, UPDATE.FAIL, CREATE.FAIL, REMOVE.FAIL].includes(type):
      return { ...state, failed: true, loaded: true };
    case [FIND.SUCCESS, UPDATE.SUCCESS, CREATE.SUCCESS, REMOVE.SUCCESS].includes(type):
      return { ...state, data: { rows: response.data, meta: response.meta }, loaded: true };
    case [FIND.RESET].includes(type):
      return initialState;
    // create
    default:
      return state;
  }
};
