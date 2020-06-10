import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslations from './locale/en.json';
import jpTranslations from './locale/jp.json';
import frTranslations from './locale/fr.json';
import esTranslations from './locale/es.json';

const resources = {
  en: {
    translations: enTranslations
  },
  jp: {
    translations: jpTranslations
  },
  es: {
    translations: frTranslations
  },
  fr: {
    translations: esTranslations
  }
};

const storedLanguage = localStorage.getItem("language") || navigator.language.split('-')[0];

const i18nOptions = {
  resources,
  lng: storedLanguage,

  ns: 'translations',
  defaultNS: 'translations',

  fallbackLng: 'en',

  keyseparator: false,

  interpolation: {
    escapeValue: false
  }
};

i18n
  .use(initReactI18next)
  .init(i18nOptions);

export default i18n;