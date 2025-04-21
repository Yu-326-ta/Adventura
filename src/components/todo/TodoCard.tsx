"use client";

import Link from "next/link";
import { StatusUpdateButton } from "@/components/todo/StatusUpdateButton";

export function TodoCard({ id, laneId }: { id: number; laneId: number }) {
  return (
    <Link href={`/todo/${id}/edit`} className="block">
      <div className="bg-black/30 border border-white/10 rounded-lg p-4 text-white transform hover:scale-[1.02] transition-all duration-200 hover:bg-black/40 cursor-pointer">
        <div className="flex justify-between items-start">
          <h3 className="text-base font-semibold">タスクのタイトル</h3>
          <span
            className={`px-2 py-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-xs`}
          >
            重要
          </span>
        </div>
        <p className="mt-2 text-sm text-white/80">
          タスクの説明がここに入ります...
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-white/60">期限: 2024/03/20</span>
          <StatusUpdateButton laneId={laneId} />
        </div>
      </div>
    </Link>
  );
}
