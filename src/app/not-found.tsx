import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { BackButton } from "@/components/back-button";

export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/custom404.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        {/* メインコンテンツ */}
        <div className="flex flex-col items-center justify-center min-h-[90vh]">
          {/* メッセージボックス - 紫色の発光効果付き */}
          <div className="relative max-w-xl w-full mb-8">
            {/* 紫色の発光エフェクト */}
            <div className="absolute -inset-1 bg-purple-500/30 rounded-lg blur-md" />

            {/* メッセージボックス本体 */}
            <div className="relative bg-black p-6 rounded-lg border-2 border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <h2 className="text-2xl font-bold text-white text-center">
                ここはページが存在しないようだ...
              </h2>
            </div>
          </div>

          {/* キャラクター画像 - サイズ拡大 */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
            <Image
              src="/images/male-characters/joker.png"
              alt="迷子のキャラクター"
              fill
              className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            />
          </div>

          {/* 操作ボタン */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/todo">
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                size="lg"
              >
                冒険の拠点に戻る
              </Button>
            </Link>
            <BackButton />
          </div>
        </div>
      </div>
    </main>
  );
}
