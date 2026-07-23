# Marketing Site

The public LeafLedger marketing site: a static Next.js site presenting the full
product feature catalog, compliance positioning, and pricing to attract signups
ahead of the real product build.

This is Phase 1 (marketing/sales site). It has no live backend or authentication;
the only dynamic piece is the contact form, which posts to a stub API route.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config, see `src/app/globals.css`)
- shadcn/ui-style components under `src/components/ui` — hand-written from Radix
  primitives rather than pulled via the `shadcn` CLI, since this environment
  blocks network access to `ui.shadcn.com`. `components.json` is still present
  so the CLI (`npx shadcn@latest add <component>`) can be used normally in an
  environment with network access.
- react-hook-form + zod for the contact form

## Run locally

```bash
cd marketing-site
npm install
npm run dev
```

Open <http://localhost:3000>.

`npm run build` produces a production build; `npm run lint` runs ESLint.

## Where to edit copy

Page and component copy lives as typed data in `src/lib/constants/`:

- `features.ts` — the feature categories (used on both the home page's
  condensed grid and the full `/features` page)
- `pricing.ts` — pricing tiers, add-ons, and FAQ (used on both the home page
  teaser and the full `/pricing` page)
- `nav.ts` — header/footer navigation links

Editing these files updates every page that renders them, so copy can't drift
between the condensed and full versions.

## Content guardrails

- No fabricated product screenshots. Nothing is built yet, so features are
  illustrated with icons/diagrams instead.
- No fake testimonials or customer logos.
- All feature categories are presented as live, current offerings. There is
  no separate "coming soon" or roadmap section on this site.
