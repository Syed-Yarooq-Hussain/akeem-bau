# Google indexing

The production origin is https://www.wbrgmbh.com. SITE_URL optionally overrides it at build time. All 12 locale pages use index/follow, self-referencing canonical URLs and reciprocal hreflang alternatives, with German as x-default. /robots.txt allows crawling and points to /sitemap.xml, which lists the 12 pages. Rebuild and deploy when changing the public origin.

GOOGLE_SITE_VERIFICATION optionally accepts the content value of the HTML verification tag supplied by Google Search Console. Set it in the hosting environment and redeploy before verifying ownership.

After deploying these changes, verify the https://www.wbrgmbh.com/ property in Google Search Console, submit https://www.wbrgmbh.com/sitemap.xml under Sitemaps, and inspect https://www.wbrgmbh.com/de with URL Inspection → Test live URL → Request indexing. These account actions have not been performed by this change. Google determines when and whether pages are indexed; submission does not guarantee immediate search visibility.

Run npm run build and start production on port 3101, then node scripts/check-seo.cjs. QA_BASE_URL overrides the local server URL. This verifies robots.txt, the sitemap, index directives, canonicals and language alternatives for every locale.

Reference: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
