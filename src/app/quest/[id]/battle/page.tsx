"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QUESTS } from "@/data/quests";
import { BattleResultModal } from "@/components/battle/BattleResultModal";

interface PartyMember {
  id: number;
  name: string;
  imagePath: string;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  level: number;
  hasActed: boolean;
}

export default function BattlePage() {
  const params = useParams();
  const router = useRouter();
  const questId = Number(params.id);
  const quest = QUESTS.find((q) => q.id === questId);

  // パーティーメンバーの初期化
  const [partyMembers, setPartyMembers] = useState<PartyMember[]>([
    {
      id: 1,
      name: "ロック",
      imagePath: "/images/male-characters/m-thief.png",
      hp: 66,
      maxHp: 100,
      mp: 13,
      maxMp: 50,
      level: 9,
      hasActed: false,
    },
    {
      id: 2,
      name: "ハッサン",
      imagePath: "/images/male-characters/m-warrior.png",
      hp: 71,
      maxHp: 120,
      mp: 0,
      maxMp: 10,
      level: 8,
      hasActed: false,
    },
    {
      id: 3,
      name: "ビアンカ",
      imagePath: "/images/female-characters/f-wizard.png",
      hp: 45,
      maxHp: 80,
      mp: 35,
      maxMp: 80,
      level: 10,
      hasActed: false,
    },
  ]);

  const [monsterHp, setMonsterHp] = useState(100);
  const [battleLogs, setBattleLogs] = useState<string[]>([
    "バトルが始まりました！",
  ]);
  const [currentTurn, setCurrentTurn] = useState<"player" | "monster">(
    "player"
  );
  const [currentActingMember, setCurrentActingMember] = useState<number | null>(
    null
  );

  // 結果モーダル用の状態
  const [showResultModal, setShowResultModal] = useState(false);
  const [isBattleOver, setIsBattleOver] = useState(false);
  const [isVictory, setIsVictory] = useState(false);

  // クエストが見つからない場合は404へ
  if (!quest) {
    return <div>クエストが見つかりません</div>;
  }

  // パーティー全員のHPチェック
  const isPartyDefeated = partyMembers.every((member) => member.hp <= 0);

  // 全員行動済みかチェック
  const allMembersActed = partyMembers
    .filter((member) => member.hp > 0)
    .every((member) => member.hasActed);

  // バトル終了判定
  useEffect(() => {
    if (isBattleOver) return;

    // パーティー全員かモンスターのHPが0以下になったらバトル終了
    if (isPartyDefeated || monsterHp <= 0) {
      setIsBattleOver(true);
      setIsVictory(monsterHp <= 0);

      // バトル結果のログを追加
      if (monsterHp <= 0) {
        setBattleLogs((prev) => [
          ...prev,
          `${quest.monsterName}を倒しました！勝利！`,
        ]);
      } else {
        setBattleLogs((prev) => [
          ...prev,
          "パーティーは全滅してしまった...敗北...",
        ]);
      }

      // 1秒後に結果モーダルを表示
      setTimeout(() => {
        setShowResultModal(true);
      }, 1000);
    }
  }, [isPartyDefeated, monsterHp, isBattleOver, quest.monsterName]);

  // プレイヤーターンが終了したときの処理
  useEffect(() => {
    if (currentTurn === "player" && allMembersActed && !isBattleOver) {
      // 少し待ってからモンスターターンに移行
      setTimeout(() => {
        setCurrentTurn("monster");
        // モンスターの攻撃処理
        if (monsterHp > 0) {
          const aliveMembers = partyMembers.filter((member) => member.hp > 0);
          if (aliveMembers.length > 0) {
            // ランダムなパーティーメンバーを攻撃対象に
            const targetMember =
              aliveMembers[Math.floor(Math.random() * aliveMembers.length)];
            const monsterDamage = Math.max(
              1,
              Math.floor(Math.random() * 15) + 5
            );
            const monsterLogMessage = `${quest.monsterName}の攻撃！${targetMember.name}に${monsterDamage}のダメージ！`;
            setBattleLogs((prev) => [...prev, monsterLogMessage]);

            // パーティーメンバーのHPを減らす
            setPartyMembers((prev) =>
              prev.map((member) =>
                member.id === targetMember.id
                  ? { ...member, hp: Math.max(0, member.hp - monsterDamage) }
                  : member
              )
            );
          }
        }

        // モンスターターン終了後、プレイヤーターンに戻す
        setTimeout(() => {
          setCurrentTurn("player");
          setCurrentActingMember(null);
          // 全員の行動フラグをリセット
          setPartyMembers((prev) =>
            prev.map((member) => ({ ...member, hasActed: false }))
          );
        }, 1500);
      }, 1000);
    }
  }, [currentTurn, allMembersActed, isBattleOver, monsterHp, partyMembers]);

  // 経験値計算
  const calculateExpGained = () => {
    return Math.floor(quest.difficulty * quest.recommendedLevel * 10);
  };

  // コマンド実行時の処理
  const handleCommand = (command: string, memberId: number) => {
    // バトルが終了していたら何もしない
    if (isBattleOver || currentTurn === "monster") return;

    const member = partyMembers.find((m) => m.id === memberId);
    if (!member || member.hp <= 0 || member.hasActed) return;

    // プレイヤーの攻撃処理
    let damage = 0;
    let logMessage = "";
    let mpCost = 0;

    switch (command) {
      case "attack":
        damage = Math.floor(Math.random() * 15) + 10;
        logMessage = `${member.name}の攻撃！${quest.monsterName}に${damage}のダメージ！`;
        setMonsterHp((prev) => Math.max(0, prev - damage));
        break;
      case "defend":
        logMessage = `${member.name}は身を守っている！`;
        break;
      case "special":
        if (member.mp >= 10) {
          damage = Math.floor(Math.random() * 20) + 20;
          mpCost = 10;
          logMessage = `${member.name}の必殺技！${quest.monsterName}に${damage}のダメージ！`;
          setMonsterHp((prev) => Math.max(0, prev - damage));
          // MPを消費
          setPartyMembers((prev) =>
            prev.map((m) =>
              m.id === memberId
                ? { ...m, mp: m.mp - mpCost, hasActed: true }
                : m
            )
          );
        } else {
          logMessage = `${member.name}のMPが足りません！`;
          return;
        }
        break;
      case "escape":
        logMessage = "逃げ出した！";
        setBattleLogs((prev) => [...prev, logMessage]);
        setTimeout(() => router.push("/quests"), 1000);
        return;
    }

    // ログを追加
    setBattleLogs((prev) => [...prev, logMessage]);

    // そのメンバーを行動済みにする
    if (command !== "special") {
      setPartyMembers((prev) =>
        prev.map((m) => (m.id === memberId ? { ...m, hasActed: true } : m))
      );
    }

    setCurrentActingMember(null);
  };

  // 次に行動できるメンバーを取得
  const getNextActiveMember = () => {
    return partyMembers.find((member) => member.hp > 0 && !member.hasActed);
  };

  const nextActiveMember = getNextActiveMember();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-green-800 to-green-900 flex flex-col relative overflow-hidden">
      {/* 背景エフェクト */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{
          backgroundImage: `url('${
            quest.backgroundPath || "/images/scene/battle.jpg"
          }')`,
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col w-full max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
        {/* 上部パーティーステータス表示 */}
        <div className="flex gap-1 sm:gap-2 mb-4 pt-2">
          {partyMembers.map((member) => (
            <div
              key={member.id}
              className={`bg-black/90 border-2 rounded-lg p-1 sm:p-2 flex-1 ${
                nextActiveMember?.id === member.id &&
                currentTurn === "player" &&
                !member.hasActed
                  ? "border-yellow-400 shadow-lg shadow-yellow-400/50"
                  : member.hasActed
                  ? "border-gray-600"
                  : "border-white"
              }`}
            >
              {/* キャラクター画像と名前 */}
              <div className="flex items-center mb-1">
                <div className="relative w-6 h-6 sm:w-8 sm:h-8 mr-1 flex-shrink-0">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className={`object-contain pixelated ${
                      member.hp <= 0 ? "grayscale opacity-50" : ""
                    }`}
                    style={{ imageRendering: "pixelated" }}
                  />
                </div>
                <div
                  className={`font-bold text-xs ${
                    member.hp <= 0
                      ? "text-gray-500"
                      : member.hasActed
                      ? "text-gray-400"
                      : "text-white"
                  }`}
                >
                  {member.name}
                </div>
              </div>

              {/* ステータス */}
              <div className="space-y-1 text-white text-xs">
                {/* HP */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>H</span>
                    <span>{member.hp}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div
                      className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(member.hp / member.maxHp) * 100}%` }}
                    />
                  </div>
                </div>

                {/* MP */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>M</span>
                    <span>{member.mp}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div
                      className="bg-yellow-500 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${(member.mp / member.maxMp) * 100}%` }}
                    />
                  </div>
                </div>

                {/* レベル */}
                <div className="flex justify-between">
                  <span className="text-xs">LV</span>
                  <span className="text-xs">{member.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ターン表示 */}
        <div className="text-center mb-2 sm:mb-4">
          <div className="text-white text-sm sm:text-lg font-bold">
            {currentTurn === "player"
              ? nextActiveMember
                ? `${nextActiveMember.name}のターン`
                : "プレイヤーターン終了"
              : "モンスターのターン"}
          </div>
        </div>

        {/* 中央モンスター表示 */}
        <div className="flex-1 flex justify-center items-center py-4 sm:py-8">
          <div className="flex flex-col items-center">
            <div className="text-white text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              {quest.monsterName}
            </div>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64">
              <Image
                src={quest.imagePath}
                alt={quest.monsterName}
                fill
                className="object-contain pixelated"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            {/* モンスターHP表示 */}
            <div className="mt-2 sm:mt-4 bg-black/80 border-2 border-white rounded-lg p-2 w-full max-w-[200px] sm:min-w-[150px]">
              <div className="text-white text-xs sm:text-sm text-center">
                HP: {monsterHp}/100
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 sm:h-3 mt-1">
                <div
                  className="bg-red-500 h-2 sm:h-3 rounded-full transition-all duration-300"
                  style={{ width: `${monsterHp}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 下部UI */}
        <div className="mt-auto">
          {/* バトルログ */}
          <div className="bg-black/90 border-2 border-white rounded-lg p-2 sm:p-4 mb-2 sm:mb-4 h-24 sm:h-32 overflow-y-auto">
            <div className="space-y-1">
              {battleLogs.slice(-5).map((log, index) => (
                <p
                  key={index}
                  className="text-white text-xs sm:text-sm font-mono"
                >
                  {log}
                </p>
              ))}
            </div>
          </div>

          {/* コマンドメニュー */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <Button
              onClick={() =>
                nextActiveMember && handleCommand("attack", nextActiveMember.id)
              }
              className="bg-red-700 hover:bg-red-600 border-2 border-white text-white text-sm sm:text-xl py-4 sm:py-6 font-bold"
              disabled={
                currentTurn === "monster" ||
                isBattleOver ||
                isPartyDefeated ||
                !nextActiveMember
              }
            >
              <span className="block sm:hidden">⚔️</span>
              <span className="hidden sm:block">⚔️ たたかう</span>
            </Button>
            <Button
              onClick={() =>
                nextActiveMember && handleCommand("defend", nextActiveMember.id)
              }
              className="bg-blue-700 hover:bg-blue-600 border-2 border-white text-white text-sm sm:text-xl py-4 sm:py-6 font-bold"
              disabled={
                currentTurn === "monster" ||
                isBattleOver ||
                isPartyDefeated ||
                !nextActiveMember
              }
            >
              <span className="block sm:hidden">🛡️</span>
              <span className="hidden sm:block">🛡️ ぼうぎょ</span>
            </Button>
            <Button
              onClick={() =>
                nextActiveMember &&
                handleCommand("special", nextActiveMember.id)
              }
              className="bg-yellow-700 hover:bg-yellow-600 border-2 border-white text-white text-sm sm:text-xl py-4 sm:py-6 font-bold"
              disabled={
                currentTurn === "monster" ||
                isBattleOver ||
                isPartyDefeated ||
                !nextActiveMember ||
                (nextActiveMember?.mp || 0) < 10
              }
            >
              <span className="block sm:hidden">✨</span>
              <span className="hidden sm:block">✨ とくぎ</span>
            </Button>
            <Button
              onClick={() => handleCommand("escape", 0)}
              className="bg-gray-700 hover:bg-gray-600 border-2 border-white text-white text-sm sm:text-xl py-4 sm:py-6 font-bold"
              disabled={currentTurn === "monster" || isBattleOver}
            >
              <span className="block sm:hidden">💨</span>
              <span className="hidden sm:block">💨 にげる</span>
            </Button>
          </div>
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

      <style jsx global>{`
        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
      `}</style>
    </div>
  );
}
