# Gatsby to TanStack Start Migration Spec

Date: 2026-05-19

## Goal

Rebuild the Carl John Palmer site on a modern React stack while preserving the existing public routes, WordPress content source, and visual identity.

## Source Site Findings

- Legacy stack: Gatsby 2, React 16, styled-components, Gatsby WordPress source plugin.
- New WordPress base: `https://cheatcodes.io/cjp/`.
- WordPress REST API is live and exposes:
  - Pages: `/wp-json/wp/v2/pages`
  - Posts: `/wp-json/wp/v2/posts`
  - Shows custom post type: `/wp-json/wp/v2/show`
  - Media: `/wp-json/wp/v2/media`
- Current content:
  - Pages: `about`, `contact`, `schedule`
  - Posts: none returned
  - Shows: `cults-coffee-conversation`, `the-great-inquisition`, `vlog`

## Approved Approach

Use a clean rebuild. Remove Gatsby, Gatsby plugins, styled-components, old lockfile, and old page/template/component code. Preserve only assets and brand/content behavior that matter for a 1:1 recreation.

## Stack

- TanStack Start
- TypeScript
- React
- Tailwind CSS
- shadcn/ui using Base UI primitives, not Radix
- TanStack Query
- Netlify hosting support
- `pnpm` as the package manager

## Routes

- `/` renders the homepage hero using the preserved portrait, logo, fog effect, social links, and original headline.
- `/shows` lists all WordPress `show` entries as image-backed cards.
- `/show/$slug` renders a single show from WordPress.
- `/post/$slug` renders a single post when WordPress posts exist.
- `/$slug` renders WordPress pages such as `about`, `schedule`, and `contact`.
- `notFound` renders a simple branded 404.

## Data Model

The app reads from `VITE_WORDPRESS_API_URL`, defaulting to `https://cheatcodes.io/cjp`. WordPress REST helpers normalize titles, excerpts, content HTML, featured media IDs, and media URLs. TanStack Query handles client cache and route loaders prefetch the required content.

## UI Requirements

- Preserve the old purple-to-teal gradient, fog overlay, logo, and portrait-led home hero.
- Preserve the angled inner-page hero shape.
- Preserve Gutenberg content rendering, including WordPress column/image blocks.
- Replace Bootstrap-like utility classes and styled-components with Tailwind utilities and component CSS.
- Use shadcn Base UI components where useful, especially buttons/cards/forms, while avoiding overbuilt UI.
- Keep the contact form Netlify-compatible.

## Deployment

Add Netlify configuration for TanStack Start. The expected build command is `pnpm build`; deployment output follows the TanStack Start Netlify integration.
