import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/header";

export default function FAQPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/home.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            よくある質問
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                Adventuraとは何ですか？
              </h3>
              <p className="text-white/80">
                Adventuraは、日常のタスク管理をRPGゲームのように楽しく行えるアプリケーションです。タスクをクエストとして管理し、達成することでレベルアップや報酬を獲得できます。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                無料で利用できますか？
              </h3>
              <p className="text-white/80">
                はい、基本機能は無料でご利用いただけます。将来的により高度な機能や特別なアイテムなどを提供する有料プランの導入を予定しています。
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-3">
                データは安全に保管されますか？
              </h3>
              <p className="text-white/80">
                はい、ユーザーデータは暗号化されて安全に保管されます。また、定期的なバックアップも行っているため、データの損失の心配もありません。
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
