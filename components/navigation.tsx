'use client';
import {useEffect,useState} from 'react';
import {ArrowUpRight,Menu,X,ChevronDown} from 'lucide-react';
import {site} from '@/content/site';
import BrandLogo from './brand-logo';
export default function Navigation(){
 const [scrolled,setScrolled]=useState(false); const [open,setOpen]=useState(false);const [services,setServices]=useState(false);
 useEffect(()=>{const update=()=>setScrolled(window.scrollY>50);update();window.addEventListener('scroll',update,{passive:true});return ()=>window.removeEventListener('scroll',update)},[]);
 useEffect(()=>{const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);setServices(false)}};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[]);
 const close=()=>{setOpen(false);setServices(false)};
 return <><a className="skip-link" href="#main">Zum Inhalt springen</a><header className={`navigation ${scrolled||open?'solid':''}`}><a className="brand" href="#start" aria-label={site.logoAlt+' – Startseite'} onClick={close}><BrandLogo/></a><button className="mobile-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open?'Menü schließen':'Menü öffnen'}>{open?<X/>:<Menu/>}</button><nav id="navigation" aria-label="Hauptnavigation" className={open?'is-open':''}><a href="#start" onClick={close}>Startseite</a><div className="dropdown" onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setServices(false)}}><button aria-expanded={services} aria-controls="service-menu" onClick={()=>setServices(!services)}>Leistungen <ChevronDown size={13}/></button>{services&&<div id="service-menu" className="dropdown-panel">{site.services.map(s=><a key={s.id} href={'#'+s.id} onClick={close}>{s.title}<ArrowUpRight size={14}/></a>)}<a href="#sanierung" onClick={close}>Asbest & Schadstoffsanierung</a><a href="#zusatzleistungen" onClick={close}>Zusatzleistungen</a></div>}</div><a href="#ueber-uns" onClick={close}>Über uns</a><a href="#referenzen" onClick={close}>Referenzen</a><a href="#karriere" onClick={close}>Karriere</a><a href="#kontakt" onClick={close}>Kontakt</a><span className="languages" aria-label="Sprache Deutsch; Englisch folgt in Phase 5">DE <span>/</span> <span title="Englisch folgt in Phase 5">EN</span></span><a className="nav-cta" href="#kontakt" onClick={close}>Projekt anfragen <ArrowUpRight size={16}/></a></nav></header></>
}

