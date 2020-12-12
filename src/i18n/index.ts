import I18n from 'i18n-js';

import i18nEN from './en';
import i18nFA from './fa';

import app from 'i18n/en/app';

I18n.translations = {
  en: {
    app: i18nEN.appLang,
  },
  fa: {
    app: i18nFA.appLang,
  },
};
I18n.fallbacks = ['fa'];
I18n.locale = 'fa';

const t = (word) => I18n.t(word);

export default {
  appLang: app,
};
export {t};
