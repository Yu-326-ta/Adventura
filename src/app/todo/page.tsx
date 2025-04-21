import Image from "next/image";
import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { TodoCard } from "@/components/todo/TodoCard";
import { CreateTodoButton } from "@/components/todo/CreateTodoButton";
import { FilterTagsButton } from "@/components/todo/FilterTagsButton";
import { LANES } from "@/components/todo/styles";

export default function TodoPage() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center relative"
      style={{ backgroundImage: "url('/images/scene/forest.jpg')" }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-black/40" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Header />

        {/* キャラクターとステータスセクション */}
        <div className="mt-24 flex justify-center items-center gap-8">
          {/* キャラクター画像 */}
          <div className="relative w-40 h-40">
            <Image
              src="/images/male-characters/m-warrior.png"
              alt="キャラクター"
              fill
              className="object-contain"
            />
          </div>

          {/* ステータスカード */}
          <div className="w-96 bg-black/20 backdrop-blur-md border border-white/10 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-bold">ゆうた</h2>
            <div className="mt-4 space-y-3">
              <p className="text-lg text-white/90">職業：せんし</p>
              <div>
                <p className="text-lg text-white/90">Lv：50</p>
                <div className="w-full h-3 bg-white/10 rounded-full mt-2">
                  <div className="w-3/4 h-full bg-yellow-500/70 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Todo検索・フィルターセクション */}
        <div className="mt-12 flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
            <Input
              placeholder="タスクを検索..."
              className="pl-10 bg-black/20 border-white/10 text-white placeholder:text-white/60 focus-visible:ring-white/20"
            />
          </div>
          <FilterTagsButton />
          <CreateTodoButton />
        </div>

        {/* Todoレーン一覧 */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {LANES.map((lane) => (
            <div
              key={lane.id}
              className={`bg-black/20 backdrop-blur-md rounded-lg border-t-4 ${lane.color}`}
            >
              {/* レーンヘッダー */}
              <div className="p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{lane.icon}</span>
                  <h3 className="text-lg font-bold text-white">{lane.title}</h3>
                </div>
              </div>

              {/* レーンコンテンツ */}
              <div className="p-4 space-y-4 min-h-[400px]">
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
