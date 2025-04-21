"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProfileFormData {
  username: string;
  job: string;
  level: number;
  exp: number;
  maxExp: number;
  tasksCompleted: number;
  questsCleared: number;
  startDate: Date;
}

const JOB_CLASSES = [
  { id: "せんし", name: "せんし", description: "攻撃力が高い一般的な職業" },
  {
    id: "まほうつかい",
    name: "まほうつかい",
    description: "魔法攻撃が得意な職業",
  },
  { id: "そうりょ", name: "そうりょ", description: "回復魔法が得意な職業" },
  {
    id: "シーフ",
    name: "シーフ",
    description: "素早さとレアアイテム発見率が高い職業",
  },
];

export default function ProfileEditPage() {
  const params = useParams();
  const router = useRouter();
  const userId = params.id as string;

  const [formData, setFormData] = useState<ProfileFormData>({
    username: "",
    job: "せんし",
    level: 1,
    exp: 0,
    maxExp: 100,
    tasksCompleted: 0,
    questsCleared: 0,
    startDate: new Date(),
  });

  const [isLoading, setIsLoading] = useState(true);

  // プロフィール情報を取得（実際の実装ではAPIから取得する想定）
  useEffect(() => {
    // ここでユーザーIDに基づいてAPIからデータを取得する処理を実装
    // 例: fetchUserData(userId).then(data => setFormData(data));
    console.log(`Fetching profile data for user ID: ${userId}`);

    // モックデータの設定
    setTimeout(() => {
      setFormData({
        username: "ゆうた",
        job: "せんし",
        level: 50,
        exp: 75,
        maxExp: 100,
        tasksCompleted: 152,
        questsCleared: 24,
        startDate: new Date(2023, 3, 15), // 2023年4月15日
      });
      setIsLoading(false);
    }, 500);
  }, [userId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleJobChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      job: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ここでAPIにデータを送信する処理を実装
      // 例: await updateUserProfile(userId, formData);
      console.log("Submitting profile data:", formData);

      // 成功したら詳細ページにリダイレクト
      router.push(`/profile/${userId}`);
    } catch (error) {
      console.error("Error updating profile:", error);
      // エラー処理
    }
  };

  const handleCancel = () => {
    router.push(`/profile/${userId}`);
  };

  if (isLoading) {
    return (
      <main
        className="min-h-screen w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/scene/inn.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Header />
          <div className="mt-24 flex justify-center items-center">
            <div className="bg-black/70 backdrop-blur-md rounded-lg p-8 w-full max-w-lg">
              <p className="text-white text-center">読み込み中...</p>
            </div>
          </div>
        </div>
      </main>
    );
  }

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

        {/* プロフィール編集コンテンツ */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            プロフィール編集
          </h2>

          {/* 装飾的な区切り線 */}
          <div className="relative mb-12 overflow-hidden">
            <div className="absolute left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent" />
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-16 h-0.5 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* 左側：キャラクター画像 */}
                <div className="flex flex-col items-center">
                  <div className="relative w-64 h-64 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-4">
                    <Image
                      src="/images/male-characters/m-warrior.png"
                      alt={formData.username}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-black/70 backdrop-blur-md rounded-lg p-4 w-full border border-white/20 overflow-hidden">
                    <p className="text-center text-white text-sm mb-2">
                      キャラクター画像
                    </p>
                    <p className="text-center text-white/60 text-xs">
                      （現在、画像の変更はできません）
                    </p>
                  </div>
                </div>

                {/* 右側：編集フォーム */}
                <div className="bg-black/70 backdrop-blur-md rounded-lg p-6 shadow-xl border border-white/20 overflow-hidden">
                  <div className="space-y-6">
                    {/* ユーザー名 */}
                    <div>
                      <Label htmlFor="username" className="text-white">
                        名前
                      </Label>
                      <Input
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="bg-black/50 text-white border-white/20 focus:border-indigo-400 focus:ring-indigo-400/20"
                      />
                    </div>

                    {/* 職業選択 */}
                    <div>
                      <Label htmlFor="job" className="text-white mb-2 block">
                        職業
                      </Label>
                      <Select
                        value={formData.job}
                        onValueChange={handleJobChange}
                      >
                        <SelectTrigger className="bg-black/50 text-white border-white/20 focus:border-indigo-400 focus:ring-indigo-400/20">
                          <SelectValue placeholder="職業を選択" />
                        </SelectTrigger>
                        <SelectContent className="bg-black/90 text-white border-white/20">
                          {JOB_CLASSES.map((job) => (
                            <SelectItem key={job.id} value={job.id}>
                              {job.name} - {job.description}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* 表示のみの項目 */}
                    <div className="pt-4 border-t border-white/10">
                      <h3 className="text-white/80 text-sm mb-4">
                        ステータス情報（変更不可）
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="text-white/60 text-xs">
                            レベル
                          </Label>
                          <p className="text-indigo-300">{formData.level}</p>
                        </div>
                        <div>
                          <Label className="text-white/60 text-xs">
                            経験値
                          </Label>
                          <p className="text-indigo-300">
                            {formData.exp}/{formData.maxExp}
                          </p>
                        </div>
                        <div>
                          <Label className="text-white/60 text-xs">
                            達成タスク数
                          </Label>
                          <p className="text-green-400">
                            {formData.tasksCompleted}
                          </p>
                        </div>
                        <div>
                          <Label className="text-white/60 text-xs">
                            クリアクエスト数
                          </Label>
                          <p className="text-yellow-400">
                            {formData.questsCleared}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ボタングループ */}
              <div className="flex justify-center gap-4 mt-8">
                <Button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-2 rounded-lg shadow-lg"
                >
                  キャンセル
                </Button>
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-2 rounded-lg shadow-lg"
                >
                  保存する
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
