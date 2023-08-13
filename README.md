# vanillaAnalytics
Lightweight vanilla JS template for visitor analytics (IP, device, browser) connection with a hosted RDB like Supabase.

Dynamically implemented so that Analytics.js optionally loads and gracefully fails if not present in local path, making it easy to copy and paste into any vanilla JS project.

# To initialize Supabase:
1. [Create and set up a Supabase instance](https://supabase.com/).
2. Run the following SQL to only allow anonymous INSERT access and disable miscellaneous anonymous access to your Postgres RDB where <table> is your table.
```SQL
REVOKE ALL PRIVILEGES ON TABLE "public".<table> FROM "anon";
GRANT INSERT ON TABLE "public".<table> TO "anon";
```
In the provided code, the target table is defined using the following SQL:
```SQL
create table
  public.a (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    a text null,
    d text null,
    b text null,
    constraint a_pkey primary key (id)
  ) tablespace pg_default;
```
Where a ~ IP Address, d ~ device, and b ~ browser.
3. Retrieve the URL, API key, and Auth key from the API tab, and input them into your Analytics.js file.







