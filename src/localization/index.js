import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import hy from "./hy";
import ru from "./ru";
import en from "./en";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: { en, ru, hy },
    lowerCaseLng: true,
    fallbackLng: "en",
    lng: "ru",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
