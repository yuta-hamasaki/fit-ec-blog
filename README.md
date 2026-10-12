# BLAZE Martial Arts Fitness

Next.js frontend for training videos, PFC recipes, products, and customer capture.

Products, stock, prices, product images, and purchase URLs are managed in BASE. The server-side `/api/shop/products` adapter reads the BASE catalog without exposing its access token. The checkout customer form persists customer profiles to Supabase and sends customers to the corresponding BASE product pages for payment.

## Setup

1. Copy `.env.example` to `.env.local` and fill in the server-side credentials.
2. In microCMS, create list APIs named `programs` and `recipes` using the fields in `lib/content-types.ts`. A program can store either `videoId` or a full YouTube `videoUrl`. When microCMS is unavailable, the site automatically uses local seed content.
3. Run `supabase/schema.sql` in the Supabase SQL editor. Customer records are only written through `/api/customers`; the service-role key never reaches the browser.
4. Create a BASE Developers application, issue an access token with item-read permission, and set `BASE_ACCESS_TOKEN` and `BASE_SHOP_URL`.
5. Run `npm install` and `npm run dev`.

## Content fields

- `programs`: `title`, `duration` (number), `level`, `type`, `part`, `calories` (number), `videoId` or `videoUrl`, and optional `color`.
- `recipes`: `title`, `kcal`, `p`, `f`, `c`, `time` (all numbers), `tags` (multiple text), `ingredients` (multiple text), `steps` (multiple text), and optional `color`.

The microCMS and BASE API routes cache reads for 60 seconds. Supabase customer upserts use a unique email address so repeat checkout attempts update the same record. If either content service is unavailable, development seed content remains visible.
