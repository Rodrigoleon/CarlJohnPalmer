# Carl John Palmer

Modern TanStack Start rebuild of the Carl John Palmer site.

## Stack

- TanStack Start
- TypeScript
- Tailwind CSS
- Base UI primitives
- TanStack Query
- WordPress REST API as the content source
- Netlify hosting

## Development

```bash
pnpm install
pnpm dev
```

The WordPress source defaults to `https://cheatcodes.io/cjp`. Override it with:

```bash
VITE_WORDPRESS_API_URL=https://example.com/cjp pnpm dev
```

## Verification

```bash
pnpm typecheck
pnpm build
```
