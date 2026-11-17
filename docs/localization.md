# Twelve-language application

Routes: /de, /en, /tr, /pl, /ro, /sq, /es, /fr, /el, /uk, /bg, /it. The root redirects to /de; unsupported locales return 404. German is the default.

Header and footer provide native language selectors with native language names. Switching preserves the query string and section hash. The URL retains the selected language across reloads and sharing. Changing language reloads the page; unsent form input is not persisted.

All page copy, services, form labels and validation, accessibility labels, WhatsApp messages, brand descriptor and metadata have translations. Company names, people's names and the postal address stay unchanged. Company details appear in the contact section, footer and legal notice: C. Agbanyo (managing director), I. Bericha (construction management and contact), Borselstraße 20, 22765 Altona.

Translation sources: messages/translations.txt for the original German/English/French/Spanish catalogues; messages/{tr,pl,ro,sq,el,uk,bg,it}.txt for the additional languages, one line per original message in the same order; messages/company.json for company labels and metadata. Run node scripts/messages.cjs to regenerate all JSON catalogues. The generator rejects incorrect line counts. New text requires entries in every language. Native-speaker editorial review has not been performed.

Validation: npm run typecheck; npm run build; node scripts/check-locales.cjs. Start production on port 3100 and run node scripts/check-locale-routes.cjs for all 12 HTTP routes, localized content/metadata, company details, selectors, default redirect and unsupported locale. QA_BASE_URL can override the server URL. Browser interaction and visual testing have not been performed.

The existing inquiry form is still a local validation preview without server delivery. Registration details and the full privacy notice remain pending. No deployment performed.
