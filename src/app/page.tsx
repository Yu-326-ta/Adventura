import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { AuthButtons } from "@/components/auth-buttons";
import Link from "next/link";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative overflow-x-hidden"
      style={{ backgroundImage: "url(/images/home.jpg)" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/50" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        {/* メインコンテンツ */}
        <div className="mt-24 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            日常を冒険に変える
          </h2>
          <p className="text-lg text-white/80 mb-4">
            ようこそ、「Adventura」へ！
          </p>
          <p className="text-white/80 mb-8">
            このアプリは、あなたの日常のタスクをワクワクする冒険に変える、ユニークなRPG形式のタスク管理ツールです。
          </p>
          <div className="flex justify-center">
            <AuthButtons />
          </div>
        </div>

        {/* 特徴セクション */}
        <section className="mt-32">
          <h3 className="text-3xl font-bold text-white text-center mb-16">
            人生を冒険に変える Adventura
          </h3>
          <p className="text-white/80 text-center mb-16 max-w-4xl mx-auto">
            Adventuraはあなたの日常をエキサイティングな冒険に変えます！
            <br />
            ぱやくその世界に飛び込んで、自分の成長と共に各タスクをクリアし、
            <br />
            魅力的な冒険の舞台を探索し、新たな挑戦に挑みましょう！
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/male-characters/master.png"
                    alt="クエスト"
                    width={64}
                    height={64}
                  />
                </div>
                <CardTitle className="text-center">
                  タスクをクエストに変換
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  毎日のタスクをクリアすることに経験値と報酬を獲得できます。もう退屈なToDoリストとはおさらば！
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/monsters/skeleton.png"
                    alt="モンスター"
                    width={64}
                    height={64}
                  />
                </div>
                <CardTitle className="text-center">多彩な冒険の舞台</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  日常の仕事や勉強が、まるでファンタジーRPGのように楽しくなります。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-none text-white hover:bg-white/20 transition-colors">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/items/tresure.png"
                    alt="レベルアップ"
                    width={64}
                    height={64}
                  />
                </div>
                <CardTitle className="text-center">成長の喜びを実感</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-center">
                  各クエストをクリアすることにレベルアップし、スキルやステータスが上昇。自分の成長をリアルタイムで感じられます！
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* フッター */}
        <footer className="mt-32 border-t border-white/20 pt-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 text-white">
            <div>
              <h4 className="font-bold mb-4">開発者</h4>
            </div>
            <div>
              <h4 className="font-bold mb-4">ソーシャル</h4>
            </div>
            <div>
              <h4 className="font-bold mb-4">サポート</h4>
            </div>
            <div>
              <h4 className="font-bold mb-4">プロダクト</h4>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
