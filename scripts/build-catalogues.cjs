const fs=require('node:fs');
const rows=fs.readFileSync('messages/translations.txt','utf8').replace(/^\uFEFF/,'').trim().split(/\r?\n/).filter(Boolean).map(x=>x.split('|'));
const extras=require('../messages/company.json');
const keys={};const messages={de:{},en:{},fr:{},es:{}};
rows.forEach((row,i)=>{if(row.length!==4)throw Error('Bad row '+i);const key='m'+i;keys[row[0]]=key;['de','en','fr','es'].forEach((l,j)=>messages[l][key]=row[j]);});
for(const locale of ['tr','pl','ro','sq','el','uk','bg','it']){
 const lines=fs.readFileSync(`messages/${locale}.txt`,'utf8').trimEnd().split(/\r?\n/);
 if(lines.length!==rows.length)throw Error(`${locale}: expected ${rows.length} translations, got ${lines.length}`);
 messages[locale]=Object.fromEntries(lines.map((value,i)=>['m'+i,value]));
}
for(const [key,source] of Object.entries(extras.de))keys[source]=key;
for(const locale in messages){Object.assign(messages[locale],extras[locale]);fs.writeFileSync(`messages/${locale}.json`,JSON.stringify(messages[locale],null,2)+'\n');}
keys['Bau & Rückbau']='m92';
fs.writeFileSync('messages/keys.json',JSON.stringify(keys,null,2)+'\n');
console.log(`Generated ${Object.keys(messages).length} complete catalogues.`);

