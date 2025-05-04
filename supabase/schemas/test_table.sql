-- テスト用テーブル作成スキーマ
-- publicスキーマにシンプルなテーブルを作成
create table if not exists public.test_table (
  id bigint generated always as identity primary key,
  message text not null
);
comment on table public.test_table is 'Supabase接続テスト用のシンプルなテーブル。';

-- RLS有効化
alter table public.test_table enable row level security;

-- 全ユーザーselect許可
create policy "全員select可"
  on public.test_table
  for select
  to authenticated, anon
  using (true);

-- 全ユーザーinsert許可
create policy "全員insert可"
  on public.test_table
  for insert
  to authenticated, anon
  with check (true);

-- 全ユーザーupdate許可
create policy "全員update可"
  on public.test_table
  for update
  to authenticated, anon
  using (true)
  with check (true);

-- 全ユーザーdelete許可
create policy "全員delete可"
  on public.test_table
  for delete
  to authenticated, anon
  using (true); 