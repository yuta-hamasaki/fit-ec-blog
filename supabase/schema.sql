create extension if not exists "pgcrypto";

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  name text not null,
  phone text,
  marketing_consent boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.customers enable row level security;

-- Browser clients receive no direct access. Customer writes go through the
-- server-only API route using SUPABASE_SERVICE_ROLE_KEY.
revoke all on table public.customers from anon, authenticated;
