import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "../../Common/Interfaces/Language.interface";

export const init = (lang: Language) => {
  i18n
    .use(initReactI18next)
    .init({
      resources: lang,
      debug: true,
      interpolation: {
        escapeValue: false,
      },
    });
};

export default i18n;
