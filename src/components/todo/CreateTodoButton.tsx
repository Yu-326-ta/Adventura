"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  rpgButtonBase,
  rpgButtonGradient,
  rpgButtonBorder,
  TAGS,
} from "./styles";

export function CreateTodoButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`${rpgButtonBase} ${rpgButtonGradient} ${rpgButtonBorder} bg-purple-600 border-purple-700 hover:bg-purple-500`}
        >
          <Plus className="w-5 h-5 mr-2" />
          タスクの追加
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-black/95 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle>新しいタスク</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
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
            <div className="flex gap-2">
              {TAGS.map((tag) => (
                <Button
                  key={tag.id}
                  variant="outline"
                  size="sm"
                  className={`${rpgButtonBase} ${rpgButtonBorder} bg-gradient-to-r ${tag.bgColor} border-${tag.color}-700 hover:brightness-110`}
                >
                  {tag.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <DialogTrigger asChild>
            <Button variant="ghost" className="text-white hover:bg-white/10">
              キャンセル
            </Button>
          </DialogTrigger>
          <Button
            className={`${rpgButtonBase} ${rpgButtonGradient} ${rpgButtonBorder} bg-purple-600 border-purple-700 hover:bg-purple-500`}
          >
            作成
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
