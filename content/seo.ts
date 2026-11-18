import type {Metadata} from 'next';
import {locales,type Locale} from '../i18n/config';

// Set the real public origin in the hosting environment before building.
export function publicOrigin():string|undefined {
 const configured=process.env.SITE_URL?.trim()||'https://www.wbrgmbh.com';
 if(!configured)return undefined;
 const url=new URL(configured);
 if(!['https:','http:'].includes(url.protocol)||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw new Error('SITE_URL must be a public HTTP(S) origin without a path, credentials, query or hash.');
 if(url.hostname==='localhost'||url.hostname==='127.0.0.1'||url.hostname==='[::1]')throw new Error('SITE_URL must use the live public domain.');
 return url.origin;
}
export function languageAlternates(origin:string){return {...Object.fromEntries(locales.map(locale=>[locale,`${origin}/${locale}`])),'x-default':`${origin}/de`};}
export function searchMetadata(locale:Locale):Metadata {
 const origin=publicOrigin();
 return {
  robots:{index:!!origin,follow:true},
  ...(origin?{metadataBase:new URL(origin),alternates:{canonical:`${origin}/${locale}`,languages:languageAlternates(origin)}}:{}),
  ...(process.env.GOOGLE_SITE_VERIFICATION?{verification:{google:process.env.GOOGLE_SITE_VERIFICATION}}:{})
 };
}
