# Copilot Instructions for ElPuas.com

## Architecture Overview

This is an **Astro 5 + DatoCMS** static site where all content flows through GraphQL queries at build time. Zero local markdown files - everything is CMS-managed.

### Key Components
- **Pages** (`src/pages/`): Route handlers that fetch DatoCMS data via GraphQL
- **Layouts** (`src/layouts/BaseLayout.astro`): Shared shell that fetches navigation data
- **Components** (`src/components/`): Astro components designed for DatoCMS data structures
- **Queries** (`src/queries/`): GraphQL query constants (ALL_CAPS naming)
- **Utils** (`src/utils/fetch-graphql.js`): Central API client with error handling

## Essential Patterns

### Content Fetching (Build-time Only)
```javascript
// Always use this pattern in pages
import { fetchGraphQL } from '../utils/fetch-graphql';
import { FRONTPAGE_QUERY } from '../queries/frontpage';

const data = await fetchGraphQL(FRONTPAGE_QUERY);
```

### DatoCMS Component Integration
- Props match DatoCMS field structures: `{ _modelApiKey, content: { value }, image: { responsiveImage } }`
- Always use `@datocms/astro/Image` for images, never raw `<img>`
- Use `@datocms/astro/StructuredText` for rich text content
- Transform DatoCMS data shape in page component before passing to children

### Block-based Content Rendering
```astro
// Typical page pattern
const [hero, videoHero, selectedCards] = data.frontPage.content;

// Transform for component
const heroData = {
    title: hero.heading.value,
    subtitle: hero.eyebrow,
    ctaLink: `/${hero.link.slug}`,
    heroAlign: hero.heroAlign,
};
```

## Developer Workflows

### Development
```bash
npm run dev          # Starts dev server (port 4321)
npm run build        # Static build - catches GraphQL/integration errors
npm run preview      # Preview built static site
```

### Content Management
- **Never create local markdown** - all content managed in DatoCMS
- Blog posts, pages, navigation all come from CMS
- Content models use block types: `block_paragraph`, `block_image`, `block_video_hero`

### Environment Setup
Required: `DATOCMS_API_KEY` in `.env` (local) and deployment platform
All API calls happen at build time, ensuring static generation.

## Critical Files
- `src/layouts/BaseLayout.astro`: Fetches navigation, provides page shell
- `src/utils/fetch-graphql.js`: Central API client with auth headers
- `src/queries/`: Store all GraphQL queries as named exports
- `AGENTS.md`: Comprehensive project rules and conventions (review before major changes)

## Code Conventions
- Prettier: no semicolons, tabs, single quotes
- TypeScript: strictNullChecks enabled, leverage Astro's type inference
- CSS: Component-scoped styles, custom properties, container queries
- GraphQL: Store queries in `src/queries/`, use ALL_CAPS exports

## Integration Points
- **DatoCMS**: GraphQL API with bearer token auth
- **Netlify**: Static deployment from `dist/` folder
- **Responsive Images**: DatoCMS CDN with `@datocms/astro/Image`
- **Analytics**: Partytown integration for third-party scripts