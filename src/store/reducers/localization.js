import { CHANGE_LANGUAGE } from "../actionTypes";
import languages from "constants/localization";

// custom reducer
export default (state = languages.en, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return languages[payload.code];
    default:
      return state;
  }
};
