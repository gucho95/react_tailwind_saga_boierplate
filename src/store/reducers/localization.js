import { CHANGE_LANGUAGE } from '../actionTypes';
import { localization } from 'common';

// custom reducer
export default (state = localization.en, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LANGUAGE:
      return localization[payload.code];
    default:
      return state;
  }
};
