import { Header } from "@/components/header";
import { QuestCard } from "@/components/quest/QuestCard";

const QUESTS = [
  {
    id: 1,
    title: "キノコの群生地を調査せよ",
    difficulty: 1,
    recommendedLevel: 1,
    imagePath: "/images/monsters/mashroom.png",
    description:
      "森の奥深くで発見された謎のキノコの群生地。この未知の生物の生態を調査し、危険性を判断せよ。初心者冒険者にぴったりの任務だ。",
  },
  {
    id: 2,
    title: "地下迷宮のスケルトンを討伐",
    difficulty: 2,
    recommendedLevel: 5,
    imagePath: "/images/monsters/skeleton.png",
    description:
      "古代の地下迷宮で暴れるスケルトンの討伐依頼。迷宮の深部に潜むスケルトンを倒し、地域の安全を確保せよ。戦闘経験者向けの任務となる。",
  },
  {
    id: 3,
    title: "古代遺跡のゴーレムに挑め",
    difficulty: 3,
    recommendedLevel: 15,
    imagePath: "/images/monsters/golem.png",
    description:
      "遺跡の守護者として君臨する巨大ゴーレム。その圧倒的な防御力と破壊力に打ち勝ち、遺跡に眠る古代の秘宝を手に入れよ。",
  },
  {
    id: 4,
    title: "ドラゴンの巣窟を探索",
    difficulty: 4,
    recommendedLevel: 30,
    imagePath: "/images/monsters/dorgon.png",
    description:
      "伝説の竜が棲むとされる火山の巣窟。その圧倒的な力と対峙し、ドラゴンの脅威から王国を守れ。熟練冒険者のみが挑戦を許される危険な任務。",
  },
  {
    id: 5,
    title: "悪魔の城塞に潜入",
    difficulty: 4,
    recommendedLevel: 40,
    imagePath: "/images/monsters/devil.png",
    description:
      "次元の狭間に浮かぶ悪魔の城塞。強大な魔力を持つ悪魔との戦いに備え、城塞内の情報を収集せよ。帰還の保証なき危険な任務となる。",
  },
  {
    id: 6,
    title: "魔王城最深部へ突入",
    difficulty: 5,
    recommendedLevel: 50,
    imagePath: "/images/monsters/demon.png",
    description:
      "世界の均衡を脅かす魔王との最終決戦。魔王城の最深部に到達し、魔王を討伐せよ。この任務の成功が世界の命運を分ける。伝説の冒険者のみが挑める究極の任務。",
  },
];

export default function QuestsPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/dungeon.jpg')" }}
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
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
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
