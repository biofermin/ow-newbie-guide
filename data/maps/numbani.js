OW.registerMap({
  id: "numbani",
  name: "ヌンバーニ",
  nameEn: "Numbani",
  mode: "hybrid",
  location: "ナイジェリア・ヌンバーニ",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/1b/Numbani_Loading_Screen.jpg/revision/latest/scale-to-width-down/800?cb=20180520055541",
  summary:
    "人間とオムニックが共存する未来都市を舞台に、空港近くの拠点から歴史博物館までペイロードを運ぶハイブリッド。高架の通路や張り出した足場が多く、高所を取ったチームが主導権を握る。2024年10月（シーズン13）のリワークで攻撃側に寄った構造へ調整されている。",
  features: [
    "マップ全体に高架の通路・足場・ベランダが多く、機動力のあるヒーローが高所から戦える",
    "A地点は複数の進入路（正面の通り、左の崖沿い、建物の下層、上段の階段）があり、高所を取るルートの選択が重要",
    "シーズン13リワークで攻撃側の初期スポーンがA地点に近づき、崖沿いの高所が低くなって拠点への入口も広がった",
    "第2区間は像のある広場を通る。攻撃側スポーンに高所への階段が追加され、防衛の前線スポーンも近くなった",
    "最終区間は攻撃側の奥にチョークの上を通る迂回路が追加されている",
  ],
  comps: [
    { name: "ダイブ", fit: "best", body: "高所と足場が豊富で、ウィンストンやD.Va、ゲンジ、トレーサーが上から飛び込む動きが最も活きる。高所の取り合いでそのまま主導権を取れる。" },
    { name: "ポーク", fit: "ok", body: "通りの射線が長い場所が多く、キャスディやソルジャー76、アッシュの中〜長距離戦が通る。防衛のA地点で特に強い。" },
    { name: "ラッシュ", fit: "ok", body: "ペイロード区間の通りでは正面からの押し込みも機能する。ただし高所を取られたまま地上で戦うと削られやすい。" },
  ],
  sections: [
    {
      title: "A地点：空港前の拠点",
      sub: "周囲を高所と橋に囲まれた拠点。進入路が4本ある",
      attack: [
        "目標は拠点そのものより先に高所を取ること。上段の階段か崖沿いのルートから高所を確保してから拠点に降りる",
        "正面の通りは最も守りやすい道。下層の建物ルートや崖沿いと組み合わせて防衛を散らす",
        "リワークでスポーンが近くなり戻りが速い。それでも1人欠けた状態の突入は避け、人数を揃える",
        "防衛を2人倒すまでは拠点に乗らず、高所から撃ち合って相手を拠点に引きずり出す",
      ],
      defense: [
        "拠点を見下ろす上段の足場と、防衛スポーン側の奥の橋が主な守り位置",
        "崖沿いの高所はリワークで低くなり攻撃側に取られやすい。左側の回り込みに注意を払う",
        "拠点裏の建物はリワークで通路が繋がり、攻撃側の裏取りにも使われる。背後の警戒を怠らない",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e4/Numbani_P1_Capture_Point_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015204537", file: "Numbani P1 Capture Point S13r After.jpg", caption: "A地点の拠点（アエトリア前、リワーク後）。周囲は開けていて遮蔽は植え込み程度" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/d/d5/Numbani_P1_Cliffside_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015204540", file: "Numbani P1 Cliffside S13r After.jpg", caption: "拠点裏の崖沿い（リワーク後）。階段で上段に上がれ、拠点裏へ回り込める" },
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/98/Numbani_P1_High_Grounds_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015204543", file: "Numbani P1 High Grounds S13r After.jpg", caption: "拠点脇の高所から見た拠点（リワーク後）。ここを取ると拠点全体を撃ち下ろせる" },
      ],
    },
    {
      title: "第2区間：大通り〜像のある広場",
      sub: "ペイロードが通りを進み、最初の曲がり角を過ぎて像の広場へ",
      attack: [
        "攻撃側スポーンに追加された階段から高所へ上がり、ペイロードの進路を上から見張る",
        "像のある広場は遮蔽の配置が変わっている。遮蔽を伝ってペイロードと並走する",
        "防衛の前線スポーンが近くなったので、1キル取っても深追いせず押せるうちにペイロードを進める",
      ],
      defense: [
        "通りの両脇の足場とベランダから、ペイロードについてきた相手を横から撃つ",
        "前線スポーンが近い利点を活かし、撃ち負けても早めに再集合して時間を稼ぐ",
        "ペイロードの進路の先の高所を先に押さえ、攻撃側が上に回る動きを咎める",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/50/Numbani_P2_Statue_Area_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015204551", file: "Numbani P2 Statue Area S13r After.jpg", caption: "第2区間の像のある広場（リワーク後）。像の台座と広告塔が遮蔽、カーブの外側が広い" },
      ],
    },
    {
      title: "最終区間：博物館へのアプローチ",
      sub: "トンネル状のチョークを抜け、博物館前の終点まで",
      attack: [
        "最終チョークは防衛が最も固い場所。リワークで追加された攻撃側奥の迂回路から上を通り、チョークの裏を取る",
        "チョークに正面から入るのはウルトが揃ってから。逐次突入は防衛の思うつぼ",
        "終点前の広い場所では防衛の高所が強いので、先に上段の足場を確保する",
      ],
      defense: [
        "チョークの出口を見下ろせる高所に陣取り、出てきた相手を集中して倒す",
        "攻撃側の迂回路からの回り込みを警戒し、チョークの上にも目を配る",
        "防衛スポーンが近いので、人数を揃えてから戦い直す",
      ],
      shots: [
        { url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a1/Numbani_P3_Tunnel_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015204554", file: "Numbani P3 Tunnel S13r After.jpg", caption: "最終区間、トンネル奥の攻撃側エリア（リワーク後）。左の階段から上段の迂回路へ" },
      ],
    },
  ],
  tips: [
    "全区間で高所の確保が最優先。地上だけで戦うと一方的に撃ち下ろされる",
    "シーズン13リワーク（2024/10）前の攻略情報は、A地点の地形やスポーン位置が古くなっている",
    "建物内の大ヘルスパックを経由する下層ルートは、A地点攻撃で回復を確保しながら近づける",
    "足場から足場へ移れるヒーロー（ゲンジ、ウィドウメイカー、ファラなど）は常に一段上を意識する",
  ],
  mistakes: [
    "A地点で高所を取らずにいきなり拠点に乗り、上から撃たれて崩れる",
    "正面の通りだけを使って攻撃し、守りやすい道で消耗する",
    "最終チョークにウルトなしで1人ずつ入り、各個撃破される",
  ],
  sources: [
    { label: "Overwatch Wiki - Numbani", url: "https://overwatch.fandom.com/wiki/Numbani" },
    { label: "Blizzard Forums - S13 map reworks more detailed information", url: "https://us.forums.blizzard.com/en/overwatch/t/s13-map-reworks-more-detailed-information/932132" },
  ],
});
