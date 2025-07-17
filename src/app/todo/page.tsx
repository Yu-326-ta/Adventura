"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { TodoCard } from "@/components/todo/TodoCard";
import { CreateTodoButton } from "@/components/todo/CreateTodoButton";
import { FilterTagsButton } from "@/components/todo/FilterTagsButton";
import { LANES } from "@/components/todo/styles";
import { useState } from "react";

interface BattleMonster {
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

interface PlayerCharacter {
  id: string;
  name: string;
  image_url: string;
  level: number;
  experience: number;
  maxExp: number;
  hp: number;
  maxHp: number;
  attack: number;
  defense: number;
  speed: number;
  job: string;
}

export default function TodoPage() {
  // プレイヤーキャラクター
  const [playerCharacter] = useState<PlayerCharacter>({
    id: "player",
    name: "ゆうた",
    image_url: "/images/male-characters/m-warrior.png",
    level: 50,
    experience: 75,
    maxExp: 100,
    hp: 480,
    maxHp: 500,
    attack: 85,
    defense: 72,
    speed: 68,
    job: "せんし",
  });

  // バトルパーティー（モンスター1、キャラクター、モンスター2）
  const [monster1, setMonster1] = useState<BattleMonster | null>({
    id: "1",
    name: "キノコ",
    image_url: "/images/monsters/mashroom/mashroom.png",
    level: 3,
    experience: 45,
    maxExp: 100,
    hp: 120,
    attack: 25,
    defense: 15,
  });

  const [monster2, setMonster2] = useState<BattleMonster | null>({
    id: "2",
    name: "ゴーレム",
    image_url: "/images/monsters/golem/golem.png",
    level: 5,
    experience: 120,
    maxExp: 200,
    hp: 250,
    attack: 45,
    defense: 65,
  });

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/forest.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-6 sm:py-12">
        <Header />

        {/* バトルパーティーセクション */}
        <div className="mt-12 sm:mt-24 flex justify-center items-center">
          {/* バトルパーティー */}
          <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-4 sm:p-6 w-full max-w-4xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-center">
              バトルパーティー
            </h3>
            <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
              {/* モンスター1 */}
              {monster1 ? (
                <div className="bg-black/40 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10 hover:border-purple-400/50 transition-all duration-300 w-32 sm:w-48 h-52 sm:h-64">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* モンスター画像 */}
                    <div className="relative w-10 sm:w-16 h-10 sm:h-16 flex-shrink-0 mb-1 sm:mb-2">
                      <Image
                        src={monster1.image_url}
                        alt={monster1.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* モンスター情報 */}
                    <div className="flex-1 w-full">
                      <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">
                        {monster1.name}
                      </h4>

                      {/* レベル */}
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-xs">Lv:</span>
                        <span className="text-yellow-400 text-xs">
                          {monster1.level}
                        </span>
                      </div>

                      {/* EXP バー */}
                      <div className="mb-1 sm:mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-xs">EXP:</span>
                          <span className="text-blue-400 text-xs">
                            {monster1.experience}/{monster1.maxExp}
                          </span>
                        </div>
                        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                            style={{
                              width: `${
                                (monster1.experience / monster1.maxExp) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* 能力ステータス */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">HP</span>
                          <span className="text-green-400 text-xs font-semibold">
                            {monster1.hp}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">攻撃</span>
                          <span className="text-red-400 text-xs font-semibold">
                            {monster1.attack}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">防御</span>
                          <span className="text-blue-400 text-xs font-semibold">
                            {monster1.defense}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-black/20 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10 border-dashed w-32 sm:w-48 h-52 sm:h-64">
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <div className="w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center mb-1 sm:mb-2">
                      <div className="text-white/30 text-2xl sm:text-4xl">
                        ?
                      </div>
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm mb-1">
                      空きスロット
                    </div>
                    <div className="text-white/30 text-xs">
                      モンスターを設定してください
                    </div>
                  </div>
                </div>
              )}

              {/* プレイヤーキャラクター */}
              <div className="bg-black/40 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10 hover:border-yellow-400/50 transition-all duration-300 w-32 sm:w-48 h-52 sm:h-64">
                <div className="flex flex-col items-center text-center h-full">
                  {/* キャラクター画像 */}
                  <div className="relative w-10 sm:w-16 h-10 sm:h-16 flex-shrink-0 mb-1 sm:mb-2">
                    <Image
                      src={playerCharacter.image_url}
                      alt={playerCharacter.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* キャラクター情報 */}
                  <div className="flex-1 w-full">
                    <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">
                      {playerCharacter.name}
                    </h4>

                    {/* レベル */}
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300 text-xs">Lv:</span>
                      <span className="text-yellow-400 text-xs">
                        {playerCharacter.level}
                      </span>
                    </div>

                    {/* EXP バー */}
                    <div className="mb-1 sm:mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-xs">EXP:</span>
                        <span className="text-blue-400 text-xs">
                          {playerCharacter.experience}/{playerCharacter.maxExp}
                        </span>
                      </div>
                      <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                          style={{
                            width: `${
                              (playerCharacter.experience /
                                playerCharacter.maxExp) *
                              100
                            }%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* 能力ステータス */}
                    <div className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">HP</span>
                        <span className="text-green-400 text-xs font-semibold">
                          {playerCharacter.maxHp}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">攻撃</span>
                        <span className="text-red-400 text-xs font-semibold">
                          {playerCharacter.attack}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-xs">防御</span>
                        <span className="text-blue-400 text-xs font-semibold">
                          {playerCharacter.defense}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* モンスター2 */}
              {monster2 ? (
                <div className="bg-black/40 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10 hover:border-purple-400/50 transition-all duration-300 w-32 sm:w-48 h-52 sm:h-64">
                  <div className="flex flex-col items-center text-center h-full">
                    {/* モンスター画像 */}
                    <div className="relative w-10 sm:w-16 h-10 sm:h-16 flex-shrink-0 mb-1 sm:mb-2">
                      <Image
                        src={monster2.image_url}
                        alt={monster2.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* モンスター情報 */}
                    <div className="flex-1 w-full">
                      <h4 className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2">
                        {monster2.name}
                      </h4>

                      {/* レベル */}
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 text-xs">Lv:</span>
                        <span className="text-yellow-400 text-xs">
                          {monster2.level}
                        </span>
                      </div>

                      {/* EXP バー */}
                      <div className="mb-1 sm:mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-xs">EXP:</span>
                          <span className="text-blue-400 text-xs">
                            {monster2.experience}/{monster2.maxExp}
                          </span>
                        </div>
                        <div className="relative h-1 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400"
                            style={{
                              width: `${
                                (monster2.experience / monster2.maxExp) * 100
                              }%`,
                            }}
                          />
                        </div>
                      </div>

                      {/* 能力ステータス */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">HP</span>
                          <span className="text-green-400 text-xs font-semibold">
                            {monster2.hp}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">攻撃</span>
                          <span className="text-red-400 text-xs font-semibold">
                            {monster2.attack}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 text-xs">防御</span>
                          <span className="text-blue-400 text-xs font-semibold">
                            {monster2.defense}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-black/20 backdrop-blur-md rounded-lg p-2 sm:p-3 border border-white/10 border-dashed w-32 sm:w-48 h-52 sm:h-64">
                  <div className="flex flex-col items-center justify-center text-center h-full">
                    <div className="w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center mb-1 sm:mb-2">
                      <div className="text-white/30 text-2xl sm:text-4xl">
                        ?
                      </div>
                    </div>
                    <div className="text-white/50 text-xs sm:text-sm mb-1">
                      空きスロット
                    </div>
                    <div className="text-white/30 text-xs">
                      モンスターを設定してください
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Todo検索・フィルターセクション */}
        <div className="mt-8 sm:mt-12 space-y-3 sm:space-y-0 sm:flex sm:gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-4 sm:w-5 h-4 sm:h-5" />
            <Input
              placeholder="タスクを検索..."
              className="pl-9 sm:pl-10 bg-black/20 border-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/20 h-10 sm:h-auto"
            />
          </div>
          <div className="flex gap-2 sm:gap-0">
            <div className="flex-1 sm:flex-none">
              <FilterTagsButton />
            </div>
            <div className="flex-1 sm:flex-none">
              <CreateTodoButton />
            </div>
          </div>
        </div>

        {/* Todoレーン一覧 */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {LANES.map((lane) => (
            <div
              key={lane.id}
              className={`bg-black/20 backdrop-blur-md rounded-lg border-t-4 ${lane.color}`}
            >
              {/* レーンヘッダー */}
              <div className="p-3 sm:p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">{lane.icon}</span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {lane.title}
                  </h3>
                </div>
              </div>

              {/* レーンコンテンツ */}
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 min-h-[300px] sm:min-h-[400px]">
                {/* プレースホルダーカード */}
                {[1, 2].map((i) => (
                  <TodoCard key={i} id={i} laneId={lane.id} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
