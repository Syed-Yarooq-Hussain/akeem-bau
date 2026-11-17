'use client';
import {site} from '@/content/site';
import {useCopy} from '@/i18n/use-copy';
export default function CompanyDetails(){
 const t=useCopy();
 return <dl className="company-details"><div><dt>{t('Geschäftsführerin')}</dt><dd>{site.managingDirector}</dd></div><div><dt>{t('Bauleitung & Ansprechpartnerin')}</dt><dd>{site.constructionContact}</dd></div><div><dt>{t('Adresse')}</dt><dd><address>{site.street}<br/>{site.postalCity}</address></dd></div></dl>;
}
