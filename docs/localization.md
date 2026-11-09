# Four-language homepage

Routes: /de (default), /en, /fr, /es. / redirects to /de. Unsupported locale segments return 404. Locale-specific root layouts set the HTML language and metadata. next-intl provides messages to all homepage components. Header and footer language links preserve the active section hash; modifier-key clicks retain normal link behavior. Reloading or sharing the URL preserves the language. Brand name and original German brand tagline remain unchanged.

Translation sources: messages/translations.txt, pipe-separated German/English/French/Spanish. Run node scripts/messages.cjs after edits to regenerate JSON catalogues and keys. Run node scripts/check-locales.cjs for catalogue and structured-service-content coverage. Form schema values are stable across languages; labels and validation errors are translated. WhatsApp links use a localized prefilled message. No automatic translation service or tracker is used.

Language navigation reloads the page; unsent form input is not persisted. Form remains a preview without server delivery. Existing legal placeholders are translated but remain incomplete.

Verified: production build and TypeScript passed; catalogue/structured-content coverage passed; all four HTTP routes returned 200 with matching document language, translated hero/form/service copy and working destination URLs; default / redirected to /de; unsupported /it returned 404. Browser click/visual testing was not performed.
