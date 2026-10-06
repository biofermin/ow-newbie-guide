OW.registerMap({
  id: "circuit-royal",
  name: "サーキット・ロワイヤル",
  nameEn: "Circuit Royal",
  mode: "escort",
  location: "モナコ・モンテカルロ",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/10/Monte_Carlo.jpg/revision/latest/scale-to-width-down/800?cb=20220926230154",
  summary:
    "モナコの街並みとレースコースを進むエスコートマップ。第1区間と最終区間はペイロード沿いの射線が長く、長射程ヒーローの存在感が非常に大きい。2024年10月（シーズン13）のリワークで攻撃側の出口と側面ルートが増えたが、高所と射線の取り合いが勝敗を分ける構図は変わらない。",
  features: [
    "第1区間・最終区間ともに直線的で遮蔽が少なく、スナイパーやヒットスキャンの射線が通りやすい",
    "第2区間はペイロードが急勾配のヘアピン（シケイン）を螺旋状に登る縦長の構造。水平距離は短く、高低差の戦いが中心",
    "第1区間の道路の先は大きく開けたエリアで、落下による環境キルが起きる場所あり",
    "最終区間はホテル内の高所が多く、右側のプールエリアやピンクの部屋（Le Pink Rose）を抜ける側面ルートが攻撃の生命線",
    "リワーク後は各区間の攻撃側スポーンに出口が追加され、スポーンキャンプされにくくなっている",
  ],
  comps: [
    { name: "ポーク", fit: "best", body: "長い直線と高所が多く、ウィドウメイカーやアッシュ、ハンゾーなどの長射程が最大限に活きる。シグマなど遮蔽を作れるタンクと組み、射線の外から削り合いに持ち込む。" },
    { name: "ダイブ", fit: "ok", body: "ファラやエコー、ウィンストンなど縦方向に動けるヒーローなら高所の敵スナイパーへ直接触れる。特に第2区間の坂は上下の移動力がそのまま有利になる。" },
    { name: "ラッシュ", fit: "weak", body: "開けた直線では近づく前に削られやすい。最終区間の屋内寄りの部分や側面ルートとの挟み込みに限定して使う。" },
  ],
  sections: [
    {
      title: "第1区間：カジノ前〜第1チェックポイント",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/62/Circuit_Royal_P1_Attacker_Spawn_S13r_After_2.jpg/revision/latest/scale-to-width-down/800?cb=20241015110447",
          file: "Circuit Royal P1 Attacker Spawn S13r After 2.jpg",
          caption: "第1区間スタートの攻撃スポーン前。広場の先の道路にペイロード、階段で上段へ出られる",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/c/c9/Circuit_Royal_P1_Bridge_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015110451",
          file: "Circuit Royal P1 Bridge S13r After.jpg",
          caption: "第1区間の橋と高所周辺。右手のバルコニー状の高所から道路を見下ろせる",
        },
      ],
      sub: "右カーブ→左カーブの後、U字の先がチェックポイント",
      attack: [
        "ペイロード上のアーチや左右の高所を取らないと前進できない。まず高所への上り口を確保",
        "リワークで追加された奥側の側面ルートから橋付近の高所へ回り込み、防衛側の射線を横から崩す",
        "スポーン出口が複数あるので、狙われている出口を避けて別ルートから出る",
        "道路の先の開けたエリアでは落下に注意。ノックバック持ちの敵がいるときは端に立たない",
      ],
      defense: [
        "左右の高所と橋の上から長い射線で削り、攻撃側を開けた道路に縛り付ける",
        "リワークで防衛側右手の高所への階段が撤去されている。高所を失ったときの取り返しに時間がかかる点を意識",
        "終盤の開けたエリアではノックバックで環境キルを狙える",
        "攻撃側スポーン近くまで押し上げても出口が多く、スポーンキャンプは効きにくい。前に出すぎない",
      ],
    },
    {
      title: "第2区間：ヘアピンの登り坂〜ホテル前",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ab/Circuit_Royal_P2_Chicane_Below_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015111027",
          file: "Circuit Royal P2 Chicane Below S13r After.jpg",
          caption: "第2区間のシケインを下から。右の斜面と植え込みの段差が上の高所へつながる",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/06/Circuit_Royal_P2_Chicane_Above_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015111044",
          file: "Circuit Royal P2 Chicane Above S13r After.jpg",
          caption: "第2区間のシケインを上から。ヘアピン状の坂で、低い植え込みが遮蔽になる",
        },
      ],
      sub: "移動の大半が縦方向。高所の取り合いが全て",
      attack: [
        "ペイロードは急な坂を螺旋状に登る。下から撃ち上げる不利な形になりやすいので、横の高所ルートを並行して押さえる",
        "リワークで低く広くなったシケインの高所と、その奥に開いた側面ルートを使って防衛の陣取りへ回り込む",
        "ファラやエコー、ウィンストン、D.Vaなど縦の機動力を持つヒーローが活きる区間",
      ],
      defense: [
        "坂の上から撃ち下ろせる位置関係を活かし、坂の途中でペイロードを止める",
        "距離自体は短く、高所を一度失うと一気に押し込まれる。高所の維持に人数とスキルを割く",
        "坂の下層の遮蔽はリワークで増えている。下で粘る相手には範囲攻撃やウルトでまとめて崩す",
      ],
    },
    {
      title: "第3区間（最終区間）：ホテル〜ゴール",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/82/Circuit_Royal_P3_Poolside_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015111041",
          file: "Circuit Royal P3 Poolside S13r After.jpg",
          caption: "最終区間のプールエリア。側面ルートの一つで、階段や柱が遮蔽になる",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/1/18/Circuit_Royal_P3_Le_Pink_Rose_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015111038",
          file: "Circuit Royal P3 Le Pink Rose S13r After.jpg",
          caption: "最終区間のピンクの部屋（Le Pink Rose）。側面ルートの屋内部分で出入口が複数ある",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/4/43/Circuit_Royal_P3_Final_Hallway_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015111035",
          file: "Circuit Royal P3 Final Hallway S13r After.jpg",
          caption: "最終区間の天井の高い廊下。奥の通路まで射線が通る",
        },
      ],
      sub: "高所の多いホテル内。防衛側スポーンはホテル奥",
      attack: [
        "ペイロード沿いは高所が多く、正面から突っ込むと上から一方的に撃たれる",
        "右側のプールエリアやピンクの部屋の側面ルート（リワークで拡張）から回り込み、正面と同時に仕掛ける",
        "最後の廊下のアーチがリワークで高くなり、遠くから防衛を撃てるようになった。ポークで1人落としてから押す",
      ],
      defense: [
        "高所と奥からの射線を活かし、ペイロードに近づく前に削る",
        "プール側の側面ルートを見張る役を決め、挟み込みを防ぐ",
        "防衛側スポーンが近く帰還が早い。人数不利なら無理に戦わず合流を待つ",
      ],
    },
  ],
  tips: [
    "全区間でスナイパーの射線が強い。相手にウィドウメイカーやアッシュがいるなら遮蔽伝いの移動を徹底",
    "「高所を取る→ペイロードを押す」の順番。ペイロードに乗るのは高所の取り合いに勝ってから",
    "攻撃側はスポーンの複数の出口を使い分け、同じ出口から出続けない",
    "第2区間は上下の位置関係で有利不利が決まる。坂の下に溜まらず、横の高所へ散る",
  ],
  mistakes: [
    "長い直線をペイロードに乗ったまま正面から押し、高所から一方的に削られる",
    "第2区間の坂で全員がペイロード周りに固まり、上からの範囲攻撃やウルトでまとめて倒される",
    "最終区間で側面ルートを無視し、正面の撃ち合いだけで突破しようとする",
    "防衛側が前に出すぎて、遮蔽の少ない第1区間の道路で撃ち負ける",
  ],
  sources: [
    { label: "Overwatch Wiki - Circuit Royal", url: "https://overwatch.fandom.com/wiki/Circuit_Royal" },
  ],
});
