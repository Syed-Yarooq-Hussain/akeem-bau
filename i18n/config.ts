export const locales=['de','en','tr','pl','ro','sq','es','fr','el','uk','bg','it'] as const;
export type Locale=typeof locales[number];
export const localeNames:Record<Locale,string>={de:'Deutsch',en:'English',tr:'Türkçe',pl:'Polski',ro:'Română',sq:'Shqip',es:'Español',fr:'Français',el:'Ελληνικά',uk:'Українська',bg:'Български',it:'Italiano'};
export function isLocale(value:string):value is Locale{return locales.includes(value as Locale);}
