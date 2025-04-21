"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface QuestDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  quest: {
    id: number;
    title: string;
    difficulty: number;
    recommendedLevel: number;
    imagePath: string;
    description: string;
  };
}

export function QuestDetailModal({
  isOpen,
  onClose,
  quest,
}: QuestDetailModalProps) {
  const router = useRouter();

  const renderDifficulty = (level: number) => {
    return Array(level).fill("★").join("");
  };

  const handleBattleStart = () => {
    router.push(`/quest/${quest.id}/battle`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border border-indigo-500/10 backdrop-blur-xl max-w-2xl">
        <div className="relative">
          {/* 装飾的な背景エフェクト */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />

          {/* コンテンツ */}
          <div className="relative z-10">
            {/* ヘッダー部分 */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-indigo-400 bg-clip-text text-transparent">
                {quest.title}
              </h2>
              <div className="mt-2 flex justify-center gap-6 text-sm">
                <p className="text-white/90">
                  難易度:{" "}
                  <span className="text-indigo-300 font-medium tracking-wider">
                    {renderDifficulty(quest.difficulty)}
                  </span>
                </p>
                <p className="text-white/90">
                  推奨レベル:{" "}
                  <span className="text-indigo-300 font-medium">
                    Lv. {quest.recommendedLevel}
                  </span>
                </p>
              </div>
            </div>

            {/* 画像部分 */}
            <div className="relative w-full h-64 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-purple-500/20 z-10 rounded-lg" />
              <Image
                src={quest.imagePath}
                alt={quest.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* 説明文 */}
            <div className="mb-8">
              <h3 className="text-white/80 text-sm mb-2">クエスト詳細</h3>
              <p className="text-white/90 leading-relaxed">
                {quest.description}
              </p>
            </div>

            {/* アクションボタン */}
            <div className="flex justify-end gap-4">
              <Button
                variant="ghost"
                onClick={onClose}
                className="text-white/70 hover:text-white hover:bg-white/10"
              >
                閉じる
              </Button>
              <Button
                onClick={handleBattleStart}
                className="relative px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:from-indigo-400 hover:to-purple-400 hover:scale-105 shadow-lg"
              >
                <span className="relative z-10">バトル開始</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
