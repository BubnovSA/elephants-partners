import { en } from './en';
import { hi } from './hi';
import type { Translations } from './en';

export type Lang = 'en' | 'hi';

export function getTranslations(lang: Lang): Translations {
  return lang === 'hi' ? hi : en;
}

/** Given a pathname and a target lang, return the equivalent URL */
export function switchLangUrl(pathname: string, targetLang: Lang): string {
  // Strip trailing slash except root
  const clean = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;

  if (targetLang === 'hi') {
    // EN → HI: add /hi prefix if not already there
    if (clean.startsWith('/hi')) return clean;
    return '/hi' + (clean === '/' ? '' : clean);
  } else {
    // HI → EN: remove /hi prefix
    if (!clean.startsWith('/hi')) return clean;
    const stripped = clean.slice(3); // remove '/hi'
    return stripped === '' ? '/' : stripped;
  }
}

export function currentLang(pathname: string): Lang {
  return pathname.startsWith('/hi') ? 'hi' : 'en';
}

export { en, hi };
export type { Translations };
