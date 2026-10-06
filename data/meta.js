// 全体メタ情報。パッチ更新時はここを書き換える。
window.OW = window.OW || { heroes: {}, order: [] };

OW.meta = {
  latestPatch: "2026-09-22",
  season: "Reign of Talon シーズン4「Heroes of Busan」",
  seasonStart: "2026-08-11",
  updated: "2026-10-06",
  // 相性・デュオ・マップ勝率の出典（勝率・ピック率・Tier は data/stats.js の公式データ）
  statsSource: "counterwatch.gg（5v5・全ランク・2026/10/5時点。集計期間は非公開）",
};

OW.roles = {
  tank: { label: "タンク", short: "TANK" },
  damage: { label: "ダメージ", short: "DPS" },
  support: { label: "サポート", short: "SUP" },
};

// 相性欄などで使うヒーロー名の和名辞書（未実装ヒーローも含む）
OW.names = {
  anran: "アンラン", ana: "アナ", ashe: "アッシュ", baptiste: "バティスト", bastion: "バスティオン",
  brigitte: "ブリギッテ", cassidy: "キャスディ", dmon: "D.Mon", dva: "D.Va", domina: "ドミナ",
  doomfist: "ドゥームフィスト", echo: "エコー", emre: "エムレ", freja: "フレイヤ", genji: "ゲンジ",
  doctrine: "ドクトリン", illari: "イラリ", hanzo: "ハンゾー", hazard: "ハザード", jetpackcat: "ジェットパック・キャット", junkerqueen: "ジャンカー・クイーン",
  junkrat: "ジャンクラット", juno: "ジュノ", kiriko: "キリコ", lifeweaver: "ライフウィーバー", lucio: "ルシオ",
  mauga: "マウガ", mei: "メイ", mercy: "マーシー", mizuki: "ミズキ", moira: "モイラ", orisa: "オリーサ",
  pharah: "ファラ", ramattra: "ラマットラ", reaper: "リーパー", reinhardt: "ラインハルト", roadhog: "ロードホッグ",
  shion: "シオン", sierra: "シエラ", sigma: "シグマ", sojourn: "ソジョーン", soldier76: "ソルジャー76",
  sombra: "ソンブラ", symmetra: "シンメトラ", torbjorn: "トールビョーン", tracer: "トレーサー",
  vendetta: "ヴェンデッタ", venture: "ベンチャー", widowmaker: "ウィドウメイカー", winston: "ウィンストン",
  wreckingball: "レッキング・ボール", wuyang: "ウーヤン", zarya: "ザリア", zenyatta: "ゼニヤッタ",
};

OW.heroRoles = {
  ana: "support", baptiste: "support", brigitte: "support", jetpackcat: "support", juno: "support",
  kiriko: "support", lifeweaver: "support", lucio: "support", mercy: "support", mizuki: "support",
  moira: "support", wuyang: "support", zenyatta: "support", illari: "support", doctrine: "support",
  dmon: "tank", dva: "tank", domina: "tank", doomfist: "tank", hazard: "tank", junkerqueen: "tank",
  mauga: "tank", orisa: "tank", ramattra: "tank", reinhardt: "tank", roadhog: "tank", sigma: "tank",
  winston: "tank", wreckingball: "tank", zarya: "tank",
};

// 読み込むヒーロー（data/heroes/<id>.js）。ヒーローを追加したらここにIDを足す。並び順＝一覧の表示順。
OW.heroList = [
  // タンク：ブルーザー / イニシエーター / スタルワート
  "mauga", "orisa", "roadhog", "zarya",
  "dva", "doomfist", "hazard", "winston", "wreckingball",
  "dmon", "domina", "junkerqueen", "ramattra", "reinhardt", "sigma",
  // ダメージ：フランカー / リコン / シャープシューター / スペシャリスト
  "anran", "genji", "reaper", "shion", "tracer", "vendetta", "venture",
  "echo", "freja", "pharah", "sierra", "sombra",
  "ashe", "cassidy", "hanzo", "sojourn", "widowmaker",
  "bastion", "emre", "junkrat", "mei", "soldier76", "symmetra", "torbjorn",
  // サポート：メディック / サバイバー / タクティシャン
  "kiriko", "lifeweaver", "mercy", "moira",
  "brigitte", "doctrine", "illari", "juno", "mizuki", "wuyang",
  "ana", "baptiste", "jetpackcat", "lucio", "zenyatta",
];

OW.registerHero = function (hero) {
  OW.heroes[hero.id] = hero;
  if (!OW.order.includes(hero.id)) OW.order.push(hero.id);
};
