OW.registerMap({
  id: "dorado",
  name: "ドラド",
  nameEn: "Dorado",
  mode: "escort",
  location: "メキシコ・ベラクルス",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/ec/Dorado-streets2.jpg/revision/latest/scale-to-width-down/800?cb=20180520045217",
  summary:
    "祭りで彩られたメキシコの港町を、ルメリコの発電所（ジッグラト）までトラックを運ぶエスコートマップ。入り組んだ路地と建物の高所が多く、射線の通る通りと狭い路地が交互に現れる。2024年10月（シーズン13）のリワークで攻撃側も高所に上がりやすくなったが、依然として高所を握った側が主導権を取る。",
  features: [
    "第1区間はスタート地点の正面や崖側の建物など、ペイロードを見下ろす高所が多い",
    "狭い路地と坂道が多く、直線的な範囲ウルトや設置物が刺さりやすい",
    "第2区間は裁判所（Palacio de Justicia）周辺の高所が要所。リワークで攻撃側からの入口と階段が追加",
    "最終区間は序盤のチョークを抜けると、ジッグラト前の開けたエリアと高所",
    "縦方向の移動スキルがあれば高所へ直行できる。ないと長い迂回ルートを強いられる",
  ],
  comps: [
    { name: "ダイブ", fit: "best", body: "高所が多く、ウィンストンやD.Va、ファラ、エコーなどが建物の上の敵へ直接触れる。徒歩では遠回りになる高所を最短で奪えるのが大きい。" },
    { name: "ポーク", fit: "ok", body: "攻撃側スタート正面の建物など、通りを縦に見られる位置が多い。ウィドウメイカーやアッシュで高所から削る形は防衛で特に強い。" },
    { name: "ラッシュ", fit: "ok", body: "狭い路地や最終区間のチョーク突破ではラインハルトやジャンカー・クイーンの押し込みが有効。開けた通りでは高所から撃たれやすいので、使う場面を選ぶ。" },
  ],
  sections: [
    {
      title: "第1区間：ミシオン・ドラド〜市場",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ab/Dorado_P1_Attacker_Spawn_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015135115",
          file: "Dorado P1 Attacker Spawn S13r After.jpg",
          caption: "第1区間スタート付近。ペイロード前方の中央の建物の屋上が最初に取り合う高所",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/63/Dorado_P1_Cliffside_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015135118",
          file: "Dorado P1 Cliffside S13r After.jpg",
          caption: "第1区間の崖側の家並み。屋根と階段が入り組み、高所への回り込みに使える",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/37/Dorado_P1_Market_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015135153",
          file: "Dorado P1 Market S13r After.jpg",
          caption: "第1区間終盤の市場。屋台が遮蔽になり、奥の階段から上段へ上がれる",
        },
      ],
      sub: "スタート直後から高所の多い坂道",
      attack: [
        "正面中央の建物の屋上は、リワークで追加されたエレベーターから攻撃側も上がれる。まず高所を取ってからペイロードを進める",
        "左右の側面ルートが短くなり高所へ回り込みやすくなった。正面の撃ち合いと同時に横から崩す",
        "市場エリアの崖側の建物は入口が増えている。複数の角度から攻めて防衛を分散させる",
      ],
      defense: [
        "高所から撃ち下ろし、攻撃側を狭い坂道で足止めする",
        "リワーク後はスポーン前のバルコニーまでスポーン保護があり、崖側手前の建物の屋上にも乗れない。スポーン出口への張り付きは不可",
        "市場付近まで下がっても建物の高所を維持できれば十分戦える",
      ],
    },
    {
      title: "第2区間：市街地〜発電所前",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3c/Dorado_P2_Courthouse_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015135137",
          file: "Dorado P2 Courthouse S13r After.jpg",
          caption: "第2区間の裁判所。バルコニーと手前の階段が攻撃側の上がり口",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6f/Dorado_P2_Power_Station_Entrance_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015135139",
          file: "Dorado P2 Power Station Entrance S13r After.jpg",
          caption: "第2区間終盤の発電所入口前の広場。頭上の連絡橋と右の高台から見下ろせる",
        },
      ],
      sub: "裁判所周りの高所と曲がりくねった通り",
      attack: [
        "裁判所の攻撃側入口と階段（リワークで追加）を使い、低くなったバルコニーを先に制圧する",
        "ペイロードは曲がり角が多く、角を曲がるたびに防衛の射線が変わる。高所を取る役とペイロードを押す役を分ける",
        "細い通りでは範囲ウルトの的になりやすい。ペイロード周りに固まりすぎない",
      ],
      defense: [
        "裁判所のバルコニーと周辺の屋根から交差射線を作る",
        "攻撃側が細い通りに入ったタイミングで範囲ウルトを合わせる",
        "防衛側スポーンが近く帰還が早い。人数を揃えてから戦う",
      ],
    },
    {
      title: "第3区間（最終区間）：チョーク〜ジッグラト",
      shots: [],
      sub: "序盤のチョーク突破が最大の山場",
      attack: [
        "チョークを抜けるのが最大の難所。ウルトを重ねて一気に突破する",
        "リワークでチョーク後のメインルートと高所へ続く階段の先に遮蔽が追加された。突破後は遮蔽を使いつつ高所へ",
        "高所を確保できれば、最後の開けたエリアは押しやすい",
      ],
      defense: [
        "チョーク出口を高所から見下ろし、出てきたところに集中砲火",
        "トールビョーンのタレットなど設置物で広いエリアをカバーしやすい",
        "チョークで1回止めれば時間を大きく稼げる。前に出て戦うより出口で待つ",
      ],
    },
  ],
  tips: [
    "全区間で「どの建物の上を誰が取るか」を先に決める。高所を取れば下の通りはほぼ制圧できる",
    "細い通りでは範囲ウルト（ドラゴンストライクなど）が非常に強い。攻撃側は散開、防衛側は狙いどころ",
    "リワークで攻撃側の高所アクセスが増えている。古い感覚で「攻撃は下から押すしかない」と考えない",
    "トールビョーンのタレットやシンメトラのテレポーターなど設置物が活きやすい地形",
  ],
  mistakes: [
    "高所を無視してペイロードだけ押し、上から撃たれ続ける",
    "第2区間の曲がり角で全員がまとまり、範囲ウルトで一網打尽にされる",
    "最終区間のチョークにバラバラに入り、各個撃破される",
    "防衛側が第1区間で前に出すぎ、スポーン保護の内側にいる攻撃側に撃ち負ける",
  ],
  sources: [
    { label: "Overwatch Wiki - Dorado", url: "https://overwatch.fandom.com/wiki/Dorado" },
  ],
});
