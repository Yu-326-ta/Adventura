import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// パブリックルートの定義（ログインが不要なパス）
const publicRoutes = [
  "/", // ホームページ
  "/sign-in(.*)", // ログインページ（およびサブルート）
  "/sign-up(.*)", // サインアップページ（およびサブルート）
  "/faq", // よくある質問ページ
  "/quests", // クエスト一覧ページ
  "/quest/(.*)", // クエスト詳細・バトルページ
];

const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    try {
      // 認証が必要なページへのアクセスを保護
      await auth.protect();
    } catch (error) {
      // 認証エラーの場合はサインインページにリダイレクト
      const signInUrl = new URL("/sign-in", req.url);

      // 現在のURLを取得（クエリパラメータやハッシュを除く）
      const returnUrl = new URL(req.url);
      // URLエンコードしてredirect_urlパラメータに追加
      signInUrl.searchParams.set("redirect_url", returnUrl.toString());

      return NextResponse.redirect(signInUrl);
    }
  }

  return NextResponse.next();
});

// Clerk ミドルウェアで使用される全てのルートを指定
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
