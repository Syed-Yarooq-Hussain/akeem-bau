import {useId} from 'react';
import {site} from '@/content/site';

export default function BrandLogo(){
 const filterId = 'williams-brand-' + useId().replace(/:/g, '');
 return <span className="brand-lockup">
  {site.logo && <svg className="brand-monogram" viewBox="0 0 460 330" aria-hidden="true" focusable="false">
   <defs><filter id={filterId} colorInterpolationFilters="sRGB" x="0" y="0" width="100%" height="100%">
    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 -5 0 4.3" result="ink-mask"/>
    <feFlood floodColor="#f4f2ed" result="ivory"/>
    <feComposite in="ivory" in2="ink-mask" operator="in" result="light-logo"/>
    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  6 0 -6 0 -0.55" result="gold-mask"/>
    <feFlood floodColor="#c6a575" result="gold"/>
    <feComposite in="gold" in2="gold-mask" operator="in" result="gold-logo"/>
    <feComposite in="gold-logo" in2="light-logo" operator="over"/>
   </filter></defs>
   <image href={site.logo} width="1625" height="330" filter={`url(#${filterId})`}/>
  </svg>}
  <span className="brand-wordmark"><span className="brand-name">{site.displayName}</span><span className="brand-descriptor">{site.tagline}</span></span>
 </span>;
}
