"use client";

import { Button } from "@/components/ui/button";

// RPGスタイルのボタンのベースクラス
const rpgButtonBase =
  "relative px-4 py-2 text-white font-medium transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] active:translate-y-0.5 active:shadow-none disabled:opacity-50";
const rpgButtonGradient =
  "bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-transparent";
const rpgButtonBorder = "border-2 border-b-4 rounded-md";

export function EditButtons() {
  return (
    <div className="flex justify-end gap-4 mt-8">
      <Button
        variant="ghost"
        className="text-white hover:bg-white/10"
        onClick={() => window.history.back()}
      >
        キャンセル
      </Button>
      <Button
        className={`${rpgButtonBase} ${rpgButtonGradient} ${rpgButtonBorder} bg-purple-600 border-purple-700 hover:bg-purple-500`}
      >
        更新
      </Button>
    </div>
  );
}
