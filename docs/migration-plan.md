# Migration Implementation Plan

## Checklist

- [ ] Replace project metadata with a modern `package.json` using `pnpm`.
- [ ] Add TanStack Start, Vite, React, TypeScript, Tailwind, TanStack Query, shadcn Base UI dependencies, and Netlify integration.
- [ ] Add TypeScript, Vite, Tailwind, PostCSS, Netlify, and shadcn configuration.
- [ ] Preserve assets under `src/assets`.
- [ ] Replace Gatsby source files with TanStack Start route files.
- [ ] Build a typed WordPress REST client.
- [ ] Build layout, header, nav, footer, hero, social links, and content rendering components.
- [ ] Recreate homepage, shows index, show detail, post detail, page detail, and 404 routes.
- [ ] Add Netlify form support for the contact page.
- [ ] Run `pnpm install`, `pnpm typecheck`, and `pnpm build`.
- [ ] Start the local dev server and inspect pages in the browser.

## Notes

- Do not run `npm install`.
- Do not reuse Gatsby runtime code.
- Use `https://cheatcodes.io/cjp` as the default WordPress source.
- If WordPress has no posts, `/post/$slug` should show not found rather than failing.
