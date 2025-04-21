import { Header } from "@/components/header";
import { Input } from "@/components/ui/input";
import { EditButtons } from "@/components/todo/EditButtons";
import { TagButtons } from "@/components/todo/TagButtons";

export default function TodoEditPage({ params }: { params: { id: string } }) {
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

        {/* 編集フォーム */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="bg-black/80 backdrop-blur-md border border-white/10 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-white mb-8">タスクの編集</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-white/80">タイトル</label>
                <Input
                  placeholder="タスクのタイトル"
                  className="bg-black/50 border-white/10 text-white placeholder:text-white/40"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80">説明</label>
                <textarea
                  className="w-full h-24 rounded-md bg-black/50 border border-white/10 text-white placeholder:text-white/40 p-2 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="タスクの説明"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80">期限</label>
                <Input
                  type="date"
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80">タグ</label>
                <TagButtons />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/80">ステータス</label>
                <select className="w-full rounded-md bg-black/50 border border-white/10 text-white p-2 focus:outline-none focus:ring-2 focus:ring-white/20">
                  <option value="1">未着手</option>
                  <option value="2">着手中</option>
                  <option value="3">終了済み</option>
                </select>
              </div>

              <EditButtons />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
