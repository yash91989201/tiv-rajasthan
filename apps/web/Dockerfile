# syntax=docker/dockerfile:1.7

FROM oven/bun:1.3.14-slim AS builder

WORKDIR /app

# Copy root manifests first for better cache reuse
COPY package.json bun.lock bunfig.toml ./

# Copy ALL workspace package manifests (bun --frozen-lockfile validates all workspaces exist)
COPY packages/config/package.json packages/config/
COPY packages/env/package.json packages/env/
COPY packages/db/package.json packages/db/
COPY packages/auth/package.json packages/auth/
COPY packages/api/package.json packages/api/
COPY packages/ui/package.json packages/ui/
COPY apps/web/package.json apps/web/

# Install all deps needed to build (including dev deps)
RUN --mount=type=cache,target=/root/.bun/install/cache \
  bun install --frozen-lockfile

# @vitejs/plugin-rsc uses fs.renameSync for RSC temp output. Docker overlayfs can
# throw EXDEV for that rename, so add a copy+remove fallback inside the image.
RUN bun -e 'const fs = require("fs"), path = require("path"); const bunDir = path.join(process.cwd(), "node_modules/.bun"); const pluginDir = fs.readdirSync(bunDir).find((name) => name.startsWith("@vitejs+plugin-rsc@")); if (!pluginDir) throw new Error("@vitejs/plugin-rsc not found"); const file = path.join(bunDir, pluginDir, "node_modules/@vitejs/plugin-rsc/dist/plugin-BhzHKRFo.js"); let source = fs.readFileSync(file, "utf8"); const move = (from, to) => `try { fs.renameSync(${from}, ${to}); } catch (error) { if (error && error.code === "EXDEV") { fs.cpSync(${from}, ${to}, { recursive: true }); fs.rmSync(${from}, { recursive: true, force: true }); } else { throw error; } }`; source = source.replace("fs.renameSync(rscOutDir, tempRscOutDir);", move("rscOutDir", "tempRscOutDir")).replace("fs.renameSync(tempRscOutDir, rscOutDir);", move("tempRscOutDir", "rscOutDir")); fs.writeFileSync(file, source);'

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

FROM oven/bun:1.3.14-slim AS runtime

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

CMD ["bun", "server.ts"]
