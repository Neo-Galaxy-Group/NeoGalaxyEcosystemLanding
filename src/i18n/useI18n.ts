import { useState, useEffect, useCallback } from 'react';
import it from './it.json';
import en from './en.json';

type Locale = 'it' | 'en';
type TranslationValue = string | Record<string, unknown>;
type Translations = Record<Locale, Record<string, TranslationValue>>;

const translations: Translations = { it, en };

function detectLanguage(): Locale {
  const browserLang =
    navigator.language ||
    (navigator as Navigator & { userLanguage?: string }).userLanguage ||
    'en';
  const lang = browserLang.split('-')[0].toLowerCase();
  return lang === 'it' ? 'it' : 'en';
}

export function useI18n() {
  const [locale, setLocale] = useState<Locale>(() => detectLanguage());

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const t = useCallback(
    (key: string): string => {
      const keys = key.split('.');
      let value: unknown = translations[locale];
      for (const k of keys) {
        if (value == null || typeof value !== 'object') return key;
        value = (value as Record<string, unknown>)[k];
      }
      return (value as string) ?? key;
    },
    [locale]
  );

  return { t, locale, setLocale };
}
