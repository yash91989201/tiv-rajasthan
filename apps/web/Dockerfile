# syntax=docker/dockerfile:1.7

FROM oven/bun:1.4.5-slim AS builder

WORKDIR /app

# Copy root manifests first for better cache reuse
COPY package.json bun.lock bunfig.toml ./

# Copy the workspace manifests needed to build the web app
COPY packages/config/package.json packages/config/
COPY packages/ui/package.json packages/ui/
COPY apps/web/package.json apps/web/

# Install all deps needed to build (including dev deps)
RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install --frozen-lockfile

# Tailwind infers scan roots from .gitignore; without them it would scan dist
COPY .gitignore ./
COPY apps/web/.gitignore apps/web/
COPY packages/config/tsconfig.base.json packages/config/
COPY packages/ui/src packages/ui/src
COPY packages/ui/tsconfig.json packages/ui/
COPY packages/ui/postcss.config.mjs packages/ui/
COPY apps/web/src apps/web/src
COPY apps/web/public apps/web/public
COPY apps/web/vite.config.ts apps/web/tsconfig.json apps/web/

ENV NODE_ENV=production

# Build the static site
WORKDIR /app/apps/web
RUN bun run build

FROM nginx:stable-alpine-slim AS runtime

COPY --from=builder /app/apps/web/dist/client/ /srv/site/
COPY apps/web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3001

# Interval: 30s, timeout: 5s, start-period: 10s, retries: 3.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:3001/health
