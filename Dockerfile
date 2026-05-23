# syntax=docker/dockerfile:1.7

# ── Builder stage ────────────────────────────────────────────────────────────
FROM oven/bun:1.3.14-slim AS builder

WORKDIR /app

# Copy root manifests first for better layer caching
COPY package.json bun.lock ./

# Copy workspace package manifests (required for bun install to resolve workspaces)
COPY packages/config/package.json packages/config/
COPY packages/env/package.json packages/env/
COPY packages/db/package.json packages/db/
COPY packages/auth/package.json packages/auth/
COPY packages/api/package.json packages/api/
COPY packages/ui/package.json packages/ui/
COPY apps/web/package.json apps/web/

# Install all dependencies including workspace links
RUN --mount=type=cache,target=/root/.bun/install/cache \
	bun install

# Copy source code
COPY packages/config packages/config
COPY packages/env packages/env
COPY packages/db packages/db
COPY packages/auth packages/auth
COPY packages/api packages/api
COPY packages/ui packages/ui
COPY apps/web apps/web

# Build the web application
ENV NODE_ENV=production
WORKDIR /app/apps/web
RUN bun run build

# ── Runtime stage ────────────────────────────────────────────────────────────
FROM oven/bun:1.3.14-slim AS runtime

WORKDIR /app/apps/web

# Copy the built output (client + server bundles)
COPY --from=builder /app/apps/web/dist ./dist

# Copy workspace root node_modules (includes .bun cache and hoisted deps)
COPY --from=builder /app/node_modules /app/node_modules

# Copy app-local node_modules (symlinks into .bun cache)
COPY --from=builder /app/apps/web/node_modules ./node_modules

# Copy package.json files for metadata and workspace resolution
COPY --from=builder /app/apps/web/package.json ./package.json
COPY --from=builder /app/package.json /app/package.json

# Create a lightweight server entrypoint that starts the Nitro SSR server
RUN echo 'import server from "./dist/server/server.js"; \
const port = Number.parseInt(process.env.PORT || "3000", 10); \
async function handleRequest(request) { \
  const result = await server.fetch(request); \
  if (result instanceof Response) return result; \
  return new Response(result.body, { status: result.status, statusText: result.statusText, headers: result.headers }); \
} \
Bun.serve({ fetch: handleRequest, port }); \
console.log(`Server running on port ${port}`);' > server.mjs

# Runtime configuration
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["bun", "server.mjs"]
