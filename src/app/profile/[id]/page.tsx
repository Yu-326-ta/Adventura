"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
// 日時フォーマット関連のimportは不要になりました
import { Header } from "@/components/header";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProfileStats {
  level: number;
  exp: number;
  maxExp: number;
  job: string;
  tasksCompleted: number;
  questsCleared: number;
  username: string;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed: number;
}

interface OwnedMonster {
  id: string;
  name: string;
  image_url: string;
  level: number;
  experience: number;
  maxExp: number;
  hp: number;
  attack: number;
  defense: number;
}

export default function ProfilePage() {
  const params = useParams();
  const userId = params.id as string;

  const [stats, setStats] = useState<ProfileStats>({
    level: 50,
    exp: 75,
    maxExp: 100,
    job: "せんし",
    tasksCompleted: 152,
    questsCleared: 24,
    username: "ゆうた",
    hp: 480,
    maxHp: 500,
    attack: 85,
    defense: 72,
    speed: 68,
  });

  const [ownedMonsters, setOwnedMonsters] = useState<OwnedMonster[]>([
    {
      id: "1",
      name: "ウィルオウィスプキノコ",
      image_url: "/images/monsters/mashroom/mashroom.png",
      level: 3,
      experience: 45,
      maxExp: 100,
      hp: 120,
      attack: 25,
      defense: 15,
    },
    {
      id: "2",
      name: "ケイブゴーレム",
      image_url: "/images/monsters/golem/golem.png",
      level: 5,
      experience: 120,
      maxExp: 200,
      hp: 250,
      attack: 45,
      defense: 65,
    },
  ]);

  // プロフィール情報を取得（実際の実装ではAPIから取得する想定）
  useEffect(() => {
    // ここでユーザーIDに基づいてAPIからデータを取得する処理を実装
    // 例: fetchUserData(userId).then(data => setStats(data));
    console.log(`Fetching profile data for user ID: ${userId}`);

    // ここではモックデータをセットするだけ
    // 実際のアプリケーションではAPIからデータをフェッチします
  }, [userId]);

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/inn.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        {/* プロフィールコンテンツ */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            プロフィール
          </h2>

          {/* 装飾的な区切り線 */}
          <div className="relative mb-12 overflow-hidden">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start max-w-4xl mx-auto overflow-hidden">
            {/* キャラクター画像セクション */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              <Image
                src="/images/male-characters/m-warrior.png"
                alt={stats.username}
                fill
                className="object-contain"
              />
            </div>

            {/* プロフィール情報セクション */}
            <div className="bg-black/70 backdrop-blur-md rounded-lg p-8 shadow-xl border border-white/20 w-full max-w-lg overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-white">
                  {stats.username}
                </h1>
                <Link href={`/profile/${userId}/edit`}>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg">
                    編集
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                {/* レベル情報 */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl text-white">
                      Lv：{stats.level}
                    </span>
                  </div>

                  {/* 次のレベルまでのプログレスバー */}
                  <div className="mb-1 text-white text-sm">
                    次のレベルまで：
                  </div>
                  <div className="relative h-6 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-300"
                      style={{ width: `${(stats.exp / stats.maxExp) * 100}%` }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                      {stats.exp}/{stats.maxExp}
                    </div>
                  </div>
                </div>

                {/* 職業 */}
                <div className="flex items-center">
                  <span className="text-white text-xl mr-2">職業：</span>
                  <span className="text-indigo-300 text-xl font-semibold">
                    {stats.job}
                  </span>
                </div>

                {/* 達成したタスクの数 */}
                <div className="flex items-center">
                  <span className="text-white text-xl mr-2">
                    達成したタスクの数：
                  </span>
                  <span className="text-green-400 text-xl font-semibold">
                    {stats.tasksCompleted}
                  </span>
                </div>

                {/* クエストクリア数 */}
                <div className="flex items-center">
                  <span className="text-white text-xl mr-2">
                    クエストクリア数：
                  </span>
                  <span className="text-yellow-400 text-xl font-semibold">
                    {stats.questsCleared}
                  </span>
                </div>

                {/* 能力ステータス */}
                <div className="space-y-2">
                  <div className="text-white text-lg font-semibold">
                    能力ステータス
                  </div>

                  {/* HP */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white text-sm">HP</span>
                      <span className="text-green-400 text-sm">
                        {stats.hp}/{stats.maxHp}
                      </span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400"
                        style={{ width: `${(stats.hp / stats.maxHp) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* 攻撃力・防御力・素早さ */}
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    <div className="text-center">
                      <div className="text-white text-xs">攻撃力</div>
                      <div className="text-red-400 text-lg font-semibold">
                        {stats.attack}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white text-xs">防御力</div>
                      <div className="text-blue-400 text-lg font-semibold">
                        {stats.defense}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-white text-xs">素早さ</div>
                      <div className="text-yellow-400 text-lg font-semibold">
                        {stats.speed}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* モンスター所持セクション */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              所持モンスター ({ownedMonsters.length}/5)
            </h3>

            {/* 装飾的な区切り線 */}
            <div className="relative mb-8 overflow-hidden">
              <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
            </div>

            {/* モンスター表示グリッド */}
            {ownedMonsters.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {ownedMonsters.map((monster) => (
                  <div
                    key={monster.id}
                    className="bg-black/70 backdrop-blur-md rounded-lg p-4 shadow-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300"
                  >
                    {/* モンスター画像 */}
                    <div className="relative w-full h-32 mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.3)]">
                      <Image
                        src={monster.image_url}
                        alt={monster.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* モンスター情報 */}
                    <div className="text-center">
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        {monster.name}
                      </h4>

                      <div className="space-y-1 text-xs">
                        {/* レベル */}
                        <div className="flex justify-between text-gray-300 mb-1">
                          <span>Lv:</span>
                          <span className="text-yellow-400">
                            {monster.level}
                          </span>
                        </div>

                        {/* EXP バー */}
                        <div className="mb-2">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-gray-300">EXP:</span>
                            <span className="text-blue-400">
                              {monster.experience}/{monster.maxExp}
                            </span>
                          </div>
                          <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                              style={{
                                width: `${
                                  (monster.experience / monster.maxExp) * 100
                                }%`,
                              }}
                            />
                          </div>
                        </div>

                        {/* 能力ステータス */}
                        <div className="grid grid-cols-3 gap-1 text-center">
                          <div>
                            <div className="text-gray-400 text-xs">HP</div>
                            <div className="text-green-400 text-xs font-semibold">
                              {monster.hp}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs">攻撃</div>
                            <div className="text-red-400 text-xs font-semibold">
                              {monster.attack}
                            </div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs">防御</div>
                            <div className="text-blue-400 text-xs font-semibold">
                              {monster.defense}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* 空のスロット表示 */}
                {Array.from({ length: 5 - ownedMonsters.length }).map(
                  (_, index) => (
                    <div
                      key={`empty-${index}`}
                      className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10 border-dashed"
                    >
                      <div className="h-32 flex items-center justify-center mb-4">
                        <div className="text-white/30 text-4xl">?</div>
                      </div>
                      <div className="text-center">
                        <div className="text-white/50 text-sm">
                          空きスロット
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-8 border border-white/10">
                  <div className="text-white/60 text-lg mb-2">
                    モンスターを所持していません
                  </div>
                  <div className="text-white/40 text-sm">
                    クエストをクリアしてモンスターを仲間にしよう！
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
