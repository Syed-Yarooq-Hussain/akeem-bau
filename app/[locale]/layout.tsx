import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import {isLocale,locales} from '@/i18n/config';
import '../globals.css';
import '../editorial.css';
import '@fontsource/space-grotesk/latin-500.css';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-600.css';
export function generateStaticParams(){return locales.map(locale=>({locale}));}
export async function generateMetadata({params}:{params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();const descriptions={de:'Bau & Rückbau in Hamburg',en:'Construction & demolition in Hamburg',fr:'Construction et déconstruction à Hambourg',es:'Construcción y demolición en Hamburgo'};return {title:`Williams B&R GmbH | ${descriptions[locale]}`,description:descriptions[locale],robots:{index:false,follow:false}};}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){const {locale}=await params;if(!isLocale(locale))notFound();const messages=(await import(`../../messages/${locale}.json`)).default;return <html lang={locale}><body><NextIntlClientProvider locale={locale} messages={messages}>{children}</NextIntlClientProvider></body></html>}
