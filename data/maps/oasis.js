OW.registerMap({
  id: "oasis",
  name: "オアシス",
  nameEn: "Oasis",
  mode: "control",
  location: "イラク（アラビア砂漠の未来都市）",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fc/Oasis.jpg/revision/latest/scale-to-width-down/800?cb=20180520062749",
  summary:
    "砂漠の科学都市を舞台にしたコントロールマップ。ジャンプパッドと高所が多く縦の動きが激しい一方、シティ・センターの道路や大学の穴など環境キルの要素も多い。高所を押さえて立ち位置を管理できるチームが勝つ。",
  features: [
    "ジャンプパッドで高所へ一気に上がれる。機動力のないヒーローも上を取れる",
    "シティ・センターは拠点の両側を車が走る道路があり、轢かれると即死",
    "大学は拠点の中央付近に穴があり、ノックバックで落下死させられる",
    "ガーデンは開けた中庭で、周囲の高所からの射線が通りやすい",
    "スポーンから拠点までが比較的近く、取り合いのテンポが速い",
  ],
  comps: [
    { name: "ダイブ", fit: "best", body: "高所とジャンプパッドが多く、飛び込みの角度に困らない。上から後衛を狙い、環境キルも絡めやすい。" },
    { name: "ポーク", fit: "ok", body: "ガーデンやシティ・センターの高所は遠距離から削れる。ただし横から飛び込まれやすいので護衛が必要。" },
    { name: "ラッシュ", fit: "ok", body: "大学など屋内寄りの拠点では近距離戦が通る。開けた場所で高所を取られたままの突入は不利。" },
  ],
  sections: [
    {
      title: "シティ・センター（City Center）",
      sub: "道路に挟まれた中央の拠点。ジャンプパッドで高所へ",
      attack: [
        "拠点脇の道路は車に轢かれると即死。相手を道路側に押し出す位置取りを狙う",
        "ジャンプパッドで高所に上がり、拠点を見下ろしてから入る",
        "道路を挟んだ左右の通路を使い、二方向から同時に圧をかける",
      ],
      defense: [
        "道路の近くで戦わない。ノックバックで押し出されると一撃で倒れる",
        "高所を相手に取られないよう、ジャンプパッドの着地点を見張る",
        "拠点の中央の遮蔽を使い、道路側からの射線を切る",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/2/22/Cityco4.png/revision/latest/scale-to-width-down/800?cb=20240726193750",
          file: "Cityco4.png",
          caption: "シティ・センターの拠点。中央の建物が遮蔽になり、周囲の段差を回り込める",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/66/Cityco5.png/revision/latest/scale-to-width-down/800?cb=20240726193740",
          file: "Cityco5.png",
          caption: "高所へ上がるジャンプパッド（左下）。拠点周りの建物の上へ一気に上がれる",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/32/Cityco6.png/revision/latest/scale-to-width-down/800?cb=20240726193749",
          file: "Cityco6.png",
          caption: "道路から見た拠点側の建物。車が走る道路に押し出されると即死",
        },
      ],
    },
    {
      title: "ガーデン（Gardens）",
      sub: "開けた庭園の拠点。周囲に高所とジャンプパッド",
      attack: [
        "拠点が開けているため、周囲の高所から削ってから入るのが基本",
        "ジャンプパッドで高所に上がる動きは読まれやすい。タイミングを揃えて上がる",
        "左右の外周ルートで回り込み、拠点の相手を挟む",
      ],
      defense: [
        "拠点の中央だけに固まらず、外周の高所にも人を置く",
        "高所に上がってくる相手を着地の瞬間に狙う",
        "遠距離から削られる展開になったら、遮蔽の多い位置まで下がって受ける",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/eb/Gardenso4.png/revision/latest?cb=20240726203019",
          file: "Gardenso4.png",
          caption: "ガーデンの庭園。生け垣の段差が遮蔽になり、右手にジャンプパッドがある",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/58/Gardenso9.png/revision/latest?cb=20240726203020",
          file: "Gardenso9.png",
          caption: "上から見たガーデン。植栽のある高い建物が中庭を囲み、上から撃ち下ろせる",
        },
      ],
    },
    {
      title: "大学（University）",
      sub: "円形の屋内拠点。中央付近に落下ポイントの穴",
      attack: [
        "拠点中央の穴は環境キルポイント。ノックバックで相手を落とす",
        "上の階や回廊から拠点を見下ろす位置を取り、上から援護する",
        "入口が複数あるので、正面と側面から同時に入って相手を分散させる",
      ],
      defense: [
        "穴の縁に立たない。移動スキルは脱出用に残す",
        "上の階を押さえて、拠点に入ってくる相手を上から撃つ",
        "複数の入口から来る相手を把握し、サポートが孤立しないようにする",
      ],
      shots: [],
    },
  ],
  tips: [
    "ジャンプパッドの位置を覚えると、高所の取り合いと撤退が格段に楽になる",
    "シティ・センターの道路と大学の穴は双方にとって即死ポイント。立ち位置を常に意識する",
    "高所が強いマップなので、拠点を取った後も上の位置を維持して守る",
    "スポーンが近く取り返しが早い。拠点を取ったら次の集団戦に備えてウルトを整える",
  ],
  mistakes: [
    "シティ・センターで道路に押し出されて車に轢かれる",
    "大学で穴の縁に立ち、ノックバック一発で落とされる",
    "ガーデンで高所を放置して拠点に固まり、上から一方的に撃たれる",
    "ジャンプパッドで一人ずつ上がり、着地を狩られる",
  ],
  sources: [
    { label: "Overwatch Wiki - Oasis", url: "https://overwatch.fandom.com/wiki/Oasis" },
  ],
});
