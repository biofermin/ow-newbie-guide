OW.registerMap({
  id: "neon-junction",
  name: "ネオン・ジャンクション",
  nameEn: "Neon Junction",
  mode: "hybrid",
  location: "日本・東京",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/4e/NeonJunction1.png/revision/latest/scale-to-width-down/800?cb=20260524051418",
  summary:
    "2026/6/16（シーズン3）追加の新ハイブリッドマップ。秋葉原をモチーフにした繁華街からハシモトの本拠地を抜け、歌舞伎劇場「Zuiko-za」までペイロードを運ぶ。キングス・ロウ寄りの近距離戦中心の設計で、角の取り合いと高架を走る電車のタイミング管理が勝敗を分ける。",
  features: [
    "長い射線を意図的に減らした設計。曲がり角と遮蔽が多く、近〜中距離の撃ち合いが基本",
    "第2区間の中ほどに駅のある高架。A取得後は約14秒ごとに電車が約3.5秒かけて通過し、線路上にいると轢かれる",
    "攻撃側の初期リスポーン近くの店に蜂の巣。撃つと蜂が出て近くのプレイヤーに継続ダメージ",
    "第2区間は比較的平坦で地上ヒーローが戦いやすい。高所は高架まわりが中心",
    "最終区間はハシモトのビル内の通路から始まり、終点は劇場の舞台。狭い屋内と開けた場所が切り替わり、間合いが大きく変わる",
  ],
  comps: [
    { name: "ラッシュ", fit: "best", body: "角を曲がった先ですぐ交戦になる距離感で、ラインハルトやジャンカー・クイーン＋ルシオの一気の詰めが通りやすい。ペイロード周りの密集戦にも強い。" },
    { name: "ダイブ", fit: "ok", body: "高架や建物の上から裏に回る余地はあるが、高所の数は旧来のハイブリッドより控えめ。電車の通過タイミングに合わせた高架からの飛び込みが有効。" },
    { name: "ポーク", fit: "weak", body: "射線が短く区切られており、長距離から削り続けられる場所が限られる。高架の狙撃位置は強いが電車で追い出されやすい。" },
  ],
  sections: [
    {
      title: "A地点：繁華街の拠点",
      sub: "モールや映画館、カプセルトイ店が並ぶ商店街の中の拠点",
      attack: [
        "店舗の中や路地を通る経路が複数あり、正面の大通り一本に絞らず角ごとに人数をかけて押し込む",
        "スポーンからの距離が近いので、1キル取れたら即座に拠点へ。リスポーン差を活かした連続突入が強い",
        "蜂の巣の位置を覚え、狭い店内で敵がまとまった時の削りに使う（自分たちも巻き込まれる点に注意）",
      ],
      defense: [
        "射線が短いので拠点の手前の角で待ち、出てきた相手を集中して倒す形が基本",
        "拠点から離れすぎると攻撃側の短いリスポーンに押し切られる。前に出るのは数的有利の時だけ",
        "店内ルートからの回り込みに1人は目を配り、背後の取られ方を共有する",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/6e/Neon_Junction_capture_point.png/revision/latest/scale-to-width-down/800?cb=20260704122843", file: "Neon Junction capture point.png", caption: "A地点を上から見た様子。中央の植え込みと右のロボット像が遮蔽、周囲の店の上が高所" },
      ],
    },
    {
      title: "第2区間：高架下の街路",
      sub: "細い曲がり角が続き、中盤に電車の走る高架と駅がある",
      attack: [
        "曲がり角が連続するので、ペイロードの少し先の角を先に確保してから押す",
        "高架上の狙撃手は電車の通過直後に詰める、または通過時刻に合わせて追い出す",
        "平坦な区間が続くため、地上の遮蔽を使ったタンク前進とウルトの合わせが通りやすい",
        "区間の終わりはハシモトのビル前。ここで止まると防衛の前線リスポーンから増援が早い",
      ],
      defense: [
        "角の向こうで待ち伏せし、ペイロードについてきた相手を横から挟むのが強い",
        "高架は強い射線だが、約14秒周期の電車を常に意識する。通過の直前は必ず降りる",
        "防衛側の前線リスポーンが近い区間ではリスポーン差を活かして早めに再集合する",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e5/NeonJunction2.png/revision/latest/scale-to-width-down/800?cb=20260524051446", file: "NeonJunction2.png", caption: "第2区間の開始地点を攻撃側から。左上を高架が通り、右手が駅の建物。道は細く角が多い" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/18/Neon_Junction_b_end.png/revision/latest/scale-to-width-down/800?cb=20260704122831", file: "Neon Junction b end.png", caption: "高架を越えた先の第2区間後半を上から。低い屋根の建物が並び、上から見下ろせる" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/93/NeonJunction3.png/revision/latest/scale-to-width-down/800?cb=20260524051740", file: "NeonJunction3.png", caption: "第2区間の終点、ハシモトのビル正面。手前は開けているので左右の建物を遮蔽に使う" },
      ],
    },
    {
      title: "最終区間：ハシモトのビル〜Zuiko-za",
      sub: "ビル内の通路を抜け、最後の曲がり角から劇場の舞台へ",
      attack: [
        "区間の出だしは屋内の通路。狭いのでシールドやバリアで正面を固めながら抜ける",
        "最後の曲がり角は防衛が待ち構える定番。ウルトを溜めてから一斉に入る",
        "通路を抜けた先は開けた場所になるので、屋内から出る瞬間に射線を切る遮蔽を確認しておく",
      ],
      defense: [
        "通路の出口と最後の曲がり角が防衛の要。広い側から狭い出口を見下ろせる位置を取る",
        "時間が少ない時の攻撃側はウルトをまとめて使ってくる。ウルトを返す側を決めておく",
        "回り込み用の通路を放置しない。屋内の裏口から背後を取られると一気に崩れる",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/dd/Neon_Junction_c_start.png/revision/latest/scale-to-width-down/800?cb=20260704122840", file: "Neon Junction c start.png", caption: "最終区間の開始、ハシモトのビル内の通路。天井の高い屋内で、建物の陰が遮蔽になる" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/fb/Neon_Junction_c_last_turn.png/revision/latest/scale-to-width-down/800?cb=20260704122838", file: "Neon Junction c last turn.png", caption: "最後の曲がり角を防衛側から見下ろした様子。太い柱が遮蔽、左に上段への階段" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/3e/Neon_Junction_c_end.png/revision/latest/scale-to-width-down/800?cb=20260704122836", file: "Neon Junction c end.png", caption: "ゴールの劇場の舞台。舞台の左右にある大きな箱が遮蔽になる" },
      ],
    },
  ],
  tips: [
    "電車はA取得後に動き出す。高架付近で戦う時は周期を数える癖をつける",
    "蜂の巣は敵味方問わず周囲にダメージを与えるので、狭い店内に誘い込めば小さな削りになる",
    "射線が短いマップなので、ヒットスキャンより近距離に強いダメージや範囲攻撃が活きる場面が多い",
    "2026/6/30の調整でペイロードがわずかに遅くなり、区間開始の待ち時間も延びている。古い動画の感覚より時間がかかる前提で動く",
  ],
  mistakes: [
    "電車の通過を忘れて高架上で轢かれる",
    "曲がり角の向こうを確認せずペイロードに乗り続け、横から挟まれる",
    "最終区間の屋内通路で密集したまま範囲ウルトを受ける",
    "防衛側がA地点で前に出すぎ、攻撃側の短いリスポーンに押し切られる",
  ],
  sources: [
    { label: "Overwatch Wiki - Neon Junction", url: "https://overwatch.fandom.com/wiki/Neon_Junction" },
    { label: "Blizzard - Weekly Recall: Neon Junction AMA Recap", url: "https://overwatch.blizzard.com/en-us/news/24293050" },
    { label: "Overwatch Retail Patch Notes - June 16, 2026", url: "https://us.forums.blizzard.com/en/overwatch/t/overwatch-retail-patch-notes-june-16-2026/1024208" },
    { label: "OWTV - New hybrid map revealed at OWCS Champions Clash", url: "https://owtv.gg/news/new-hybrid-map-revealed-at-owcs-champions-clash" },
  ],
});
