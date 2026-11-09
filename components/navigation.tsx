'use client';
import {useCopy} from '@/i18n/use-copy';
import LanguageSwitcher from './language-switcher';

import {useEffect,useState} from 'react';
import {ArrowUpRight,Menu,X,ChevronDown} from 'lucide-react';
import {site} from '@/content/site';
import BrandLogo from './brand-logo';
export default function Navigation(){const t=useCopy();
 const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);const [services,setServices]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>50);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);setServices(false)}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 const close=()=>{setOpen(false);setServices(false)};
 return <><a className="skip-link" href="#main">{t("Zum Inhalt springen")}</a><header className={`navigation ${scrolled||open?'solid':''}`}><a className="brand" href="#start" aria-label={site.logoAlt+t(" – Startseite")} onClick={close}><BrandLogo/></a><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open?t("Menü schließen"):t("Menü öffnen")}>{open?<X/>:<Menu/>}</button><nav id="navigation" aria-label={t("Hauptnavigation")} className={open?'is-open':''}><a href="#start" onClick={close}>{t("Startseite")}</a><div className="dropdown" onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setServices(false)}}><button aria-expanded={services} aria-controls="service-menu" onClick={()=>setServices(!services)}>{t("Leistungen")} <ChevronDown size={13}/></button>{services&&<div id="service-menu" className="dropdown-panel">{site.services.map(s=><a key={s.id} href={'#'+s.id} onClick={close}>{t(s.title)}<ArrowUpRight size={14}/></a>)}<a href="#sanierung" onClick={close}>{t("Asbest & Schadstoffsanierung")}</a><a href="#zusatzleistungen" onClick={close}>{t("Zusatzleistungen")}</a></div>}</div><a href="#ueber-uns" onClick={close}>{t("Über uns")}</a><a href="#referenzen" onClick={close}>{t("Referenzen")}</a><a href="#karriere" onClick={close}>{t("Karriere")}</a><a href="#kontakt" onClick={close}>{t("Kontakt")}</a><LanguageSwitcher/><a className="nav-cta" href="#kontakt" onClick={close}>{t("Projekt anfragen")} <ArrowUpRight size={16}/></a></nav></header></>
}

