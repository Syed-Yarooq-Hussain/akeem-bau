'use client';
import {useCopy} from '@/i18n/use-copy';
import {ArrowUpRight, Mail, MessageCircle} from 'lucide-react';
import {site} from '@/content/site';

export function whatsappUrl(t:(value:string)=>string){
 const number=site.whatsappNumber.replace(/[^0-9]/g,'');
 return /^[1-9][0-9]{7,14}$/.test(number) ? `https://wa.me/${number}?text=${encodeURIComponent(t('Guten Tag, ich möchte ein Bauvorhaben mit Ihnen besprechen.'))}` : null;
}
export default function ContactLinks(){const t=useCopy();
 const whatsapp=whatsappUrl(t);
 return <div className="direct-contact"><a href={`mailto:${site.email}`}><Mail size={19} strokeWidth={1.4}/><span><small>{t("DIREKT PER E-MAIL")}</small>{site.email}</span><ArrowUpRight size={18}/></a>{whatsapp&&<a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} strokeWidth={1.4}/><span><small>{t("PROJEKT BESPRECHEN")}</small>{t("WhatsApp öffnen")}</span><ArrowUpRight size={18}/></a>}</div>;
}
export function WhatsAppShortcut(){const t=useCopy();
 const url=whatsappUrl(t);
 return url?<a className="whatsapp-shortcut" href={url} target="_blank" rel="noopener noreferrer" aria-label={t("WhatsApp-Chat öffnen (neuer Tab)")}><MessageCircle size={22}/><span>WhatsApp</span><ArrowUpRight size={14}/></a>:null;
}
