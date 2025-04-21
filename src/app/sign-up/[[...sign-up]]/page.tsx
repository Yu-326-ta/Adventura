import { SignUp } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function SignUpPage({
  searchParams,
}: {
  searchParams: { redirect_url?: string };
}) {
  // リダイレクトURLを取得
  const redirectUrl = searchParams.redirect_url || "/todo";

  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/scene/form.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* コンテンツ */}
      <div className="relative z-10 min-h-screen">
        {/* ヘッダー */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Header />
        </div>

        {/* サインアップフォーム */}
        <div className="flex flex-col items-center justify-center px-4 mt-16">
          <div className="max-w-md w-full mx-auto relative">
            {/* 光の効果 - 上から */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
            {/* 光の効果 - 右から */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
            {/* 光の効果 - 下から */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* 装飾ボーダー */}
            <div className="absolute inset-0 border border-white/20 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] pointer-events-none"></div>

            {/* サインアップフォーム */}
            <div className="backdrop-blur-md bg-black/30 rounded-xl p-6 shadow-xl relative z-10">
              <h1 className="text-2xl font-bold text-white text-center mb-6">
                冒険者登録
              </h1>
              <SignUp
                redirectUrl={redirectUrl}
                appearance={{
                  elements: {
                    formButtonPrimary:
                      "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white transition-all duration-200 shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 active:translate-y-0 rounded-md",
                    footerActionLink: "text-indigo-400 hover:text-indigo-300",
                    card: "bg-transparent shadow-none",
                    formFieldInput:
                      "bg-white/10 border-white/20 text-white placeholder:text-white/50",
                    identityPreviewEditButton:
                      "text-indigo-400 hover:text-indigo-300",
                    formFieldLabel: "text-white/70",
                    dividerLine: "bg-white/20",
                    dividerText: "text-white/50",
                    socialButtonsBlockButton:
                      "border-white/20 hover:bg-white/10 text-white",
                    socialButtonsBlockButtonText: "text-white",
                    otpCodeFieldInput: "bg-white/10 border-white/20 text-white",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
