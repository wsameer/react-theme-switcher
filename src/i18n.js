import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translations: {
      "Selected theme": "Selected theme",
      "Dark": "Dark",
      "Light": "Light",
      "Developed by": "Developed by"
    }
  },
  jp: {
    translations: {
      "Selected theme": "選択したテーマ",
      "Dark": "闇",
      "Light": "光",
      "Developed by": "によって開発された"
    }
  },
  es: {
    translations: {
      "Selected theme": "Tema seleccionado",
      "Dark": "Oscuro",
      "Light": "Ligero",
      "Developed by": "Desarrollado por"
    }
  },
  fr: {
    translations: {
      "Selected theme": "Thème sélectionné",
      "Dark": "Sombre",
      "Light": "Lumière",
      "Developed by": "Faite par"
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',

    ns: 'translations',
    defaultNS: 'translations',

    fallbackLng: 'en',
    debug: true,

    keyseparator: false,

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;