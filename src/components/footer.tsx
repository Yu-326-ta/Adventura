import Link from "next/link";
import Image from "next/image";
import { Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full py-8 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ロゴと説明 */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/weapons/sword.png"
                alt="Adventura"
                width={24}
                height={24}
              />
              <h2 className="text-xl font-bold text-white">Adventura</h2>
            </Link>
            <p className="text-white/70 text-sm">
              Adventura - RPGで楽しむタスク管理アプリケーション。
              <br />
              日常のタスクを冒険に変えて、やる気を継続させましょう。
            </p>
            <div className="text-white/70 text-sm">
              <p>© {currentYear} Adventura Team</p>
              <p>Version 1.2.4</p>
            </div>
          </div>

          {/* リンク集 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              サイトマップ
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  よくある質問
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* お問い合わせ */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              お問い合わせ
            </h3>
            <ul className="space-y-2 text-white/70">
              <li>メール: support@adventura-app.example.com</li>
              <li>お問い合わせ受付時間: 平日 10:00-18:00</li>
            </ul>
            <div className="mt-4">
              <p className="text-white/70 text-sm">
                運営会社: Adventura
                <br />
                所在地: 東京都渋谷区RPG町1-2-3
              </p>
            </div>
          </div>
        </div>

        {/* 最下部の著作権表示 */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            当サイトで使用している画像・名称等は架空のものです。実在の人物・団体とは関係ありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
