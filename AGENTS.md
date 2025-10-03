# Agent Rules

Owner: ElPuas Digital Crafts  
Project: ELPUAS.COM (Astro site on Netlify)

## Mission & Scope
- Enable assistants to ship Astro features, content integrations, and documentation updates without breaking the DatoCMS driven site
- Protect accessibility, performance, and editorial integrity across every change
- Keep workflows transparent by documenting decisions and logging each run

## Detected Tech Stack
- Framework: Astro 5 with islands, Partytown, MDX, React support
- Languages: Astro components, TypeScript configs, JavaScript ES modules, JSX when React is needed
- Styling: Vanilla CSS with nesting, container queries, custom properties, typography loaded via `@font-face`
- Content: Remote GraphQL data from DatoCMS, Structured Text rendering, no local Markdown
- Hosting: Netlify builds from `npm run build`, publishes `/dist`

## Repository Map
- `astro.config.mjs`: Site URL plus MDX, sitemap, React, Partytown integrations
- `package.json`: npm scripts (`dev`, `build`, `preview`, `astro`) and runtime deps (@astrojs packages, React, DatoCMS SDK)
- `src/consts.ts`: Shared metadata strings
- `src/components/`: UI building blocks (BaseHead, Hero variants, Article lists, navigation)
- `src/layouts/`: `BaseLayout` shell with GraphQL navigation fetch, blog layout
- `src/pages/`: Route definitions; fetch DatoCMS content at build time
- `src/queries/`: Central GraphQL query strings grouped by feature
- `src/utils/`: `fetchGraphQL` helper and Structured Text renderer
- `src/scripts/menu.js`: Handles mobile nav toggle
- `src/styles/`: Global tokens and typography scales
- `public/`: Static assets, fonts, AI context file `llms.txt`
- `.cursor/rules/`: Prior AI guidance on content structure, deployment, and component patterns
- `.env`: Local DatoCMS token (never commit real keys)

## Coding Standards
- Format with Prettier settings: `semi: false`, `useTabs: true`, `singleQuote: true`
- Stick to ES modules, `const`/`let` only, no `var`
- TypeScript config enforces `strictNullChecks`; leverage Astro's inferred types
- Component props mirror DatoCMS schema fields; keep naming consistent with `_modelApiKey`
- Keep CSS modular within components or `src/styles`, using custom properties and container queries instead of utility frameworks
- Add comments sparingly for non obvious logic, in English only
- Accessibility targets WCAG 2.1 AA: semantic tags, labelled controls, focus-visible styling

## File & Content Conventions
- Never add local Markdown posts; all content comes from DatoCMS via GraphQL queries stored in `src/queries`
- Keep new queries collocated in `src/queries` and export named constants in ALL_CAPS
- Use `fetchGraphQL` for API calls; include graceful error handling at call sites
- Render Structured Text with `@datocms/astro/StructuredText` and responsive media with `@datocms/astro/Image`
- Place reusable Astro components under `src/components`; name files in PascalCase with `.astro`
- Static assets live in `public/`; fonts load through `BaseHead`
- Update `public/llms.txt` when context for assistants changes

## Commit & Branching
- Preferred branch naming: feature or chore prefixes such as `chore/agent-md`
- Follow Conventional Commits (`type(scope): summary`) for messages
- Keep commits focused; bundle related files and mention DatoCMS model impacts in body if needed

## Tooling
- Package manager: npm (lockfile present)
- Astro CLI: `npm run astro` for scaffolding or upgrades
- No dedicated lint script; run `npm run build` to surface many integration issues
- Partytown handles analytics scripts; respect existing config when modifying GA or third party code
- Optional IDE helpers stored in `.vscode` and `.cursor`

## Build & Deploy (Netlify)
- Local dev: `npm install` then `npm run dev` (defaults to port 4321)
- Production build: `npm run build`, outputs to `dist`
- Preview: `npm run preview` to serve the built site
- Netlify settings: build command `npm run build`, publish directory `dist`, Node 18 per existing docs
- Required environment variables: `DATOCMS_API_KEY` for all build targets (available locally via `.env`, configure in Netlify UI)
- Deployment uses static generation; ensure new data dependencies resolve at build time

## Testing & QA
- No automated tests at present; rely on manual verification
- Before shipping, run `npm run build` to catch Astro or GraphQL errors
- Validate critical flows: navigation toggle, video embeds, forms (`lets-talk`), blog listing generation
- Check Lighthouse or browser devtools for regressions in performance and accessibility when changing layout or scripts
- Confirm GraphQL schema assumptions against DatoCMS if queries change

## Security & Privacy
- Treat `DATOCMS_API_KEY` as secret; never hardcode or log values
- Avoid exposing analytics IDs in source comments beyond existing references
- Scrub user supplied data before rendering if adding interactive features
- Remove debug logs before committing; Astro builds include everything in source

## Tasks Playbook
- **New component from DatoCMS block**: mirror `_modelApiKey`, add query fields in `src/queries`, create component in `src/components`, render inside relevant page with prop validation
- **Update styling**: adjust tokens in `src/styles` if global, otherwise scope CSS inside component `<style>` blocks with container queries where useful
- **Add navigation item**: extend DatoCMS navigation model; component already maps entries, so only adjust rendering if new fields are required
- **Embed external media**: sanitize URLs, set `loading="lazy"`, configure `allow` attributes, and ensure responsive wrapper similar to `VideoHero`
- **Content updates for assistants**: modify `public/llms.txt` and reflect any new automation guidance in this file and `.cursor/rules`

## Review Checklist
- Code matches Prettier settings and avoids stray semicolons
- No local content drift: all data flows through GraphQL utilities
- Components remain accessible (landmarks, focus states, aria labels, keyboard support)
- CSS changes respect design tokens and do not break dark text on light backgrounds
- Build passes locally; include output from `npm run build` if it fails
- Secrets remain outside commits; `.env` stays ignored
- Updated documentation and logs accompany functional changes

## Logs & Telemetry
- Each assistant run must create `.logs/YYYY-MM-DD-repo-audit-and-agent-md.md` (or similar task name) summarizing actions, key diffs, and next steps
- Keep logs concise: outline commands executed, files touched, outstanding TODOs
- Store logs in Git unless policy states otherwise; they track context for future work

## Appendix
- Key references: Astro docs, DatoCMS docs, Netlify docs, MDN, Conventional Commits
- Existing rule sets live under `.cursor/rules/`; consult alongside this guide for deep dives
- Contact: ElPuas Digital Crafts maintainers via project repository channels
