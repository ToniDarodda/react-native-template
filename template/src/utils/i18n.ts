import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'react-native-localize';

import login from '../traduction/login/login.en.json';
import register from '../traduction/register/register.en.json';

// Define your resources here
const resources = {
  en: {
    login,
    register,
  },
} as const;

// Function to get the best available language
const findBestAvailableLanguage = (): string => {
  const bestLanguage = Localization.findBestLanguageTag(Object.keys(resources));
  return bestLanguage?.languageTag || 'en';
};

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: findBestAvailableLanguage(),
    fallbackLng: 'en',
    debug: true,
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
