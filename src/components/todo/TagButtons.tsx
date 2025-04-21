"use client";

import { Button } from "@/components/ui/button";

// RPGスタイルのボタンのベースクラス
const rpgButtonBase =
  "relative px-4 py-2 text-white font-medium transition-all duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)] active:translate-y-0.5 active:shadow-none disabled:opacity-50";
const rpgButtonBorder = "border-2 border-b-4 rounded-md";

const TAGS = [
  { id: 1, name: "重要", color: "blue", bgColor: "from-blue-500 to-blue-600" },
  { id: 2, name: "緊急", color: "red", bgColor: "from-red-500 to-red-600" },
  {
    id: 3,
    name: "通常",
    color: "green",
    bgColor: "from-green-500 to-green-600",
  },
];

export function TagButtons() {
  return (
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
  );
}
