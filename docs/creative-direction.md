# Creative direction & implementation plan

## 1. Repository audit
The starting workspace is empty: no framework, reusable components, logo, photos or existing content. Build with Next.js App Router, TypeScript and Tailwind CSS. Motion provides restrained entrance transitions. Structured content separates copy from rendering. next-intl, React Hook Form and Zod are installed for localization and inquiry implementation.

## 2. Creative direction
Industrial editorial × architectural minimalism. Oversized tightly tracked type, precise rules, small numbered labels, deep teal and warm stone surfaces. Gold marks selected words and directional details. Photography is dominant; asymmetric whitespace provides the architecture. No invented metrics, references or credentials.

System: teal #0B252B, gold #C2A16A, stone #F5F3EE, graphite #1B2022. 1440px content boundary, 12-column desktop grid, 24–80px responsive gutters, 96–160px section rhythm. Square edges. Accessible focus rings. Reduced-motion support.

## 3. Homepage section plan
1. Transparent navigation over cinematic full-height construction image; compact sticky navigation after scrolling.
2. Editorial introduction: large statement, narrow supporting copy, architectural detail.
3. Services: four large numbered photographic panels in a staggered two-column composition.
4. Expertise: photograph and a concise three-step coordination narrative.
5. Specialist services: high-contrast horizontal feature with qualification caveat.
6. References: explicitly marked pending client material, never stock projects.
7. Additional services: three compact grouped lists.
8. Inquiry: dark teal, split title and accessible preview form.
9. Footer: configurable brand, navigation, location and unconfirmed-contact notice.

## 4. Component architecture
app/layout.tsx: document metadata and global styling.
app/page.tsx: homepage composition.
components/navigation.tsx: responsive navigation, dropdown, scroll state.
components/homepage.tsx: editorial homepage and reusable service panels.
components/inquiry-form.tsx: validated preview form, honest unsent state.
content/site.ts: configurable brand, images, services and copy.
app/globals.css: design tokens, typography, responsive layouts, motion preferences.

## 5. Missing client assets and information
- Original logo file (brief references WILLIAMS B&R GmbH — BAU & RÜCKBAU); not attached. Do not recreate it.
- Confirmed legal/display name and relationship between the two brands.
- Licensed company photography and approved project references.
- Address, telephone, email, managing director, register and VAT details.
- Verified specialist qualifications and permits, service scope, recruitment openings.
- Domain, privacy controller, hosting/provider decisions, inquiry recipient, retention policy and secure upload requirements.
- Approved English copy and legal texts.
Current photos are external illustrative Unsplash images, not company projects. Replace with approved local assets before launch.

## 6. Phased delivery
1. Audit (complete): empty repository and asset gaps recorded.
2. Foundation: tokens, content model, navigation and architecture.
3. Homepage: responsive sections, accessible interactions and inquiry preview; validate production build and TypeScript.
4. Detail routes: about, six distinct service pages, references, careers, contact and legal pages; corresponding English routes.
5. next-intl routing and translation; React Hook Form/Zod server validation, upload signatures/limits, malware scanning, spam controls, confirmed delivery; canonical, sitemap, robots and verified structured data.
6. Browser/device and assistive-technology review; performance, delivery and security testing; launch after client content approval.

This delivery intentionally stops at phases 1–3. Homepage links use meaningful on-page destinations; detail pages, English localization and legal content remain subsequent phases. No publication is performed for this incomplete development milestone.
