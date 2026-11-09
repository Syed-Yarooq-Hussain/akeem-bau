'use client';
import {useLocale} from 'next-intl';
import {useCopy} from '@/i18n/use-copy';
import {locales} from '@/i18n/config';
const names={de:'Deutsch',en:'English',fr:'Français',es:'Español'};
export default function LanguageSwitcher(){const locale=useLocale();const t=useCopy();return <div className="language-switcher" role="group" aria-label={t('Sprache')}>{locales.map(l=><a key={l} href={`/${l}`} lang={l} hrefLang={l} aria-label={names[l]} aria-current={locale===l?'page':undefined} onClick={event=>{if(!event.ctrlKey&&!event.metaKey&&!event.shiftKey&&!event.altKey){event.preventDefault();window.location.assign(`/${l}${window.location.hash}`);}}}>{l.toUpperCase()}</a>)}</div>}
