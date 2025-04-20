import { SignUp } from "@clerk/nextjs";
import { Header } from "@/components/header";

export default function SignUpPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/form.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        <div className="mt-24 flex justify-center items-center">
          <div className="w-full max-w-md transform transition-all">
            {/* 光の効果 - 上部からの光 */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 bg-white/20 blur-[100px]" />

            {/* 光の効果 - 左上からの斜めの光 */}
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-white/10 blur-[100px] -rotate-45" />

            {/* 光の効果 - 右下からの光 */}
            <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-white/10 blur-[80px]" />

            {/* メインカード */}
            <div className="relative">
              {/* 装飾的な境界線 */}
              <div className="absolute -inset-0.5 bg-white/10 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* サインアップフォーム */}
              <SignUp
                appearance={{
                  elements: {
                    formButtonPrimary:
                      "bg-white/20 backdrop-blur hover:bg-white/30 transform hover:-translate-y-0.5 transition-all duration-200",
                    footerActionLink:
                      "text-white/80 hover:text-white transition-colors duration-200",
                    card: "bg-black/20 backdrop-blur-xl border border-white/10 shadow-2xl rounded-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300",
                    headerTitle: "text-white text-2xl font-bold",
                    headerSubtitle: "text-white/80",
                    formFieldLabel: "text-white/90",
                    formFieldInput:
                      "bg-white/5 border border-white/10 text-white placeholder-white/40 focus:border-white/20 focus:ring-2 focus:ring-white/10 transition-all duration-200",
                    dividerLine: "bg-white/10",
                    dividerText: "text-white/40",
                    identityPreviewText: "text-white",
                    identityPreviewEditButton:
                      "text-white/80 hover:text-white transition-colors duration-200",
                    formResendCodeLink:
                      "text-white/80 hover:text-white transition-colors duration-200",
                  },
                  layout: {
                    socialButtonsPlacement: "bottom",
                    socialButtonsVariant: "blockButton",
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
