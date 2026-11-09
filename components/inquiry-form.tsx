'use client';
import {useCopy} from '@/i18n/use-copy';

import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {ArrowUpRight,Check,Plus,FileText} from 'lucide-react';
const projectTypes=['Entkernung & Rückbau','Abbruch & Abriss','Hochbau','Tiefbau','Asbest & Schadstoffsanierung','Zusatzleistungen'] as const;
const schema=z.object({name:z.string().trim().min(2,'Bitte geben Sie Ihren Namen ein.'),company:z.string(),email:z.email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),phone:z.string(),type:z.enum(projectTypes,{error:'Bitte wählen Sie eine Leistung.'}),location:z.string().trim().min(2,'Bitte geben Sie den Projektort ein.'),description:z.string().trim().min(20,'Bitte beschreiben Sie Ihr Vorhaben in mindestens 20 Zeichen.'),consent:z.boolean().refine(v=>v,'Bitte bestätigen Sie den Datenschutzhinweis.')});
type Values=z.infer<typeof schema>;
export default function InquiryForm(){const t=useCopy();
 const [status,setStatus]=useState('');
 const {register,handleSubmit,formState:{errors}}=useForm<Values>({resolver:zodResolver(schema),defaultValues:{company:'',phone:'',consent:false}});
 const fields=[['name',t("Ihr Name"),t("Vorname und Nachname"),'text','name'],['company',t("Unternehmen"),t("Optional"),'text','organization'],['email',t("E-Mail"),'name@unternehmen.de','email','email'],['phone',t("Telefon"),t("Optional"),'tel','tel']] as const;
 return <form className="project-brief" noValidate onChange={()=>setStatus('')} onSubmit={handleSubmit(()=>setStatus(t("Ihre Angaben sind geprüft. Es wurde nichts versendet. Der sichere Versand wird vor dem Start der Website eingerichtet.")),()=>setStatus(t("Bitte prüfen Sie die markierten Felder. Es wurde nichts versendet.")))}>
  <div className="brief-masthead"><span>{t("PROJEKTANFRAGE")}</span><span>W / B</span></div>
  <fieldset className="brief-section"><legend><span className="brief-number">01</span><span>{t("Was haben Sie vor?")}<small>{t("Wählen Sie den Schwerpunkt Ihres Projekts. *")}</small></span></legend>
   <div className="project-options" role="radiogroup" aria-label={t("Projektart")} aria-required="true" aria-invalid={!!errors.type} aria-describedby={errors.type?'type-error':undefined}>{projectTypes.map((type,i)=><label className="project-option" key={type}><input type="radio" value={type} {...register('type')}/><span className="option-index">0{i+1}</span><span className="option-name">{t(type)}</span><span className="option-marker"><Plus className="option-plus" size={15}/><Check className="option-check" size={15}/></span></label>)}</div>
   {errors.type&&<p className="error" id="type-error">{t(errors.type.message!)}</p>}
   <label className="brief-field">{t("Projektort *")}<input placeholder={t("Stadt / Postleitzahl")} autoComplete="off" {...register('location')} aria-invalid={!!errors.location} aria-describedby={errors.location?'location-error':undefined}/>{errors.location&&<span className="error" id="location-error">{t(errors.location.message!)}</span>}</label>
   <label className="brief-field">{t("Ihr Vorhaben *")}<textarea rows={3} placeholder={t("Umfang, Bestand, gewünschter Zeitraum …")} {...register('description')} aria-invalid={!!errors.description} aria-describedby={errors.description?'description-error':undefined}/>{errors.description&&<span className="error" id="description-error">{t(errors.description.message!)}</span>}</label>
   <div className="brief-documents"><FileText size={22} strokeWidth={1}/><div><strong>{t("Pläne. Skizzen. Perspektiven.")}</strong><span>{t("Der sichere Dokumenten-Upload folgt zur Freischaltung.")}</span></div><span className="document-state">{t("IN VORBEREITUNG")}</span></div>
  </fieldset>
  <fieldset className="brief-section"><legend><span className="brief-number">02</span><span>{t("Wie erreichen wir Sie?")}<small>{t("Ein Ansprechpartner für die nächsten Schritte.")}</small></span></legend><div className="brief-contact-grid">{fields.map(([key,label,placeholder,type,autoComplete])=><label key={key} className="brief-field">{t(label)}{key==='name'||key==='email'?' *':''}<input type={type} placeholder={t(placeholder)} autoComplete={autoComplete} {...register(key)} aria-invalid={!!errors[key]} aria-describedby={errors[key]?key+'-error':undefined}/>{errors[key]&&<span className="error" id={key+'-error'}>{t(errors[key]?.message || "")}</span>}</label>)}</div></fieldset>
  <div className="brief-finish"><label className="consent"><input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent?'consent-error':undefined}/><span>{t("Ich habe den")} <a href="#datenschutz">{t("Datenschutzhinweis")}</a> {t("gelesen. *")}</span></label>{errors.consent&&<p className="error" id="consent-error">{t(errors.consent.message!)}</p>}<p className="form-note">{t("Vorschau · Ihre Angaben bleiben in diesem Browserfenster.")}</p><button type="submit" className="brief-submit"><span><small>{t("BEREIT FÜR DEN NÄCHSTEN SCHRITT?")}</small>{t("Angaben prüfen")}</span><span className="submit-arrow"><ArrowUpRight size={30} strokeWidth={1.25}/></span></button><p role="status" className="form-status">{status}</p></div>
 </form>
}
