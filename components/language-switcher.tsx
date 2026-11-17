'use client';
import {useLocale} from 'next-intl';
import {useCopy} from '@/i18n/use-copy';
import {locales,localeNames} from '@/i18n/config';
export default function LanguageSwitcher(){
 const locale=useLocale();const t=useCopy();
 return <div className="language-switcher"><select aria-label={t('Sprache')} value={locale} onChange={event=>window.location.assign(`/${event.target.value}${window.location.search}${window.location.hash}`)}>{locales.map(l=><option key={l} value={l} lang={l}>{localeNames[l]}</option>)}</select></div>;
}
