# forrestzhong.com

Personal blog built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/), based on the [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.

## Tech Stack

- **Framework:** Next.js (App Router, React Server Components)
- **Styling:** Tailwind CSS
- **Content:** MDX via Contentlayer
- **Language:** TypeScript
- **Search:** KBar
- **Comments:** Giscus

## Getting Started

```bash
# Install dependencies
yarn

# Start development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
yarn build
```

## Adding Blog Posts

Create a new `.mdx` file in `data/blog/`:

```mdx
---
title: 'My Post Title'
date: '2024-01-01'
tags: ['tag1', 'tag2']
draft: false
summary: 'A brief summary of the post.'
---

Your content here...
```

## Project Structure

```
data/              # Site content and configuration
  blog/            # Blog posts (MDX)
  authors/         # Author profiles
  siteMetadata.js  # Site-wide configuration
  headerNavLinks.ts
  projectsData.ts
layouts/           # Page layout components
components/        # Reusable UI components
css/               # Stylesheets
public/            # Static assets
app/               # Next.js App Router pages
```

## Credits

- Template: [tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) by [Timothy Lin](https://github.com/timlrx)

## License

- **Blog posts and documentation** (`data/blog/`, `data/authors/`): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code**: [MIT License](./LICENSE)
