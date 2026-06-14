-- ════════════════════════════════════════════════════════════
-- SCHEMA — Portal PyroShield en Supabase
-- Correr este SQL en: Supabase Dashboard → SQL Editor → New query
-- ════════════════════════════════════════════════════════════

-- Tabla de pedidos (fuente de verdad compartida entre admin y distribuidores)
create table if not exists pedidos (
  id          text primary key,
  data        jsonb not null,
  ruc         text,
  estado      text,
  created_at  timestamptz default now(),
  updated_at  timestamptz default now()
);

-- Tabla de stock por producto
create table if not exists stock (
  id          text primary key,
  stock       integer not null default 0,
  ago         boolean not null default false,
  updated_at  timestamptz default now()
);

-- Distribuidores creados desde admin (complementa los de datos.js)
create table if not exists distribuidores_extra (
  ruc         text primary key,
  data        jsonb not null,
  created_at  timestamptz default now()
);

-- Configuración general (rewards, dist_eliminados, etc.)
create table if not exists app_config (
  key         text primary key,
  value       jsonb not null,
  updated_at  timestamptz default now()
);

-- Log de puntos por distribuidor
create table if not exists puntos_log (
  id          uuid default gen_random_uuid() primary key,
  ruc         text not null,
  tipo        text not null,
  pts         integer not null default 0,
  descripcion text,
  ts          timestamptz default now()
);

-- ── Trigger: actualizar updated_at automáticamente ────────────────────────────
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create or replace trigger pedidos_updated_at
  before update on pedidos
  for each row execute function set_updated_at();

create or replace trigger stock_updated_at
  before update on stock
  for each row execute function set_updated_at();

create or replace trigger app_config_updated_at
  before update on app_config
  for each row execute function set_updated_at();

-- ── RLS: deshabilitado — el portal tiene su propio sistema de auth (hashes SHA-256)
-- La seguridad real viene del hecho de que el anon key solo puede operar sobre
-- estas tablas, y la lógica de negocio valida en JavaScript.
alter table pedidos            disable row level security;
alter table stock              disable row level security;
alter table distribuidores_extra disable row level security;
alter table app_config         disable row level security;
alter table puntos_log         disable row level security;

-- ── Permisos para el rol anon (clave publishable del frontend) ────────────────
grant select, insert, update, delete on pedidos             to anon;
grant select, insert, update, delete on stock               to anon;
grant select, insert, update, delete on distribuidores_extra to anon;
grant select, insert, update, delete on app_config          to anon;
grant select, insert, update, delete on puntos_log          to anon;

-- ── Índices útiles ────────────────────────────────────────────────────────────
create index if not exists pedidos_ruc_idx    on pedidos(ruc);
create index if not exists pedidos_estado_idx on pedidos(estado);
create index if not exists puntos_log_ruc_idx on puntos_log(ruc);
create index if not exists puntos_log_ts_idx  on puntos_log(ts desc);
