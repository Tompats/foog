# Repository Guidelines

## Project Structure & Module Organization
Astro source lives in `src/`, with route entry points inside `src/pages/` (/, /trips, /history, etc.) and reusable UI in `src/components/` plus shared wrappers in `src/layouts/`. Typed data objects (trips, leadership, metadata) stay in `src/data/` alongside `src/types.ts`, while helper utilities go in `src/utils/`. Tailwind configuration is centralized in `src/styles/global.css`, and raw assets reside in `src/assets/` or `public/`. The production build writes to `dist/`; keep that folder ignored in Git except when verifying GitHub Pages output locally.

## Build, Test, and Development Commands
- `npm run dev`: start Astro’s dev server on http://localhost:4321 with hot reload; ideal for validating data-driven pages while editing Markdown or `.astro` files.
- `npm run build`: produce the static site into `dist/`, enforcing Astro’s type checks and catching invalid imports—run it before every PR.
- `npm run preview`: serve the latest build to validate routing, sitemaps, and localized copy exactly as GitHub Pages will display it.
- `npm run astro -- check`: optional static analysis pass for more detailed diagnostics when debugging layout imports or TypeScript definitions.

## Coding Style & Naming Conventions
Prefer TypeScript modules with explicit named exports and two-space indentation, mirroring existing files like `src/layouts/BaseLayout.astro`. Keep import ordering: framework, local data, then utilities. Use double quotes in `.astro` and `.ts` files, Tailwind utility classes grouped by layout → spacing → color, and PascalCase for component filenames (e.g., `TripCard.astro`). When extending data objects, follow the shape declared in `src/types.ts` and keep property orders consistent so diff reviews stay small.

## Testing Guidelines
There is no dedicated test suite; rely on build-time guarantees. Run `npm run build` to ensure Astro compiles templates, type-checks data modules, and generates optimized assets. For content edits, open `npm run dev`, navigate to each affected route, and verify localized copy plus OpenGraph previews defined in `src/data/site`. Before merging, run `npm run preview` to smoke-test navigation, structured data, and form actions in a production-like environment.

## Commit & Pull Request Guidelines
Recent commits (e.g., `Fix nav bar`, `Images fix`) are short, capitalized imperatives. Continue that pattern, keeping the subject under ~60 characters and referencing scope when possible (`Update trips data`). Pull requests should describe the change, list any new data files, link related issues, and include before/after screenshots for visual tweaks. Always mention the verification commands you ran (`npm run build`, `npm run preview`) so reviewers can reproduce the checks.
