# Marketing Site

The public LeafLedger marketing site: a Next.js site presenting the full
product feature catalog, compliance positioning, and pricing to attract signups
ahead of the real product build.

This is Phase 1 (marketing/sales site). It has no live backend or authentication.
The one dynamic piece is the contact form, which posts leads to a Google Sheet
via a server-side API route (`/api/contact`).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first config, see `src/app/globals.css`)
- shadcn/ui-style components under `src/components/ui`, hand-written from Radix
  primitives rather than pulled via the `shadcn` CLI, since this environment
  blocks network access to `ui.shadcn.com`. `components.json` is still present
  so the CLI (`npx shadcn@latest add <component>`) can be used normally in an
  environment with network access.
- react-hook-form + zod for the contact form
- google-auth-library for the contact form's Google Sheets integration

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

## Contact form -> Google Sheets

Contact form submissions (`src/app/api/contact/route.ts`) are appended as a row
to a Google Sheet using a service account, not a user's personal Google login.
Setup, done once by whoever owns the target Google account:

1. Create (or pick) a Google Sheet to receive leads. Add a header row, for
   example: `Submitted At | Name | Email | Phone | Business | Store Count | Plan | Message`.
   Note the sheet ID from its URL: `docs.google.com/spreadsheets/d/<SHEET_ID>/edit`.
2. In the [Google Cloud Console](https://console.cloud.google.com/), create a
   project (or use an existing one), then enable the **Google Sheets API**.
3. Create a **Service Account** (IAM & Admin -> Service Accounts), then create
   a JSON key for it and download it. The JSON contains `client_email` and
   `private_key`.
4. Open the target Sheet, click Share, and add the service account's
   `client_email` as an **Editor**. Without this step, writes will fail with a
   permission error even if the API credentials are correct.
5. Copy `.env.example` to `.env.local` and fill in:
   - `GOOGLE_SHEET_ID`: the sheet ID from step 1
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: the `client_email` from the JSON key
   - `GOOGLE_PRIVATE_KEY`: the `private_key` from the JSON key, kept as one
     quoted string with literal `\n` sequences (most hosts, including Vercel,
     want it entered this way; the code un-escapes them at runtime)
   - `GOOGLE_SHEET_RANGE` (optional): defaults to `Sheet1!A:H`, change the
     sheet/tab name if yours differs
6. When deploying (Vercel or otherwise), set the same environment variables in
   the host's dashboard. `.env.local` never leaves your machine.

If these variables aren't set, the API route logs a warning and skips the
sheet write, but still returns success to the visitor. The submitted data is
still visible in the server console log in that case, so nothing is silently
lost during local development.

## Deploying to AWS Amplify

This app has a server-side API route (`/api/contact`), so it needs Amplify's
SSR compute, not static hosting. Amplify's manual/drag-and-drop deploy only
supports static sites, so deploy via a Git-connected app instead:

1. In the Amplify console, create a new app and connect this GitHub repo.
2. Amplify will find `amplify.yml` at the repo root, which points it at the
   `marketing-site` subdirectory (this repo is a monorepo — `marketing-site`
   sits alongside the old prototype in `backend/`/`frontend/`).
3. In the Amplify app's **Environment variables**, set the same values as
   `.env.local` (see below): `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`,
   `GOOGLE_PRIVATE_KEY`, and optionally `GOOGLE_SHEET_RANGE`. Nothing secret
   should ever be committed to the repo.
4. Push to the connected branch (or trigger a build manually) — Amplify runs
   `npm ci && npm run build` and deploys the result, including the working
   contact form.

## Content guardrails

- Feature pages use coded UI mockups (`src/components/features/mockups/`),
  not real product screenshots, since Phase 2 (the real product) hasn't been
  built yet. All mockups share one fictional demo store ("Discreet420",
  `src/lib/constants/demo-data.ts`) so data stays consistent across screens.
- No fake testimonials, customer logos, ratings, or review counts.
- All feature categories are presented as live, current offerings. There is
  no separate "coming soon" or roadmap section on this site.
