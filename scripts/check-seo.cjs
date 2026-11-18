const assert=require('node:assert/strict');
const languages=['de','en','tr','pl','ro','sq','es','fr','el','uk','bg','it'];
const origin='https://www.wbrgmbh.com';
const base=process.env.QA_BASE_URL||'http://localhost:3101';
(async()=>{
 const robots=await fetch(`${base}/robots.txt`);assert.equal(robots.status,200);const rules=await robots.text();assert.ok(rules.includes('Allow: /'));assert.ok(rules.includes(`Sitemap: ${origin}/sitemap.xml`));
 const sitemap=await fetch(`${base}/sitemap.xml`);assert.equal(sitemap.status,200);const xml=await sitemap.text();assert.equal((xml.match(/<loc>/g)||[]).length,12);
 for(const locale of languages){assert.ok(xml.includes(`<loc>${origin}/${locale}</loc>`));const page=await fetch(`${base}/${locale}`);assert.equal(page.status,200);assert.ok(!page.headers.get('x-robots-tag')?.includes('noindex'));const html=await page.text();assert.ok(html.includes('name="robots" content="index, follow"'));assert.ok(html.includes(`rel="canonical" href="${origin}/${locale}"`));for(const language of [...languages,'x-default'])assert.ok(html.includes(`hrefLang="${language}"`));console.log(`PASS /${locale}: indexable, canonical and 13 language alternates`);}
 console.log('PASS robots.txt and 12-page multilingual sitemap');
})().catch(error=>{console.error(error);process.exitCode=1;});
