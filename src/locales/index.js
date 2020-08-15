import i18next from 'i18next';
import { en } from './en/en';
import { vi } from './vi/vi';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: en,
    },
    vi: {
      common: vi,
    },
  },
});
