import { Header } from "@/components/header";
import { QuestCard } from "@/components/quest/QuestCard";
import { QUESTS } from "@/data/quests";

export default function QuestsPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/cave.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/60" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        {/* クエスト一覧 */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            クエスト一覧
          </h2>

          {/* 装飾的な区切り線 */}
          <div className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {QUESTS.map((quest) => (
              <QuestCard
                key={quest.id}
                id={quest.id}
                title={quest.title}
                difficulty={quest.difficulty}
                recommendedLevel={quest.recommendedLevel}
                imagePath={quest.imagePath}
                description={quest.description}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
