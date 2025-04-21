export interface Quest {
  id: number;
  title: string;
  difficulty: number;
  recommendedLevel: number;
  imagePath: string;
  backgroundPath: string;
  description: string;
  monsterName: string;
}

export const QUESTS: Quest[] = [
  {
    id: 1,
    title: "キノコの群生地を調査せよ",
    difficulty: 1,
    recommendedLevel: 1,
    imagePath: "/images/monsters/mashroom/mashroom.png",
    backgroundPath: "/images/monsters/mashroom/forest.jpg",
    description: "不思議な光を放つキノコが発見された。調査が必要だ。",
    monsterName: "ウィルオウィスプキノコ",
  },
  {
    id: 2,
    title: "暴れるゴーレムを鎮めよ",
    difficulty: 2,
    recommendedLevel: 10,
    imagePath: "/images/monsters/golem/golem.png",
    backgroundPath: "/images/monsters/golem/cave.jpg",
    description: "洞窟で暴れるゴーレムが現れた。早急な対処が必要だ。",
    monsterName: "ケイブゴーレム",
  },
  {
    id: 3,
    title: "スケルトンの軍団を撃退せよ",
    difficulty: 3,
    recommendedLevel: 20,
    imagePath: "/images/monsters/skelton/skeleton.png",
    backgroundPath: "/images/monsters/skelton/dungeon.jpg",
    description: "古城に出現したスケルトンの軍団。このままでは危険だ。",
    monsterName: "アンデッドナイト",
  },
  {
    id: 4,
    title: "デーモンの侵攻を食い止めよ",
    difficulty: 4,
    recommendedLevel: 30,
    imagePath: "/images/monsters/deamon/demon.png",
    backgroundPath: "/images/monsters/deamon/ship.jpg",
    description: "地獄から現れたデーモン。このままでは街が危ない！",
    monsterName: "ブラッドデーモン",
  },
  {
    id: 5,
    title: "ドラゴンの脅威に立ち向かえ",
    difficulty: 5,
    recommendedLevel: 40,
    imagePath: "/images/monsters/dorgon/dorgon.png",
    backgroundPath: "/images/monsters/dorgon/magma.jpg",
    description: "古城に棲みついた凶悪なドラゴン。討伐の依頼が来ている。",
    monsterName: "マグマドラゴン",
  },
  {
    id: 6,
    title: "魔王を倒し、世界に平和を！",
    difficulty: 5,
    recommendedLevel: 50,
    imagePath: "/images/monsters/devil/devil.png",
    backgroundPath: "/images/monsters/devil/castle.jpg",
    description: "ついに魔王の居城が判明。今こそ決着の時！",
    monsterName: "魔王デスフェルド",
  },
];
