create table "public"."test_table" (
    "id" bigint generated always as identity not null,
    "message" text not null
);


alter table "public"."test_table" enable row level security;

CREATE UNIQUE INDEX test_table_pkey ON public.test_table USING btree (id);

alter table "public"."test_table" add constraint "test_table_pkey" PRIMARY KEY using index "test_table_pkey";

grant delete on table "public"."test_table" to "anon";

grant insert on table "public"."test_table" to "anon";

grant references on table "public"."test_table" to "anon";

grant select on table "public"."test_table" to "anon";

grant trigger on table "public"."test_table" to "anon";

grant truncate on table "public"."test_table" to "anon";

grant update on table "public"."test_table" to "anon";

grant delete on table "public"."test_table" to "authenticated";

grant insert on table "public"."test_table" to "authenticated";

grant references on table "public"."test_table" to "authenticated";

grant select on table "public"."test_table" to "authenticated";

grant trigger on table "public"."test_table" to "authenticated";

grant truncate on table "public"."test_table" to "authenticated";

grant update on table "public"."test_table" to "authenticated";

grant delete on table "public"."test_table" to "service_role";

grant insert on table "public"."test_table" to "service_role";

grant references on table "public"."test_table" to "service_role";

grant select on table "public"."test_table" to "service_role";

grant trigger on table "public"."test_table" to "service_role";

grant truncate on table "public"."test_table" to "service_role";

grant update on table "public"."test_table" to "service_role";

create policy "全員delete可"
on "public"."test_table"
as permissive
for delete
to authenticated, anon
using (true);


create policy "全員insert可"
on "public"."test_table"
as permissive
for insert
to authenticated, anon
with check (true);


create policy "全員select可"
on "public"."test_table"
as permissive
for select
to authenticated, anon
using (true);


create policy "全員update可"
on "public"."test_table"
as permissive
for update
to authenticated, anon
using (true)
with check (true);



