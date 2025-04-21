// RPGスタイルのボタンのベースクラス
export const rpgButtonBase =
  "relative transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0";
export const rpgButtonGradient = "bg-opacity-90 hover:bg-opacity-100";
export const rpgButtonBorder = "border-2 shadow-md hover:shadow-lg";

export const TAGS = [
  { id: 1, name: "重要", color: "blue", bgColor: "from-blue-500 to-blue-600" },
  { id: 2, name: "緊急", color: "red", bgColor: "from-red-500 to-red-600" },
  {
    id: 3,
    name: "通常",
    color: "green",
    bgColor: "from-green-500 to-green-600",
  },
];

export const LANES = [
  { id: 1, title: "未着手", color: "border-red-500/30", icon: "🗡️" },
  { id: 2, title: "着手中", color: "border-yellow-500/30", icon: "⚔️" },
  { id: 3, title: "終了済み", color: "border-green-500/30", icon: "🛡️" },
];
