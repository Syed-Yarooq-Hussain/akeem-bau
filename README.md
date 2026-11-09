# Williams Baukonzept — homepage milestone

Next.js App Router / TypeScript / Tailwind CSS / Motion / React Hook Form / Zod. next-intl is installed for phase 5.

## Run

    npm install
    npm run dev

Open http://localhost:3000. Production verification: `npm run build`. Type checking: `npm run typecheck`.

## Scope

Phases 1–3: design planning, foundation and German responsive homepage. See docs/creative-direction.md for architecture, missing assets and remaining phases. No deployment performed.

The configurable name and logo path are in content/site.ts. A temporary text identifier is shown because the actual logo was not attached. It is not a recreation of the supplied logo. All photography is illustrative and externally sourced; none is presented as completed work. No unsupported company credentials, statistics or testimonials are used.

The inquiry form validates locally only. It has no delivery endpoint or active file input. It never claims submission success. Phase 5 must implement server-side validation, safe storage, file signatures/size/type limits, malware scanning, rate limiting/spam protection and verified delivery before enabling uploads or sending. Legal content is explicitly incomplete; preview metadata prevents indexing.

Next: distinct service/detail routes, English routing via next-intl, approved legal/contact/project content, secure delivery/upload backend and launch SEO. Space Grotesk and Inter are served locally through Fontsource. Replace external images with approved local photography before launch.
