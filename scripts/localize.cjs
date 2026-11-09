const fs=require('fs'),ts=require('typescript');const keys=require('../messages/keys.json');
for(const name of ['homepage','navigation','editorial-hero','inquiry-form','contact-links']){
 const path=`components/${name}.tsx`;let text=fs.readFileSync(path,'utf8').replace(/^\uFEFF/,'');
 if(name==='navigation')text=text.replace(/<span className="languages"[\s\S]*?<\/span><a className="nav-cta"/, '<LanguageSwitcher/><a className="nav-cta"');
 if(name==='homepage')text=text.replace('<span>DE / EN folgt</span>','<LanguageSwitcher/>');
 const ast=ts.createSourceFile(path,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX),edits=[];
 function inFunction(n){for(let p=n.parent;p;p=p.parent)if(ts.isFunctionDeclaration(p))return p.name?.text!=='whatsappUrl';return false;}
 function visit(n){
  if(ts.isJsxText(n)&&keys[n.text.trim()]){const lead=/^\s/.test(n.text)?' ':'';const tail=/\s$/.test(n.text)?' ':'';edits.push([n.pos,n.end,`${lead}{t(${JSON.stringify(n.text.trim())})}${tail}`]);return;}
  if(ts.isStringLiteral(n)&&keys[n.text]&&inFunction(n)){
   if(ts.isJsxAttribute(n.parent)&&!['alt','aria-label','placeholder','title'].includes(n.parent.name.text))return;
   const call=`t(${JSON.stringify(n.text)})`;edits.push([n.getStart(ast),n.end,ts.isJsxAttribute(n.parent)?`{${call}}`:call]);return;
  }ts.forEachChild(n,visit);
 }visit(ast);edits.sort((a,b)=>b[0]-a[0]).forEach(([a,b,s])=>text=text.slice(0,a)+s+text.slice(b));
 text=text.replace(/export default function (\w+)\(\)\s*\{/,"export default function $1(){const t=useCopy();");
 if(name==='contact-links'){text=text.replace('export function WhatsAppShortcut(){','export function WhatsAppShortcut(){const t=useCopy();').replace('export function whatsappUrl(){','export function whatsappUrl(t:(value:string)=>string){').replaceAll('whatsappUrl();','whatsappUrl(t);').replace("encodeURIComponent('Guten Tag, ich möchte ein Bauvorhaben mit Ihnen besprechen.')","encodeURIComponent(t('Guten Tag, ich möchte ein Bauvorhaben mit Ihnen besprechen.'))");}
 if(name==='homepage'){text=text.replace('{site.intro}','{t(site.intro)}').replaceAll('{s.title}','{t(s.title)}').replaceAll('{s.tag}','{t(s.tag)}').replaceAll('{s.description}','{t(s.description)}').replace('alt={s.alt}','alt={t(s.alt)}').replace('s.title+','t(s.title)+').replace('{title}</h3>','{t(title)}</h3>').replace('{body}</p>','{t(body)}</p>').replace('{group.title}','{t(group.title)}').replace('{item}</li>','{t(item)}</li>');}
 if(name==='navigation')text=text.replaceAll('{s.title}','{t(s.title)}');
 if(name==='inquiry-form'){text=text.replace('{type}</span>','{t(type)}</span>').replace('{label}{','{t(label)}{').replace('placeholder={placeholder}','placeholder={t(placeholder)}').replaceAll('{errors.type.message}','{t(errors.type.message!)}').replaceAll('{errors.location.message}','{t(errors.location.message!)}').replaceAll('{errors.description.message}','{t(errors.description.message!)}').replaceAll('{errors.consent.message}','{t(errors.consent.message!)}').replace('{errors[key]?.message}','{t(errors[key]?.message || "")}');}
 const imports="import {useCopy} from '@/i18n/use-copy';\n"+(['homepage','navigation'].includes(name)?"import LanguageSwitcher from './language-switcher';\n":'');
 text=text.startsWith("'use client';")?text.replace("'use client';","'use client';\n"+imports):"'use client';\n"+imports+text;
 fs.writeFileSync(path,text);
}
