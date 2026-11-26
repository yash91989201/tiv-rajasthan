# syntax=docker/dockerfile:1.7

FROM oven/bun:1.4.5-slim AS builder

WORKDIR /app

# Copy root manifests first for better cache reuse
COPY package.json bun.lock bunfig.toml ./

# Copy ALL workspace package manifests (bun --frozen-lockfile validates all workspaces exist)
COPY packages/config/package.json packages/config/
COPY packages/env/package.json packages/env/
COPY packages/db/package.json packages/db/
COPY packages/auth/package.json packages/auth/
COPY packages/ui/package.json packages/ui/
COPY packages/api/package.json packages/api/
COPY apps/web/package.json apps/web/

# Install all deps needed to build (including dev deps)
RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install

# Copy source
COPY packages/config packages/config
COPY packages/env packages/env
COPY packages/db packages/db
COPY packages/auth packages/auth
COPY packages/api packages/api
COPY packages/ui packages/ui
COPY apps/web apps/web

ENV NODE_ENV=production

# Build the application
WORKDIR /app/apps/web
RUN bun run build

FROM oven/bun:1.4.5-slim AS runtime

WORKDIR /app

# Install production dependencies in the runtime image instead of copying
# builder node_modules. This repo uses Bun's isolated linker, so node_modules
# entries point at Bun's install cache and are not safely copyable on their own.
COPY package.json bun.lock bunfig.toml ./
COPY packages/config/package.json packages/config/
COPY packages/env/package.json packages/env/
COPY packages/db/package.json packages/db/
COPY packages/auth/package.json packages/auth/
COPY packages/api/package.json packages/api/
COPY packages/ui/package.json packages/ui/
COPY apps/web/package.json apps/web/
RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install --production --frozen-lockfile

WORKDIR /app/apps/web

COPY --from=builder /app/apps/web/dist ./dist
COPY --from=builder /app/apps/web/server.ts ./server.ts

# Health check using Nitro's built-in /healthz endpoint.
# Interval: 30s, timeout: 5s, start-period: 10s, retries: 3.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD bun x curl -sf http://localhost:3001/healthz || exit 1

CMD ["bun", "server.ts"]
