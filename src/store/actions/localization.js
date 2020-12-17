import { CHANGE_LANGUAGE } from '../actionTypes';
import moment from 'moment';

export default {
  change: ({ lng, i18n }) => {
    // set moment locale on language change
    moment.locale(lng.locale);
    // set i18n language
    i18n.changeLanguage(lng.code);
    return { type: CHANGE_LANGUAGE, payload: lng };
  },
};
