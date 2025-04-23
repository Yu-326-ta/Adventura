"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTS } from "@/data/quests";
import { BattleResultModal } from "@/components/battle/BattleResultModal";

export default function BattlePage() {
  const params = useParams();
  const router = useRouter();
  const questId = Number(params.id);
  const quest = QUESTS.find((q) => q.id === questId);

  // バトル状態管理
  const [playerHp, setPlayerHp] = useState(100);
  const [monsterHp, setMonsterHp] = useState(100);
  const [battleLogs, setBattleLogs] = useState<string[]>([
    "バトルが始まりました！",
  ]);
  const [currentTurn, setCurrentTurn] = useState<"player" | "monster">(
    "player"
  );

  // 結果モーダル用の状態
  const [showResultModal, setShowResultModal] = useState(false);
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  // クエストが見つからない場合は404へ
  if (!quest) {
    return <div>クエストが見つかりません</div>;
  }

  // バトル終了判定
  useEffect(() => {
    if (isBattleOver) return;

    // プレイヤーかモンスターのHPが0以下になったらバトル終了
    if (playerHp <= 0 || monsterHp <= 0) {
      setIsBattleOver(true);
      setIsVictory(monsterHp <= 0);

      // バトル結果のログを追加
      if (monsterHp <= 0) {
        setBattleLogs((prev) => [
          ...prev,
          `${quest.monsterName}を倒しました！勝利！`,
        ]);
      } else {
        setBattleLogs((prev) => [...prev, "あなたは倒れてしまった...敗北..."]);
      }

      // 1秒後に結果モーダルを表示
      setTimeout(() => {
        setShowResultModal(true);
      }, 1000);
    }
  }, [playerHp, monsterHp, isBattleOver, quest.monsterName]);

  // 経験値計算
  const calculateExpGained = () => {
    return Math.floor(quest.difficulty * quest.recommendedLevel * 10);
  };

  // コマンド実行時の処理
  const handleCommand = (command: string) => {
    // バトルが終了していたら何もしない
    if (isBattleOver) return;

    if (currentTurn === "player") {
      // プレイヤーの攻撃処理
      let damage = 0;
      let defenseBonus = 0;
      let logMessage = "";

      switch (command) {
        case "attack":
          damage = Math.floor(Math.random() * 15) + 10;
          logMessage = `あなたの攻撃！${quest.monsterName}に${damage}のダメージ！`;
          setMonsterHp((prev) => Math.max(0, prev - damage));
          break;
        case "defend":
          defenseBonus = 20;
          logMessage = `あなたは防御の構えをとった！次の攻撃のダメージが軽減される！`;
          break;
        case "special":
          damage = Math.floor(Math.random() * 20) + 20;
          logMessage = `あなたの必殺技！${quest.monsterName}に${damage}のダメージ！`;
          setMonsterHp((prev) => Math.max(0, prev - damage));
          break;
        case "escape":
          router.push("/quests");
          return;
      }

      // ログを追加
      setBattleLogs((prev) => [...prev, logMessage]);

      // モンスターターンに移行
      setTimeout(() => {
        // モンスターの攻撃処理
        if (monsterHp > 0) {
          const monsterDamage = Math.max(
            1,
            Math.floor(Math.random() * 15) + 5 - defenseBonus / 2
          );
          const monsterLogMessage = `${quest.monsterName}の攻撃！あなたに${monsterDamage}のダメージ！`;
          setBattleLogs((prev) => [...prev, monsterLogMessage]);
          setPlayerHp((prev) => Math.max(0, prev - monsterDamage));
          setCurrentTurn("player");
        }
      }, 1000);

      setCurrentTurn("monster");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      {/* 背景エフェクト */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 z-0"
        style={{
          backgroundImage: `url('${
            quest.backgroundPath || "/images/scene/battle.jpg"
          }')`,
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-6 py-6">
        {/* バトル情報 */}
        <div className="flex justify-between items-center mb-6">
          <div className="w-[45%]">
            <h3 className="text-white text-xl font-bold mb-2">プレイヤー</h3>
            <div className="flex items-center space-x-2">
              <Progress
                value={playerHp}
                className="h-6"
                indicatorColor="bg-green-600"
              />
              <span className="text-white text-lg font-mono">
                {playerHp}/100
              </span>
            </div>
          </div>
          <div className="w-[45%] text-right">
            <h3 className="text-white text-xl font-bold mb-2">
              {quest.monsterName}
            </h3>
            <div className="flex items-center space-x-2 justify-end">
              <span className="text-white text-lg font-mono">
                {monsterHp}/100
              </span>
              <Progress
                value={monsterHp}
                className="h-6"
                indicatorColor="bg-red-600"
              />
            </div>
          </div>
        </div>

        {/* キャラクター表示 */}
        <div className="flex justify-between items-center my-8">
          <div className="w-[40%] flex justify-center">
            <div className="relative w-72 h-72">
              <Image
                src="/images/male-characters/m-thief.png"
                alt="プレイヤー"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="w-[20%] text-center">
            <div className="text-8xl font-bold text-red-500 opacity-80">VS</div>
          </div>
          <div className="w-[40%] flex justify-center">
            <div className="relative w-80 h-80">
              <Image
                src={quest.imagePath}
                alt={quest.monsterName}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* バトルログ */}
        <div className="bg-gray-900/80 border border-purple-800/50 rounded-lg p-5 mb-8 h-40 overflow-y-auto">
          <h3 className="text-purple-300 font-bold mb-2 text-sm">バトルログ</h3>
          <div className="space-y-1">
            {battleLogs.map((log, index) => (
              <p key={index} className="text-white/90 text-sm">
                {log}
              </p>
            ))}
          </div>
        </div>

        {/* コマンド */}
        <div className="grid grid-cols-2 gap-6 mt-auto mb-8">
          <Button
            onClick={() => handleCommand("attack")}
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 py-8 text-2xl"
            disabled={currentTurn === "monster" || isBattleOver}
          >
            攻撃
          </Button>
          <Button
            onClick={() => handleCommand("defend")}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 py-8 text-2xl"
            disabled={currentTurn === "monster" || isBattleOver}
          >
            防御
          </Button>
          <Button
            onClick={() => handleCommand("special")}
            className="bg-gradient-to-r from-yellow-600 to-amber-800 hover:from-yellow-700 hover:to-amber-900 py-8 text-2xl"
            disabled={currentTurn === "monster" || isBattleOver}
          >
            必殺技
          </Button>
          <Button
            onClick={() => handleCommand("escape")}
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 py-8 text-2xl"
            disabled={currentTurn === "monster" || isBattleOver}
          >
            逃げる
          </Button>
        </div>
      </div>

      {/* バトル結果モーダル */}
      <BattleResultModal
        isOpen={showResultModal}
        onClose={() => setShowResultModal(false)}
        isVictory={isVictory}
        expGained={isVictory ? calculateExpGained() : 0}
        monsterName={quest.monsterName}
        monsterImage={quest.imagePath}
      />
    </div>
  );
}
