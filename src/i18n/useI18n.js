import { useState, useEffect, useCallback } from 'react';
import it from './it.json';
import en from './en.json';

const translations = { it, en };

function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const lang = browserLang.split('-')[0].toLowerCase();
  return lang === 'it' ? 'it' : 'en';
}

export function useI18n() {
  const [locale, setLocale] = useState(() => detectLanguage());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key) => {
      const keys = key.split('.');
      let value = translations[locale];
      for (const k of keys) {
        if (value == null) return key;
        value = value[k];
      }
      return value ?? key;
    },
    [locale]
  );

  return { t, locale, setLocale };
}
