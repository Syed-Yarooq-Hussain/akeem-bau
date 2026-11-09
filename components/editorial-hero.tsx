'use client';
import Image from 'next/image';
import {ArrowDown, ArrowUpRight, MapPin} from 'lucide-react';
import {motion, useReducedMotion} from 'motion/react';

export default function EditorialHero() {
 const reduced = useReducedMotion();
 return <section id="start" className="architecture-hero">
   <div className="hero-architecture-photo"><Image src="/images/hamburg-speicherstadt.jpg" alt="Hamburger Speicherstadt mit Backsteinfassaden und Kanal im Abendlicht" fill priority sizes="(max-width: 700px) 100vw, 70vw"/></div>
   <div className="architecture-shade"/>
   <div className="shell architecture-content">
     <div className="hero-location"><span/> HAMBURG · DEUTSCHLAND</div>
     <motion.h1 initial={reduced ? false : {opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.7}}>Wir schaffen<br/>Raum.<br/><span>Für Neues.</span></motion.h1>
     <p>Entkernung, Abbruch, Hochbau und Tiefbau.<br/>Zuverlässig geplant. Professionell umgesetzt.</p>
     <div className="architecture-actions"><a className="button gold" href="#kontakt">Projekt anfragen <ArrowUpRight size={19}/></a><a href="#leistungen" className="text-link">Leistungen entdecken <ArrowDown size={16}/></a></div>
   </div>
   <div className="hero-photo-label"><MapPin size={15}/><span>SPEICHERSTADT, HAMBURG<small>Standortmotiv · keine Projektreferenz</small></span></div>
   <div className="hero-outline" aria-hidden="true">BAU & RÜCKBAU</div>
   <div className="hero-index"><span>BAUEN.</span><span>VERÄNDERN.</span><span>WEITERDENKEN.</span><a href="#intro" aria-label="Mehr über Williams erfahren"><ArrowDown size={22}/></a></div>
 </section>
}
