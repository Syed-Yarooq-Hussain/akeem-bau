const assert=require('node:assert/strict'),fs=require('fs'),ts=require('typescript');
const keys=require('../messages/keys.json');const de=require('../messages/de.json');
for(const locale of ['en','fr','es']){const messages=require(`../messages/${locale}.json`);assert.deepEqual(Object.keys(messages),Object.keys(de));for(const value of Object.values(messages))assert.ok(value.length>0);}
// Every user-facing structured-content string must have a translation.
const moduleSource=ts.transpileModule(fs.readFileSync('content/site.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;const exportsObj={};new Function('exports',moduleSource)(exportsObj);const site=exportsObj.site;
const strings=[site.intro,...site.services.flatMap(s=>[s.title,s.tag,s.description,s.alt]),...site.process.flat(),...site.additional.flatMap(g=>[g.title,...g.items])];for(const value of strings)assert.ok(keys[value],`Missing translation: ${value}`);
console.log('PASS: translation completeness for all 4 languages and structured service content');
