"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BattleResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  isVictory: boolean;
  expGained?: number;
  monsterName: string;
  monsterImage: string;
}

export function BattleResultModal({
  isOpen,
  onClose,
  isVictory,
  expGained = 0,
  monsterName,
  monsterImage,
}: BattleResultModalProps) {
  const router = useRouter();

  const handleBackToTodo = () => {
    router.push("/todo");
  };

  const handleBackToQuests = () => {
    router.push("/quests");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border border-indigo-500/10 backdrop-blur-xl max-w-2xl">
        <div className="relative">
          {/* 装飾的な背景エフェクト - 勝利or敗北で色を変える */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${
              isVictory
                ? "from-green-500/10 to-transparent"
                : "from-red-500/10 to-transparent"
            } pointer-events-none`}
          />

          {/* コンテンツ */}
          <div className="relative z-10">
            {/* ヘッダー部分 */}
            <div className="text-center mb-6">
              <h2
                className={`text-3xl font-bold bg-gradient-to-r ${
                  isVictory
                    ? "from-green-200 to-emerald-400"
                    : "from-red-200 to-rose-400"
                } bg-clip-text text-transparent`}
              >
                {isVictory ? "バトル勝利！" : "バトル敗北..."}
              </h2>
            </div>

            {/* モンスター画像 */}
            <div className="relative w-full h-48 mb-6 flex justify-center">
              <div className="relative w-48 h-48">
                {isVictory && (
                  <div className="absolute inset-0 bg-red-500/20 animate-pulse rounded-full blur-md" />
                )}
                <Image
                  src={monsterImage}
                  alt={monsterName}
                  fill
                  className={`object-contain ${
                    isVictory
                      ? "opacity-50"
                      : "drop-shadow-[0_0_8px_rgba(255,0,0,0.5)]"
                  }`}
                />
                {isVictory && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/80 transform -rotate-12">
                      DEFEATED
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 結果の説明 */}
            <div className="mb-8 text-center">
              {isVictory ? (
                <>
                  <p className="text-white/90 text-lg mb-4">
                    {monsterName}を倒しました！
                  </p>
                  <div className="bg-black/50 rounded-lg p-4 mb-4 inline-block">
                    <p className="text-white/80 mb-1">獲得報酬</p>
                    <p className="text-xl font-bold text-yellow-300">
                      経験値 +{expGained}
                    </p>
                  </div>
                </>
              ) : (
                <p className="text-white/90 text-lg mb-4">
                  {monsterName}に敗北しました...
                </p>
              )}
            </div>

            {/* アクションボタン */}
            <div className="flex justify-center gap-4">
              <Button
                onClick={handleBackToQuests}
                className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                クエスト一覧に戻る
              </Button>
              <Button
                onClick={handleBackToTodo}
                className="bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                TODOに戻る
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
