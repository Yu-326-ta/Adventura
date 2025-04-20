"use client";

import { Button } from "@/components/ui/button";

export function AuthButtons() {
  return (
    <div className="flex gap-4">
      <Button
        variant="ghost"
        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white hover:text-white transition-all hover:scale-105"
      >
        ログイン
      </Button>
      <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white transition-all hover:scale-105">
        新規登録
      </Button>
    </div>
  );
}
