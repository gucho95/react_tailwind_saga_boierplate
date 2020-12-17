import moment from 'moment';
import { localization } from 'common';

export const importLocales = async () => {
  const locales = Object.values(localization);
  locales.forEach(async (lng) => await import(`moment/locale/${lng.locale}`));
};

export const formatDate = (date) => moment(date).format('LL');
