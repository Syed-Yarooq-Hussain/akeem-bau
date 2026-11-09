'use client';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {ArrowUpRight,Check,Plus,FileText} from 'lucide-react';
const projectTypes=['Entkernung & Rückbau','Abbruch & Abriss','Hochbau','Tiefbau','Asbest & Schadstoffsanierung','Zusatzleistungen'] as const;
const schema=z.object({name:z.string().trim().min(2,'Bitte geben Sie Ihren Namen ein.'),company:z.string(),email:z.email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),phone:z.string(),type:z.enum(projectTypes,{error:'Bitte wählen Sie eine Leistung.'}),location:z.string().trim().min(2,'Bitte geben Sie den Projektort ein.'),description:z.string().trim().min(20,'Bitte beschreiben Sie Ihr Vorhaben in mindestens 20 Zeichen.'),consent:z.boolean().refine(v=>v,'Bitte bestätigen Sie den Datenschutzhinweis.')});
type Values=z.infer<typeof schema>;
export default function InquiryForm(){
 const [status,setStatus]=useState('');
 const {register,handleSubmit,formState:{errors}}=useForm<Values>({resolver:zodResolver(schema),defaultValues:{company:'',phone:'',consent:false}});
 const fields=[['name','Ihr Name','Vorname und Nachname','text','name'],['company','Unternehmen','Optional','text','organization'],['email','E-Mail','name@unternehmen.de','email','email'],['phone','Telefon','Optional','tel','tel']] as const;
 return <form className="project-brief" noValidate onChange={()=>setStatus('')} onSubmit={handleSubmit(()=>setStatus('Ihre Angaben sind geprüft. Es wurde nichts versendet. Der sichere Versand wird vor dem Start der Website eingerichtet.'),()=>setStatus('Bitte prüfen Sie die markierten Felder. Es wurde nichts versendet.'))}>
  <div className="brief-masthead"><span>PROJEKTANFRAGE</span><span>W / B</span></div>
  <fieldset className="brief-section"><legend><span className="brief-number">01</span><span>Was haben Sie vor?<small>Wählen Sie den Schwerpunkt Ihres Projekts. *</small></span></legend>
   <div className="project-options" role="radiogroup" aria-label="Projektart" aria-required="true" aria-invalid={!!errors.type} aria-describedby={errors.type?'type-error':undefined}>{projectTypes.map((type,i)=><label className="project-option" key={type}><input type="radio" value={type} {...register('type')}/><span className="option-index">0{i+1}</span><span className="option-name">{type}</span><span className="option-marker"><Plus className="option-plus" size={15}/><Check className="option-check" size={15}/></span></label>)}</div>
   {errors.type&&<p className="error" id="type-error">{errors.type.message}</p>}
   <label className="brief-field">Projektort *<input placeholder="Stadt / Postleitzahl" autoComplete="off" {...register('location')} aria-invalid={!!errors.location} aria-describedby={errors.location?'location-error':undefined}/>{errors.location&&<span className="error" id="location-error">{errors.location.message}</span>}</label>
   <label className="brief-field">Ihr Vorhaben *<textarea rows={3} placeholder="Umfang, Bestand, gewünschter Zeitraum …" {...register('description')} aria-invalid={!!errors.description} aria-describedby={errors.description?'description-error':undefined}/>{errors.description&&<span className="error" id="description-error">{errors.description.message}</span>}</label>
   <div className="brief-documents"><FileText size={22} strokeWidth={1}/><div><strong>Pläne. Skizzen. Perspektiven.</strong><span>Der sichere Dokumenten-Upload folgt zur Freischaltung.</span></div><span className="document-state">IN VORBEREITUNG</span></div>
  </fieldset>
  <fieldset className="brief-section"><legend><span className="brief-number">02</span><span>Wie erreichen wir Sie?<small>Ein Ansprechpartner für die nächsten Schritte.</small></span></legend><div className="brief-contact-grid">{fields.map(([key,label,placeholder,type,autoComplete])=><label key={key} className="brief-field">{label}{key==='name'||key==='email'?' *':''}<input type={type} placeholder={placeholder} autoComplete={autoComplete} {...register(key)} aria-invalid={!!errors[key]} aria-describedby={errors[key]?key+'-error':undefined}/>{errors[key]&&<span className="error" id={key+'-error'}>{errors[key]?.message}</span>}</label>)}</div></fieldset>
  <div className="brief-finish"><label className="consent"><input type="checkbox" {...register('consent')} aria-invalid={!!errors.consent} aria-describedby={errors.consent?'consent-error':undefined}/><span>Ich habe den <a href="#datenschutz">Datenschutzhinweis</a> gelesen. *</span></label>{errors.consent&&<p className="error" id="consent-error">{errors.consent.message}</p>}<p className="form-note">Vorschau · Ihre Angaben bleiben in diesem Browserfenster.</p><button type="submit" className="brief-submit"><span><small>BEREIT FÜR DEN NÄCHSTEN SCHRITT?</small>Angaben prüfen</span><span className="submit-arrow"><ArrowUpRight size={30} strokeWidth={1.25}/></span></button><p role="status" className="form-status">{status}</p></div>
 </form>
}
