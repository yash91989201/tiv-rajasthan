# tiv-rajasthan

Marketing site for TIV Rajasthan. TanStack Start with TanStack Router, built to static HTML and served by Nginx.

## Features

- **TypeScript** - For type safety and improved developer experience
- **TanStack Start / Router** - File-based routing, prerendered at build time
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **Shared UI package** - shadcn/ui primitives live in `packages/ui`
- **Biome** - Linting and formatting
- **Nx** - Smart monorepo task orchestration and caching

## Getting Started

Install the dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Build

```bash
bun run build
```

Every public route is prerendered to `apps/web/dist/client`, one `index.html` per route. The build needs no environment variables or database.

## Deployment

`apps/web/Dockerfile` builds the site and serves `dist/client` with Nginx on port `3001`. Coolify deploys it with the repository root as build context:

- Dockerfile: `apps/web/Dockerfile`
- Proxy/container port: `3001`
- Health path: `/health`

`apps/web/nginx.conf` serves prerendered pages directly and returns `404` for unknown paths.

## UI Customization

React web apps in this stack share shadcn/ui primitives through `packages/ui`.

- Change design tokens and global styles in `packages/ui/src/styles/globals.css`
- Update shared primitives in `packages/ui/src/components/*`
- Adjust shadcn aliases or style config in `packages/ui/components.json` and `apps/web/components.json`

### Add more shared components

Run this from the project root to add more primitives to the shared UI package:

```bash
npx shadcn@latest add accordion dialog popover sheet table -c packages/ui
```

Import shared components like this:

```tsx
import { Button } from "@tiv-rajasthan/ui/components/button";
```

### Add app-specific blocks

If you want to add app-specific blocks instead of shared primitives, run the shadcn CLI from `apps/web`.

## Git Hooks and Formatting

- Format and lint fix: `bun run check`

## Project Structure

```
tiv-rajasthan/
├── apps/
│   └── web/         # Public site (React + TanStack Start, prerendered)
└── packages/
    ├── ui/          # Shared shadcn/ui components and styles
    └── config/      # Shared TypeScript config
```

## Available Scripts

- `bun run dev`: Start all applications in development mode
- `bun run build`: Build all applications
- `bun run dev:web`: Start only the web application
- `bun run check-types`: Check TypeScript types across all apps
- `bun run check`: Run Biome formatting and linting
