# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server (Next.js, Turbopack default in Next 16)
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint (flat config via `eslint-config-next`)

There is no test suite configured in this repo.

## Architecture

This is a single-page marketing site (Czech-language business site, "Ekvivalent") built with Next.js App Router, React 19, Tailwind CSS v4, and shadcn/ui.

- **`app/page.tsx`** is the entire site: it imports one top-level component per page section (`Navbar8`, `Hero238`, `Faq15`, `Services14`, `About10`, `Contact34`, `Footer5`) and lays them out in order inside anchor-tagged `<section id="...">` wrappers (`#proc-ekvivalent`, `#sluzby`, `#o-nas`, `#kontakt`) used for in-page nav links from the navbar.
- **`components/*.tsx`** (e.g. `hero238.tsx`, `about10.tsx`) are the page-section components — each is a self-contained, numbered shadcnblocks-style block (name = block type + variant number, not a semantic name). They are large, single-file, `"use client"` components combining layout, copy, and framer-motion animation variants (stagger/fadeUp patterns) defined inline at the top of the file.
- **`components/ui/*`** are shadcn/ui primitives (button, card, sheet, navigation-menu, etc.) — generated via the shadcn CLI, not hand-rolled. Prefer `npx shadcn add <component>` over writing new primitives by hand.
- **`components.json`** configures shadcn: style `base-nova`, path aliases `@/components`, `@/lib`, `@/ui`, `@/hooks`, and a private `@shadcnblocks` registry (auth via `SHADCNBLOCKS_API_KEY` env var) used to pull in the numbered section blocks.
- **`app/globals.css`** defines the Tailwind v4 theme via `@theme inline`, importing `tailwindcss`, `tw-animate-css`, and `shadcn/tailwind.css`, and maps shadcn CSS variables (colors, radii, sidebar/chart tokens) into Tailwind theme tokens. Custom keyframes (e.g. `aurora-background`) also live here.
- **`lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) used throughout components for conditional class composition.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`).
