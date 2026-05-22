# syntax=docker/dockerfile:1

# Use the official Bun image
FROM oven/bun:1.3.14 AS base
WORKDIR /app

# Stage 1: Install dependencies
FROM base AS install
# Copy all package.json files to leverage caching for monorepo workspaces
COPY package.json bun.lock ./
COPY apps/web/package.json ./apps/web/
COPY packages/api/package.json ./packages/api/
COPY packages/auth/package.json ./packages/auth/
COPY packages/config/package.json ./packages/config/
COPY packages/db/package.json ./packages/db/
COPY packages/env/package.json ./packages/env/
COPY packages/ui/package.json ./packages/ui/

# Install dependencies including devDependencies for the build
RUN bun install

# Stage 2: Build the application
FROM base AS builder
COPY --from=install /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
# For a landing page, we likely don't need real secrets at build time
ENV NODE_ENV=production

# Build the web application
# We target the web app specifically to avoid unnecessary work
RUN bun run build

# Stage 3: Production runner
FROM base AS runner
WORKDIR /app

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

# Copy the built application from the builder stage
# Nitro build output for TanStack Start is in apps/web/.output
COPY --from=builder /app/apps/web/.output ./apps/web/.output

# Expose the port
EXPOSE 3000

# Command to run the application using Bun
CMD ["bun", "apps/web/.output/server/index.mjs"]
