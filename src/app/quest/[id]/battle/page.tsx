"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { QUESTS } from "@/data/quests";

interface BattleState {
  playerHP: number;
  playerMaxHP: number;
  monsterHP: number;
  monsterMaxHP: number;
  battleLog: string[];
  isPlayerTurn: boolean;
  isAnimating: boolean;
}

export default function BattlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const quest = QUESTS.find((q) => q.id === parseInt(params.id));
  const [battleState, setBattleState] = useState<BattleState>({
    playerHP: 100,
    playerMaxHP: 100,
    monsterHP: 80,
    monsterMaxHP: 80,
    battleLog: ["バトルが開始しました！"],
    isPlayerTurn: true,
    isAnimating: false,
  });

  if (!quest) {
    return <div>Quest not found</div>;
  }

  const handleCommand = (
    command: "attack" | "defend" | "special" | "escape"
  ) => {
    if (!battleState.isPlayerTurn || battleState.isAnimating) return;

    let damage = 0;
    let newLog: string[] = [];

    switch (command) {
      case "attack":
        damage = Math.floor(Math.random() * 10) + 10;
        newLog = [`プレイヤーの攻撃！ ${damage}のダメージ！`];
        break;
      case "defend":
        newLog = ["プレイヤーは防御の構えをとった！"];
        break;
      case "special":
        damage = Math.floor(Math.random() * 20) + 20;
        newLog = [`プレイヤーの必殺技！ ${damage}のダメージ！`];
        break;
      case "escape":
        router.push("/quests");
        return;
    }

    setBattleState((prev) => ({
      ...prev,
      monsterHP: Math.max(0, prev.monsterHP - damage),
      battleLog: [...newLog, ...prev.battleLog].slice(0, 5),
      isPlayerTurn: false,
      isAnimating: true,
    }));

    // モンスターのターン
    setTimeout(() => {
      const monsterDamage = Math.floor(Math.random() * 15) + 5;
      setBattleState((prev) => ({
        ...prev,
        playerHP: Math.max(0, prev.playerHP - monsterDamage),
        battleLog: [
          `${quest.monsterName}の攻撃！ ${monsterDamage}のダメージ！`,
          ...prev.battleLog,
        ].slice(0, 5),
        isPlayerTurn: true,
        isAnimating: false,
      }));
    }, 1000);
  };

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: `url('${quest.backgroundPath}')` }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/50" />

      {/* バトルコンテンツ */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* バトルフィールド */}
        <div className="flex justify-center items-center gap-96 mb-12 mt-8">
          {/* プレイヤー側 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-indigo-500/10 rounded-lg backdrop-blur-sm" />
              <Image
                src="/images/male-characters/m-warrior.png"
                alt="Player"
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
            </div>
            {/* プレイヤー情報 */}
            <div className="w-64 bg-black/60 backdrop-blur-md rounded-lg p-4">
              <div className="text-center mb-2">
                <h2 className="text-xl font-bold text-white mb-1">ゆうた</h2>
                <p className="text-sm text-indigo-300">Lv. 50 せんし</p>
              </div>
              <div className="relative h-4 bg-gray-900/50 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-300"
                  style={{
                    width: `${
                      (battleState.playerHP / battleState.playerMaxHP) * 100
                    }%`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                  {battleState.playerHP}/{battleState.playerMaxHP}
                </div>
              </div>
            </div>
          </div>

          {/* VS表示 */}
          <div className="text-5xl font-bold text-white/10 select-none absolute">
            VS
          </div>

          {/* モンスター側 */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-4 transform hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-red-500/10 rounded-lg backdrop-blur-sm" />
              <Image
                src={quest.imagePath}
                alt={quest.title}
                fill
                className="object-contain drop-shadow-[0_0_10px_rgba(255,0,0,0.3)] scale-x-[-1]"
              />
            </div>
            {/* モンスター情報 */}
            <div className="w-64 bg-black/60 backdrop-blur-md rounded-lg p-4">
              <div className="text-center mb-2">
                <h2 className="text-xl font-bold text-white mb-1">
                  {quest.monsterName}
                </h2>
                <p className="text-sm text-red-300">
                  Lv. {quest.recommendedLevel}
                </p>
              </div>
              <div className="relative h-4 bg-gray-900/50 rounded-full overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-500 transition-all duration-300"
                  style={{
                    width: `${
                      (battleState.monsterHP / battleState.monsterMaxHP) * 100
                    }%`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
                  {battleState.monsterHP}/{battleState.monsterMaxHP}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* バトルログ */}
        <div className="max-w-2xl mx-auto mb-8 mt-24">
          <div className="bg-black/70 backdrop-blur-md rounded-lg p-4 h-32 overflow-y-auto border border-white/10">
            {battleState.battleLog.map((log, index) => (
              <p key={index} className="text-white/90 mb-1 text-sm">
                {log}
              </p>
            ))}
          </div>
        </div>

        {/* コマンド */}
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4 bg-black/70 backdrop-blur-md rounded-lg p-6 border border-white/10">
            <Button
              onClick={() => handleCommand("attack")}
              disabled={!battleState.isPlayerTurn || battleState.isAnimating}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white p-6 rounded-lg text-lg font-bold transition-transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              攻撃
            </Button>
            <Button
              onClick={() => handleCommand("defend")}
              disabled={!battleState.isPlayerTurn || battleState.isAnimating}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white p-6 rounded-lg text-lg font-bold transition-transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              防御
            </Button>
            <Button
              onClick={() => handleCommand("special")}
              disabled={!battleState.isPlayerTurn || battleState.isAnimating}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white p-6 rounded-lg text-lg font-bold transition-transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              必殺技
            </Button>
            <Button
              onClick={() => handleCommand("escape")}
              disabled={battleState.isAnimating}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white p-6 rounded-lg text-lg font-bold transition-transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
            >
              逃げる
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
