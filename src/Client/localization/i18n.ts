import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { Language } from "../../Common/Interfaces/Language.interface";

export const init = (lang: Language) => {
  if(i18n.isInitialized) return;
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        default: lang,
      },
      fallbackLng: "default",
      debug: false,
      interpolation: {
        escapeValue: false,
      },
    });
};

export default i18n;
