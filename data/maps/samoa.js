OW.registerMap({
  id: "samoa",
  name: "サモア",
  nameEn: "Samoa",
  mode: "control",
  location: "サモア（ポリネシア）",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/b4/Samoa.jpg/revision/latest/scale-to-width-down/800?cb=20231002031650",
  summary:
    "南国の島を舞台にしたOW2のコントロールマップ。窪んだ拠点のビーチ、建物に囲まれた円形拠点のダウンタウン、溶岩に囲まれた火山の3つで戦う。壊せる遮蔽物が多く、戦闘中に地形が開けていくのも特徴。",
  features: [
    "マップ全体で700を超える破壊可能な遮蔽物があり、撃ち合ううちに射線が開いていく",
    "ビーチの拠点は一段低く窪んでおり、周囲の高所から見下ろされやすい",
    "ダウンタウンは円形の拠点を弧状の壁と建物が囲み、高所からの長い射線もある",
    "火山は拠点の周りを溶岩の堀が囲み、ノックバックで落とすと即死",
  ],
  comps: [
    { name: "ダイブ", fit: "best", body: "高所と側道が多く、上から窪んだ拠点や後衛に飛び込みやすい。火山では溶岩際の相手を狙う動きとも噛み合う。" },
    { name: "ポーク", fit: "ok", body: "ダウンタウンの高所やビーチの外周からは遠距離で削れる。遮蔽物が壊れるほど射線が通りやすくなる。" },
    { name: "ラッシュ", fit: "ok", body: "拠点周りの近距離戦は通るが、ビーチは窪地に飛び込むと上から撃たれ、火山は溶岩の縁で戦うリスクがある。" },
  ],
  sections: [
    {
      title: "ビーチ（Beach）",
      sub: "一段低く窪んだ拠点。階段で下りる形で、周囲に高所と側道",
      attack: [
        "正面の階段からタンクが単独で下りると集中砲火を浴びる。高所を取ってから下りる",
        "拠点の周囲にある側道や遮蔽を使って回り込み、窪地の相手を上から挟む",
        "壊せる遮蔽物を先に壊して射線を開け、相手の隠れ場所を減らす",
      ],
      defense: [
        "窪地の中だけで守らず、拠点を見下ろす高所にも人を置く",
        "拠点の中の遮蔽と側道を使い、高所から撃ってくる相手と真正面で撃ち合わない",
        "相手が階段を下りてくる瞬間は狙い目。範囲攻撃やウルトを合わせる",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e0/Samoa_beach.jpeg/revision/latest/scale-to-width-down/800?cb=20250624195400",
          file: "Samoa beach.jpeg",
          caption: "ビーチの木製デッキ。右の階段や中央の下り口など段差が多く、上段から見下ろせる",
        },
      ],
    },
    {
      title: "ダウンタウン（Downtown）",
      sub: "円形の拠点を弧状の壁が囲み、外周に建物と高所",
      attack: [
        "拠点を囲む弧状の壁を遮蔽にして近づき、開けた場所を横切らない",
        "外周の建物の高所は長い射線が通る。アッシュやウィドウメイカーが活きる",
        "壁の切れ目から複数方向に入り、拠点の相手を分散させる",
      ],
      defense: [
        "高所のスナイパーに注意し、射線の通る場所で棒立ちしない",
        "弧状の壁を回り込みながら戦い、相手に正面から撃たせない",
        "外周の建物を相手に取られたら、拠点に固執せず先に高所を取り返す",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f7/Samoa_downtown.jpeg/revision/latest/scale-to-width-down/800?cb=20250624195403",
          file: "Samoa downtown.jpeg",
          caption: "ダウンタウンの時計塔周辺。円柱状の遮蔽物と建物の段差が並ぶ",
        },
      ],
    },
    {
      title: "火山（Volcano）",
      sub: "溶岩の堀に囲まれた拠点。落ちたら即死",
      attack: [
        "溶岩の堀は環境キルポイント。ルシオのサウンドウェーブなどで相手を落とす",
        "拠点へ渡る経路が限られるので、渡る瞬間を狙われないよう遮蔽を使って同時に入る",
        "周囲の高所から拠点を見下ろし、溶岩際に立つ相手を追い詰める",
      ],
      defense: [
        "溶岩の縁で戦わない。拠点の内側に立ち、移動スキルは脱出用に残す",
        "相手が拠点へ渡ってくる経路を見張り、渡りきる前に崩す",
        "引き寄せやノックバック持ちは、渡ってくる相手を溶岩に落とすチャンスを狙う",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/cd/Samoa_volcano.jpeg/revision/latest/scale-to-width-down/800?cb=20250624195404",
          file: "Samoa volcano.jpeg",
          caption: "火山の拠点周辺。足場の下は一面の溶岩で、縁から落ちると即死",
        },
      ],
    },
  ],
  tips: [
    "壊せる遮蔽物は撃てば消える。守りに使う遮蔽が残っているかを常に確認する",
    "どのサブマップも高所の価値が高い。開幕は高所を誰が取るかを決めて動く",
    "火山ではノックバック持ちが一発で集団戦をひっくり返せる",
    "ビーチの窪地は入るより上から見下ろす方が有利。拠点を踏む人数は最小限でよい",
  ],
  mistakes: [
    "ビーチで高所を取らずにタンクが窪地へ単独で下りる",
    "火山で溶岩の縁に立ち、ノックバックで落とされる",
    "壊れた遮蔽物の位置に隠れようとして撃ち抜かれる",
    "ダウンタウンで開けた場所を横切り、高所のスナイパーに抜かれる",
  ],
  sources: [
    { label: "Overwatch Wiki - Samoa", url: "https://overwatch.fandom.com/wiki/Samoa" },
    { label: "Immortal Boost - Samoa Map Guide", url: "https://immortalboost.com/blog/overwatch-2/samao-complete-guide/" },
  ],
});
