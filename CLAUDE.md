# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
# Install dependencies (must use pnpm)
pnpm install

# Run all apps in development mode
turbo dev

# Run a specific app
turbo dev --filter=workbook    # Port 3004
turbo dev --filter=dictation   # Port 3003
turbo dev --filter=web         # Port 3000
turbo dev --filter=admin       # Port 3002
turbo dev --filter=docs        # Port 3001

# Build all apps
turbo build

# Lint all packages
turbo lint

# Type check all packages
turbo check-types

# Format code
pnpm format

# Deploy Convex backend (from packages/db)
cd packages/db && pnpm deploy
```

## Architecture Overview

### Monorepo Structure
This is a Turborepo monorepo using pnpm workspaces with 5 Next.js apps and 7 shared packages.

### Apps
- **workbook** - Educational content platform with JSON-driven dynamic content rendering
- **dictation** - Voice/dictation learning app with 3D visualizations (Three.js/R3F)
- **web** - Main public-facing app
- **admin** - Administrative dashboard
- **docs** - Documentation site

### Shared Packages
- `@repo/ui` - Component library (Radix UI + Tailwind CSS + shadcn patterns)
- `@repo/db` - Convex serverless backend with schema and mutations
- `@repo/auth` - Clerk authentication components
- `@repo/analytics` - PostHog analytics wrapper
- `@repo/i18n` - Internationalization utilities
- `@repo/eslint-config` - Shared ESLint configuration
- `@repo/typescript-config` - Shared TypeScript configuration

## Workbook App Architecture

### JSON-Driven Content System
The workbook app uses a block-based content system where educational modules are defined in JSON files:

- **Content Location**: `apps/workbook/Data/Modules/{subject}/{chapter}/{module}.json`
- **Block Types**: hero, grid_cards, callout, section, quiz, simulation, enrichment, scientific_table, paragraph, span, list, highlight_box, icon_flow
- **Nested Blocks**: Many block types (callout, section, grid_cards) support recursive nested content blocks

### Block Rendering Pipeline
1. JSON content loaded from `Data/Modules/`
2. `ContentRenderer.tsx` receives blocks array
3. `BlockRenderer.tsx` maps block types to React components via `BLOCK_REGISTRY`
4. Blocks recursively render nested content via `renderBlock` function passed as prop

### Theme System
`apps/workbook/lib/ThemeRegistry.ts` defines color variants (primary-blue, primary-green, amber-gradient, etc.) that map to Tailwind classes. Blocks reference these by variant name.

### Merge Tags
Content supports inline formatting via merge tags: `{b}bold{/b}`, enabling rich text in JSON strings.

### Route Structure
```
/[subject]/[chapterId]/[moduleId]  → Dynamic module page
/[subject]/[chapterId]/summary     → Chapter summary
/[subject]                         → Subject overview
```

## Convex Backend

The database layer uses Convex (serverless backend-as-a-service):

- Schema defined in `packages/db/convex/schema.ts`
- Tables: users, notifications, dictation_games
- Authentication syncs with Clerk via `clerkId`
- Run `pnpm dev` in packages/db to start Convex dev server

## UI Package Exports

Import patterns for @repo/ui:
```typescript
import { Button } from "@repo/ui/components/ui/button"
import { cn } from "@repo/ui/lib/utils"
```

## Key Technologies

- **Frontend**: Next.js 16.1.x, React 19, TypeScript 5.9
- **Styling**: Tailwind CSS v4, tailwind-merge, class-variance-authority
- **UI Primitives**: Radix UI
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei (dictation app)
- **Animation**: Framer Motion
- **Backend**: Convex
- **Auth**: Clerk
- **AI**: Google Generative AI SDK, OpenAI SDK
