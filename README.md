# ElPuas.com - Personal Website

A modern personal website built with **Astro** and **DatoCMS** as a headless CMS. All content is managed through DatoCMS and fetched via GraphQL at build time.

## 🏗️ Architecture

- **Static Site Generator**: Astro 4.x
- **Headless CMS**: DatoCMS (all content managed here)
- **Content Delivery**: GraphQL API at build time
- **Styling**: CSS with modern design patterns
- **Deployment**: Netlify with automatic builds
- **AI Integration**: LLM context files and AI-enhanced features

## 🚀 Quick Start

```sh
npm install
npm run dev
```

> **Important**: You'll need a `DATOCMS_API_KEY` environment variable to fetch content.

## 📁 Project Structure

```text
├── .cursor/rules/          # Project coding standards and AI rules
├── public/                 # Static assets (fonts, images, llms.txt)
├── src/
│   ├── components/         # Astro components for DatoCMS integration
│   ├── layouts/            # Page layouts (BaseLayout, BlogPost)
│   ├── pages/              # Route pages (index, blog, about)
│   ├── queries/            # GraphQL queries for DatoCMS
│   ├── utils/              # Utilities (fetch-graphql, content rendering)
│   └── styles/             # CSS stylesheets
├── astro.config.mjs        # Astro configuration
└── package.json
```

## 📝 Content Management

**All content is managed in DatoCMS**, not through local markdown files:

- **Blog Posts**: Created and edited in DatoCMS as Article records
- **Pages**: Homepage, About, and other pages use DatoCMS Page records  
- **Navigation**: Menu items and site structure managed in DatoCMS
- **Media**: Images and assets stored in DatoCMS with responsive delivery

> All content is now 100% managed via DatoCMS. Legacy Markdown files have been removed.

### Content Models
- `Article` - Blog posts with structured content blocks
- `Page` - Static pages (About, What I Do)
- `FrontPage` - Homepage with hero sections and featured content
- Block-based content system for flexible page building

## 🔧 Development Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |

## 🛠️ Key Technologies

- **[@datocms/astro](https://github.com/datocms/astro)** - DatoCMS integration for Astro
- **GraphQL** - Content API queries stored in `/src/queries/`
- **Responsive Images** - Automatic optimization via DatoCMS
- **Structured Text** - Rich text rendering with DatoCMS components
- **Social Sharing** - Built-in sharing components with AI enhancements

## 📋 Project Standards

This project follows specific coding standards documented in `.cursor/rules/`:

- **[DatoCMS Content Structure](.cursor/rules/datocms-content-structure.mdc)** - Content modeling and GraphQL patterns
- **[Blog Post Conventions](.cursor/rules/blog-post-conventions.mdc)** - Article rendering and SEO handling  
- **[Component Patterns](.cursor/rules/component-patterns.mdc)** - Astro component integration with DatoCMS
- **[AI Content Integration](.cursor/rules/ai-content-integration.mdc)** - LLM context and AI-enhanced features
- **[Environment & Deployment](.cursor/rules/environment-and-deployment.mdc)** - Setup and deployment configuration

## 🔑 Environment Setup

Create a `.env` file with your DatoCMS API token:

```bash
DATOCMS_API_KEY=your_datocms_api_token_here
```

For production deployment, configure the same environment variable in your hosting platform.

> Note: Netlify Forms may require a `data-netlify="true"` attribute and optional environment config for successful submission handling.

## 🚀 Deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fc29969-1705-49e5-a751-f641d646d839/deploy-status)](https://app.netlify.com/sites/elpuas/deploys)

- **Platform**: Netlify
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Auto-Deploy**: On main branch push

## 🤖 AI Integration

This project includes AI-enhanced features:

- **LLM Context**: `/public/llms.txt` provides project context for AI assistants
- **Content Enhancement**: AI-assisted meta descriptions and social sharing
- **Code Standards**: AI coding rules in `.cursor/rules/` for consistent development

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [DatoCMS Documentation](https://www.datocms.com/docs)
- [GraphQL Best Practices](https://graphql.org/learn/best-practices/)

---

**Built with ❤️ by [El Puas](https://elpuas.com) - Web Artisan & AI Enthusiast**
