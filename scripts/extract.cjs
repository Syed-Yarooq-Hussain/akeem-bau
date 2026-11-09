const ts=require('typescript'),fs=require('fs');
const files=['homepage','navigation','editorial-hero','inquiry-form','contact-links'];
const found=new Set();
for(const name of files){const source=ts.createSourceFile(name,fs.readFileSync(`components/${name}.tsx`,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TSX);function visit(n){if(ts.isJsxText(n)&&n.text.trim())found.add(n.text.trim());if(ts.isStringLiteral(n)&&(/[ äöüß]/i.test(n.text)||/^(Startseite|Leistungen|Referenzen|Karriere|Kontakt|Datenschutz|Impressum|Unternehmen|Telefon|Optional|Projektort|Hamburg|Zusatzleistungen|Hochbau|Tiefbau)$/.test(n.text))&&!/^(className|id|href|type|autoComplete|role|src|sizes|name|value|target|rel|width|height)$/.test(n.parent.name?.text||'')&&!n.text.includes('@/')&&!n.text.startsWith('http')&&!n.text.startsWith('url('))found.add(n.text);ts.forEachChild(n,visit)}visit(source)}
fs.writeFileSync('messages/extracted.json',JSON.stringify([...found],null,2));
