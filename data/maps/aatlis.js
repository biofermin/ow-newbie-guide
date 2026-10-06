OW.registerMap({
  id: "aatlis",
  name: "アトリス",
  nameEn: "Aatlis",
  mode: "flashpoint",
  location: "モロッコ（マラケシュがモデル）",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/e6/Aatlis_loading_screen.png/revision/latest/scale-to-width-down/800?cb=20250624194631",
  summary:
    "夜のモロッコの街を舞台にした3つ目のフラッシュポイントマップ（2025年6月追加）。旧来の2マップより小さくコンパクトで、前線スポーンがマップの地下に組み込まれているため移動が短い。細い路地と迂回路が多く、小規模な乱戦が連続するので、次のポイントへ誰より早く着き、まとまって入れるかが勝敗を分ける。",
  features: [
    "ルール：中央の「ステーション」が最初に解放され、先に3ポイント取った側の勝ち。2点目は中央を落とした側のスポーンに近いポイントになる（2025年7月以降）",
    "ステーション（中央）は拠点を囲む2層構造。2階の階段と手すり周りの位置取りがそのまま勝負になる",
    "ガーデンは機動力のあるヒーロー寄りの作りだが、長めの射線と殴り合い用の遮蔽物も用意されている",
    "リゾートは比較的射線が長く、射程のあるヒーローが活きるポイント",
    "道は細く迂回路が多い。解放中のポイント上空には光の柱が立つので、迷ったらそれを目指す",
  ],
  comps: [
    { name: "ダイブ", fit: "best", body: "移動が短くポイント間の路地も多いので、機動力で先にポイントへ入り、ステーションやガーデンの高所を取る動きが強い。ウィンストンやD.Vaで2階を先に押さえる。" },
    { name: "ラッシュ", fit: "ok", body: "細い路地と屋内が多く、角から一気に距離を詰める展開を作りやすい。ルシオの加速で到着を早めれば先着の有利も取れる。" },
    { name: "ポーク", fit: "weak", body: "リゾートなど一部では射線が通るが、全体的に遮蔽と迂回路が多く、横や裏から詰められやすい。ポイント移動のたびに陣地を作り直す手間も重い。" },
  ],
  sections: [
    {
      title: "開幕のポイント取り",
      sub: "最初は必ず中央のステーション。試合開始から約30秒で解放",
      attack: [
        "2層構造なので、2階の階段・手すり側を先に取った側が有利。タンクと機動力のあるDPSで上を確保してから下に降りる",
        "解放前に味方の位置を揃えておき、全員同時に入る。1人ずつ入ると人数不利で各個撃破される",
        "ポイントを取った後はカウントが自動で進むので、深追いより全員生存を優先",
      ],
      defense: [
        "先にポイントを取られても、取り返せばその時点から自分たちのカウントが進む。焦って1人ずつ戻らず、ウェーブを揃えて奪い返す",
        "2階の高所を譲ったままの奪還は厳しい。階段を上がる経路と下から撃つ射線を同時に使う",
        "カウント99%付近でポイントに触れ続ければ延長戦になる。最後まで誰か1人は触りに行く",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/7/7b/Aatlis_009.png/revision/latest/scale-to-width-down/800?cb=20250622114000",
          file: "Aatlis 009.png",
          caption: "ステーション内部。中央の案内台の左右に上の階へ続く階段がある",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f4/Aatlis_008.png/revision/latest/scale-to-width-down/800?cb=20250622113958",
          file: "Aatlis 008.png",
          caption: "ステーションへの入口の一つ。右奥のアーチと階段から中へ入る",
        },
      ],
    },
    {
      title: "ポイント間の移動・リスポーン差",
      sub: "ポイントが取られるたびに次が選ばれ、約40秒後に解放",
      attack: [
        "2点目は中央を落とした（負けている）側のスポーン寄りになる。負けている側は先着しやすいので、その利を活かして先に陣取る",
        "スポーン出口の加速バフはダメージを受ける・与えると消える。移動中の小競り合いは避けてポイントまで温存する",
        "次のポイントが決まったら倒れた味方を待たず、生きている人数で先に良い位置を押さえて合流を待つ",
      ],
      defense: [
        "勝っている側は次のポイントが相手寄りになるので、先着は難しい。細い路地で正面衝突せず、迂回路から挟む形で入る",
        "路地が多いマップなので、移動中の孤立した1人を狩られやすい。まとまって移動する",
        "相手が先に入っても、拠点を取り返せばカウントは取り戻せる。ウルトを溜めてから一斉に入る",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/32/Aatlis_010.png/revision/latest/scale-to-width-down/800?cb=20250622114002",
          file: "Aatlis 010.png",
          caption: "ステーション前からガーデン方面を見た通路。右が駅の入口、左下の道がガーデンへ続く",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/44/Aatlis_006.png/revision/latest/scale-to-width-down/800?cb=20250622113954",
          file: "Aatlis 006.png",
          caption: "前線スポーンの真上の中庭。正面と左右に出入口が複数あり、合流経路が分かれる",
        },
      ],
    },
    {
      title: "最終盤（2-2 など）",
      sub: "先に3ポイント取った側が勝利。引き分けはない",
      attack: [
        "2-2の最終ポイントはここまで温存したウルトを全部使う場面。開幕の1回目の集団戦で勝つことに集中する",
        "ポイント上にいなくてもカウントは進む。取った後は守りやすい位置まで下がって相手を待ち構えてよい",
        "相手のウェーブが揃う前に仕掛ける。リスポーンの差を数えてから入ると成功率が上がる",
      ],
      defense: [
        "相手のカウントが高い時は、とにかく誰かがポイントに触って延長戦を続ける。99%からの逆転は珍しくない",
        "延長戦中はウェーブリスポーンが無効になる。バラバラに戻らず、生きている味方と合わせて入る",
        "落とせないと思ったら一旦引いて人数を揃える選択も必要。1人ずつ突っ込むのが最悪の負け方",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/81/Aatlis_004.png/revision/latest/scale-to-width-down/800?cb=20250622113949",
          file: "Aatlis 004.png",
          caption: "ガーデン内部。中央の柱と手前左右の2棟が遮蔽になり、奥には3つのアーチ",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/08/Aatlis_003-small.png/revision/latest/scale-to-width-down/800?cb=20250622114137",
          file: "Aatlis 003-small.png",
          caption: "タウン・センター。中央の泉の建物を道が囲み、左右のアーチから回り込める",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/ff/Aatlis_001.png/revision/latest/scale-to-width-down/800?cb=20250622113943",
          file: "Aatlis 001.png",
          caption: "バザールの入口をポイント側から見た図。中央の階段が左右に分かれて上段へ続く",
        },
      ],
    },
  ],
  tips: [
    "マップが小さく移動が短いぶん、各ポイントへの最短ルートを覚えるだけで先着率が大きく変わる",
    "光の柱が解放中のポイントの目印。迷子になったら上空を見る",
    "前線スポーンが地下にあるため、スポーンから出る位置と向きを覚えておくと合流が速い",
    "ポイントごとに得意なヒーローが違う（ステーションは高所、ガーデンは機動力、リゾートは射程）。次のポイントに合わせたヒーロー変更も有効",
    "ポイント外での撃ち合いにウルトを使わない。ウルトはポイントの取り合いに取っておく",
  ],
  mistakes: [
    "ポイントを取った後、全員で深追いして逆に人数不利を作る",
    "移動中の小競り合いで加速バフとHPを失い、遅れてポイントに着く",
    "倒れた味方を待たずに1人ずつポイントへ入り、各個撃破される",
    "ステーションの2階を放置して下で戦い、上から一方的に撃たれる",
  ],
  sources: [
    { label: "Overwatch Wiki - Aatlis", url: "https://overwatch.fandom.com/wiki/Aatlis" },
    { label: "Overwatch Wiki - Flashpoint", url: "https://overwatch.fandom.com/wiki/Flashpoint" },
    { label: "Blizzard - Weekly Recall: Flashpoint Map Reworks（ポイント選出ロジック変更）", url: "https://overwatch.blizzard.com/en-us/news/24215719/weekly-recall-flashpoint-map-reworks/" },
    { label: "Blizzard - パッチノート（2025年6月）", url: "https://overwatch.blizzard.com/en-us/news/patch-notes/live/2025/06/" },
    { label: "나무위키 - 아틀리스", url: "https://namu.wiki/w/%EC%95%84%ED%8B%80%EB%A6%AC%EC%8A%A4" },
  ],
});
