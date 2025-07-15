# Supabase 総合ガイド

このドキュメントは、Next.js アプリケーションで Supabase を使用する際の汎用的なガイドラインです。

## 目次

1. [ディレクトリ構成](#ディレクトリ構成)
2. [環境設定](#環境設定)
3. [認証セットアップ](#認証セットアップ)
4. [データベース設計](#データベース設計)
5. [マイグレーション管理](#マイグレーション管理)
6. [実装パターン](#実装パターン)
7. [セキュリティ](#セキュリティ)

## ディレクトリ構成

### 推奨構成

```
src/
├── lib/
│   └── supabase/
│       ├── client.ts          # ブラウザ用クライアント
│       ├── server.ts          # Server Component用クライアント
│       ├── middleware.ts      # Middleware用クライアント
│       ├── auth-helpers.ts    # 認証ヘルパー関数
│       └── types/
│           ├── database.ts    # データベース型定義
│           ├── auth.ts        # 認証関連の型
│           └── storage.ts     # ストレージ関連の型
├── services/
│   └── supabase/
│       ├── auth/             # 認証ロジック
│       ├── [feature]/        # 機能別のデータ操作
│       └── users/            # ユーザー関連
├── hooks/
│   └── supabase/             # カスタムフック
│       ├── use-auth.ts
│       └── use-[feature].ts
├── components/
│   └── auth/                 # 認証コンポーネント
└── app/
    ├── api/
    │   ├── auth/
    │   │   └── callback/     # OAuth/メール確認
    │   └── webhooks/         # 外部サービス連携
    └── middleware.ts         # 認証ミドルウェア
```

### Supabase CLI ディレクトリ構成

```
supabase/
├── schema/          # 完全なスキーマ定義（新規環境用）
│   ├── 001_initial_schema.sql
│   ├── 002_database_functions.sql
│   ├── 003_triggers.sql
│   └── 004_storage_schema.sql
└── migrations/      # 増分変更（既存環境更新用）
    └── [timestamp]_[description].sql
```

## 環境設定

### 環境変数

```env
# 必須の環境変数
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# オプション（サーバーサイド用）
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 初期設定手順

1. Supabase プロジェクトを作成
2. プロジェクトダッシュボードから認証情報を取得
3. 環境変数を設定
4. 必要な npm パッケージをインストール

```bash
npm install @supabase/supabase-js @supabase/ssr
```

## 認証セットアップ

### 基本設定

1. **サイト URL 設定**

   - 開発: `http://localhost:3000`
   - 本番: `https://your-domain.com`

2. **リダイレクト URL**

   - `http://localhost:3000/**`（開発）
   - `https://your-domain.com/**`（本番）

3. **認証プロバイダー**
   - メール/パスワード
   - マジックリンク
   - ソーシャルログイン（Google、GitHub 等）

### クライアント初期化

```typescript
// lib/supabase/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "./types/database";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

### Server Component 用クライアント

```typescript
// lib/supabase/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          cookieStore.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          cookieStore.set({ name, value: "", ...options });
        },
      },
    }
  );
}
```

### ミドルウェア実装

```typescript
// middleware.ts
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          response.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          response.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 保護されたルートのチェック
  if (!session && request.nextUrl.pathname.startsWith("/protected")) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/auth/sign-in";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
```

## データベース設計

### 基本的なテーブル構造

```sql
-- ユーザープロファイル
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- RLSポリシー
CREATE POLICY "ユーザーは自分のプロファイルを閲覧可能"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "ユーザーは自分のプロファイルを更新可能"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);
```

### トリガーとファンクション

```sql
-- プロファイル自動作成
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## マイグレーション管理

### 命名規則

```
<timestamp>_<resource_type>_<description>.sql
```

リソースタイプ:

- `db_` - データベース関連
- `storage_` - ストレージ関連
- `function_` - Edge Functions 関連
- `auth_` - 認証関連
- `rls_` - Row Level Security 関連

### マイグレーションコマンド

```bash
# 新規マイグレーション作成
supabase migration new <name>

# マイグレーション適用（リモート）
supabase db push

# マイグレーション適用（ローカル）
supabase db push --local

# 型定義の生成
supabase gen types typescript --local > src/lib/supabase/types/database.ts
```

### マイグレーション作成のベストプラクティス

1. 一つのマイグレーションで一つの変更
2. 破壊的変更は避ける
3. ロールバック可能な設計
4. 本番適用前にローカルでテスト

## 実装パターン

### サービス層

```typescript
// services/supabase/[feature]/queries.ts
import { createClient } from "@/lib/supabase/server";

export async function getItems() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("items")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}
```

### カスタムフック

```typescript
// hooks/supabase/use-items.ts
import { useQuery } from "@tanstack/react-query";
import { getItems } from "@/services/supabase/items/queries";

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
}
```

### 認証フック

```typescript
// hooks/supabase/use-auth.ts
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  return { user, loading };
}
```

## セキュリティ

### Row Level Security (RLS)

1. **すべてのテーブルで RLS を有効化**

```sql
ALTER TABLE your_table ENABLE ROW LEVEL SECURITY;
```

2. **基本的なポリシーパターン**

```sql
-- 読み取り専用
CREATE POLICY "Public read access"
  ON items FOR SELECT
  USING (true);

-- ユーザー専用
CREATE POLICY "Users can manage own data"
  ON user_items FOR ALL
  USING (auth.uid() = user_id);

-- 条件付きアクセス
CREATE POLICY "Premium users only"
  ON premium_content FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM subscriptions
      WHERE user_id = auth.uid()
      AND status = 'active'
    )
  );
```

### API セキュリティ

1. **Service Role キーの取り扱い**

   - サーバーサイドのみで使用
   - 環境変数で管理
   - クライアントに露出させない

2. **Webhook 検証**

```typescript
// 署名検証の実装
import { createHmac } from "crypto";

export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = createHmac("sha256", secret)
    .update(payload)
    .digest("hex");

  return signature === expectedSignature;
}
```

### ベストプラクティス

1. **最小権限の原則**

   - 必要最小限の権限のみ付与
   - RLS ポリシーは厳格に設定

2. **入力検証**

   - サーバーサイドで必ず検証
   - SQL インジェクション対策

3. **監査ログ**

   - 重要な操作はログに記録
   - Supabase の監査機能を活用

4. **定期的なセキュリティレビュー**
   - RLS ポリシーの見直し
   - 依存関係の更新

## トラブルシューティング

### 一般的な問題と解決策

1. **認証が動作しない**

   - 環境変数の確認
   - リダイレクト URL の設定確認
   - Cookie の有効化確認

2. **RLS エラー**

   - ポリシーの確認
   - anon key の権限確認
   - Service Role キーの使用検討

3. **型エラー**

   - 型定義の再生成
   - スキーマとの同期確認

4. **パフォーマンス問題**
   - インデックスの追加
   - クエリの最適化
   - リアルタイムの適切な使用

## 参考リソース

- [Supabase 公式ドキュメント](https://supabase.com/docs)
- [Next.js with Supabase](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase CLI](https://supabase.com/docs/guides/cli)
