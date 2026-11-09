'use client';
import {useCopy} from '@/i18n/use-copy';

import Image from 'next/image';
import {ArrowDown, ArrowUpRight, MapPin} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';

export default function EditorialHero(){const t=useCopy();
 const reduced = useReducedMotion();
 return <section id="start" className="architecture-hero">
   <div className="hero-architecture-photo"><Image src="/images/hamburg-speicherstadt.jpg" alt={t("Hamburger Speicherstadt mit Backsteinfassaden und Kanal im Abendlicht")} fill priority sizes="(max-width: 700px) 100vw, 70vw"/></div>
   <div className="architecture-shade"/>
   <div className="shell architecture-content">
     <div className="hero-location"><span/> {t("HAMBURG · DEUTSCHLAND")}</div>
     <motion.h1 initial={reduced ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>{t("Wir schaffen")}<br/>{t("Raum.")}<br/><span>{t("Für Neues.")}</span></motion.h1>
     <p>{t("Entkernung, Abbruch, Hochbau und Tiefbau.")}<br/>{t("Zuverlässig geplant. Professionell umgesetzt.")}</p>
     <div className="architecture-actions"><a className="button gold" href="#kontakt">{t("Projekt anfragen")} <ArrowUpRight size={19}/></a><a href="#leistungen" className="text-link">{t("Leistungen entdecken")} <ArrowDown size={16}/></a></div>
   </div>
   <div className="hero-photo-label"><MapPin size={15}/><span>{t("SPEICHERSTADT, HAMBURG")}<small>{t("Standortmotiv · keine Projektreferenz")}</small></span></div>
   <div className="hero-outline" aria-hidden="true">{t("BAU & RÜCKBAU")}</div>
   <div className="hero-index"><span>{t("BAUEN.")}</span><span>{t("VERÄNDERN.")}</span><span>{t("WEITERDENKEN.")}</span><a href="#intro" aria-label={t("Mehr über Williams erfahren")}><ArrowDown size={22}/></a></div>
 </section>
}
