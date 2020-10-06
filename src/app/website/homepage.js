import React from "react";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation();
  return <div>{t("homepage")}</div>;
};
