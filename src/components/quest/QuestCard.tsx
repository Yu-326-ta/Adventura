"use client";

import Image from "next/image";
import { useState } from "react";
import { QuestDetailModal } from "./QuestDetailModal";

interface QuestCardProps {
  id: number;
  title: string;
  difficulty: number;
  recommendedLevel: number;
  imagePath: string;
  description: string;
}

export function QuestCard({
  id,
  title,
  difficulty,
  recommendedLevel,
  imagePath,
  description,
}: QuestCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderDifficulty = (level: number) => {
    return Array(level).fill("★").join("");
  };

  return (
    <>
      <div
        className="relative group my-4 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* カードの装飾的な背景（ボーダー効果） */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl blur-sm transform scale-[1.02] group-hover:scale-[1.03] transition-transform duration-300" />

        {/* メインのカード */}
        <div className="relative bg-black/40 backdrop-blur-md rounded-lg overflow-hidden transform transition-all duration-300 group-hover:scale-[1.01] border border-white/10 group-hover:border-indigo-400/20">
          <div className="flex items-center">
            {/* テキスト部分 */}
            <div className="flex-1 p-5 text-white">
              {/* タイトル部分の装飾 */}
              <div className="relative mb-4">
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-200 to-indigo-400 bg-clip-text text-transparent">
                  {title}
                </h3>
                <div className="absolute bottom-0 left-0 w-16 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent" />
              </div>

              <div className="space-y-2">
                <p className="text-white/90 flex items-center gap-2">
                  <span className="text-white/70">難易度:</span>
                  <span className="text-indigo-300 font-medium tracking-wider">
                    {renderDifficulty(difficulty)}
                  </span>
                </p>
                <p className="text-white/90 flex items-center gap-2">
                  <span className="text-white/70">推奨レベル:</span>
                  <span className="text-indigo-300 font-medium">
                    Lv. {recommendedLevel}
                  </span>
                </p>
              </div>
            </div>

            {/* 画像部分 */}
            <div className="relative w-44 h-36 flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/10 to-purple-500/20 z-10 rounded-lg" />
              <Image
                src={imagePath}
                alt={title}
                fill
                className="object-contain rounded-lg scale-75"
              />
            </div>
          </div>
        </div>

        {/* ホバー時のグロー効果 */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg blur-xl" />
        </div>
      </div>

      <QuestDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        quest={{
          id,
          title,
          difficulty,
          recommendedLevel,
          imagePath,
          description,
        }}
      />
    </>
  );
}
