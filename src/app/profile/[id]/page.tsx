"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
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
  startDate: Date;
  username: string;
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
    startDate: new Date(2023, 3, 15), // 2023年4月15日
    username: "ゆうた",
  });

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

                {/* 開始日 */}
                <div className="flex items-center">
                  <span className="text-white text-xl mr-2">開始日：</span>
                  <span className="text-gray-300 text-xl">
                    {format(stats.startDate, "yyyy年MM月dd日", { locale: ja })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
