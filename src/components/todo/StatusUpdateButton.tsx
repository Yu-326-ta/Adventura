"use client";

import { Button } from "@/components/ui/button";
import { rpgButtonBase, rpgButtonBorder, rpgButtonGradient } from "./styles";

interface StatusUpdateButtonProps {
  laneId: number;
}

export function StatusUpdateButton({ laneId }: StatusUpdateButtonProps) {
  const handleStatusUpdate = (e: React.MouseEvent) => {
    e.preventDefault();
    // ここにステータス更新のロジックを実装
  };

  const buttonText = laneId === 3 ? "元に戻す" : "次へ";
  const buttonStyle =
    laneId === 3
      ? "bg-red-600 hover:bg-red-700 border-red-700"
      : "bg-blue-600 hover:bg-blue-700 border-blue-700";

  return (
    <Button
      onClick={handleStatusUpdate}
      className={`
        ${rpgButtonBase}
        ${rpgButtonGradient}
        ${rpgButtonBorder}
        ${buttonStyle}
        text-white font-bold py-2 px-4 rounded
      `}
    >
      {buttonText}
    </Button>
  );
}
