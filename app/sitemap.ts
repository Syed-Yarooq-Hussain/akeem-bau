import type {MetadataRoute} from 'next';
import {publicOrigin,languageAlternates} from '../content/seo';
import {locales} from '../i18n/config';
export default function sitemap():MetadataRoute.Sitemap {
 const origin=publicOrigin();
 if(!origin)return [];
 return locales.map(locale=>({url:`${origin}/${locale}`,alternates:{languages:languageAlternates(origin)}}));
}
