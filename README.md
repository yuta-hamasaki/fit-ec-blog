# BLAZE Martial Arts Fitness

Next.js frontend for training videos, PFC recipes, products, and customer capture.

The shop uses the free same-origin catalog endpoint at `/api/shop/products`, so no paid commerce service is required during development. The checkout customer form persists customer profiles to Supabase; payment submission remains intentionally disabled until a payment provider is configured.

## Setup

1. Copy `.env.example` to `.env.local` and fill in the server-side credentials.
2. In microCMS, create list APIs named `programs` and `recipes` using the fields in `lib/content-types.ts`. The `videoId` field stores the YouTube video ID. When microCMS is unavailable, the site automatically uses local seed content.
3. Run `supabase/schema.sql` in the Supabase SQL editor. Customer records are only written through `/api/customers`; the service-role key never reaches the browser.
4. Run `npm install` and `npm run dev`.

## Content fields

- `programs`: `title`, `duration` (number), `level`, `type`, `part`, `calories` (number), `videoId`, and optional `color`.
- `recipes`: `title`, `kcal`, `p`, `f`, `c`, `time` (all numbers), `tags` (multiple text), `ingredients` (multiple text), `steps` (multiple text), and optional `color`.

The API routes cache microCMS reads for 60 seconds. Supabase customer upserts use a unique email address so repeat checkout attempts update the same record.
