"use client";

import { Button } from "@/components/ui/button";

export function BackButton() {
  return (
    <Button
      onClick={() => window.history.back()}
      className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      size="lg"
    >
      前の場所に戻る
    </Button>
  );
}
