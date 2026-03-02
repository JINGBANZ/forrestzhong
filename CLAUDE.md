# CLAUDE.md

## Project Overview

Personal blog for Forrest Zhong, built on the tailwind-nextjs-starter-blog template.

- **Framework:** Next.js with App Router and React Server Components
- **Content:** MDX files processed by Contentlayer
- **Styling:** Tailwind CSS
- **Package Manager:** Yarn

## Key Directories

- `data/blog/` — Blog posts in MDX format
- `data/authors/` — Author profiles (default.mdx is the primary author)
- `data/siteMetadata.js` — Site-wide config (title, description, social links, analytics, comments)
- `data/headerNavLinks.ts` — Navigation menu items
- `data/projectsData.ts` — Projects page content
- `layouts/` — Page layout components (PostLayout, PostSimple, PostBanner, ListLayout)
- `components/` — Reusable UI components
- `css/` — Tailwind and custom styles
- `app/` — Next.js App Router pages and API routes
- `public/static/images/` — Static images (author avatar, blog images)

## Commands

```bash
yarn dev       # Start dev server on localhost:3000
yarn build     # Production build
yarn serve     # Serve production build locally
yarn lint      # Run ESLint
yarn format    # Format with Prettier
```

## Blog Post Frontmatter

Required fields:
- `title` — Post title
- `date` — Publication date (YYYY-MM-DD)

Optional fields:
- `tags` — Array of tags
- `summary` — Brief description
- `draft` — Set to true to exclude from production
- `authors` — Array referencing files in data/authors/
- `layout` — PostLayout (default), PostSimple, or PostBanner
- `lastmod` — Last modified date
- `images` — Featured images
- `canonicalUrl` — Original URL if cross-posted

## Configuration

- **Site metadata:** `data/siteMetadata.js` — title, author, social links, analytics, comments, search
- **Analytics:** Configured via env variables (supports Umami, Plausible, Google Analytics, etc.)
- **Comments:** Giscus (GitHub Discussions) — configure via env variables
- **Search:** KBar (client-side search) enabled by default

## License

- Blog content (data/blog/, data/authors/): CC BY 4.0
- Code: MIT License
