OW.registerMap({
  id: "havana",
  name: "ハバナ",
  nameEn: "Havana",
  mode: "escort",
  location: "キューバ・ハバナ",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/9/93/Havana.png/revision/latest/scale-to-width-down/800?cb=20190512033804",
  summary:
    "キューバの街並みから蒸留所、海沿いの要塞へとペイロードを運ぶエスコートマップ。第1区間と最終区間は長い直線、第2区間は屋内の蒸留所という対照的な構成で、長射程ヒーローの価値が非常に高い。ペイロードの進みが遅めで、攻撃側は時間管理も重要。",
  features: [
    "第1区間と最終区間はペイロード沿いの直線が長く遮蔽が少ない。スナイパーやヒットスキャンが強い",
    "第2区間の蒸留所（Don Rumbotico）は屋内。2階の通路と大きなタンクで射線が切れ、近距離戦が中心",
    "最終区間の要塞（Sea Fort）入口付近には落下死ポイントがあり、その下の層は要塞の側面や入口へ回り込める迂回路",
    "要塞内には高所が2か所あり、射線にも遮蔽にもなる",
    "ペイロード速度が比較的遅く、押し続けないと時間が足りなくなりやすい",
  ],
  comps: [
    { name: "ポーク", fit: "best", body: "第1区間と最終区間の長い直線はウィドウメイカーやアッシュ、ソジョーンの独壇場。シグマなど遮蔽を作れるタンクと組み、射線の外から削る。" },
    { name: "ラッシュ", fit: "ok", body: "第2区間の蒸留所は射線が切れる屋内で、ラインハルトやジャンカー・クイーンの押し込みが通る。直線区間では近づく前に削られるので区間を選ぶ。" },
    { name: "ダイブ", fit: "ok", body: "高所に陣取るスナイパーへウィンストンやD.Va、ゲンジなどで直接触れるのは有効。ただ開けた直線では飛び込む前後に削られやすい。" },
  ],
  sections: [
    {
      title: "第1区間：市街地〜蒸留所",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/ac/Havana_P1_Attacker_Spawn_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153521",
          file: "Havana P1 Attacker Spawn S13r After.jpg",
          caption: "第1区間スタートの攻撃スポーン前。ペイロードの左奥へ長い通りが続く",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/8/82/Havana_P1_Intersection_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153525",
          file: "Havana P1 Intersection S13r After.jpg",
          caption: "第1区間の交差点。右の建物のバルコニーなど、通り沿いの高所に注意",
        },
      ],
      sub: "長い通りの先で右→左にカーブ",
      attack: [
        "リワーク（2024年10月）でスポーン2階の一部がバルコニーになり出口が追加された。高所から撃ち返しつつ出る",
        "通り沿いの建物の高所を取ってから前進する。ペイロードだけを押すと長い射線に晒される",
        "蒸留所手前のカフェのバルコニーはリワークで低くなり、防衛の撃ち下ろしが弱まった。カーブ付近から一気に詰める",
      ],
      defense: [
        "長い通りを縦に見るスナイパーで攻撃側の出足を削る",
        "交差点付近の建物の高所を拠点に、通りへ出てくる相手を撃つ",
        "防衛側スポーンは蒸留所内で近い。序盤は前で粘りやすいが、出すぎて囲まれない",
      ],
    },
    {
      title: "第2区間：蒸留所〜海沿い",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/0/00/Havana_P2_Doorways_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153531",
          file: "Havana P2 Doorways S13r After.jpg",
          caption: "蒸留所の内部。2階をぐるりと囲む通路と、1階の側面の出入口",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/6/63/Havana_P2_Coastside_Platform_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153528",
          file: "Havana P2 Coastside Platform S13r After.jpg",
          caption: "第2区間の海沿いの足場（リワークで改修）。手すり付きの段差が遮蔽になる",
        },
      ],
      sub: "屋内の蒸留所を抜け、海沿いの角の建物へ",
      attack: [
        "蒸留所内は射線が切れる近距離戦。ラッシュ寄りの構成で一気に押し込みやすい",
        "2階の通路と、事務所側の廊下からチェックポイント上へ回り込める",
        "リワークで扉が追加・拡張され、海沿いの足場も作り直された。側面の出入り口を使って挟み込む",
      ],
      defense: [
        "タンクで射線が切れるため、2階通路から撃ち下ろす角度を確保する",
        "事務所の廊下を通る裏取りに注意",
        "蒸留所を出た海沿いは射線が通る。ペイロードが出口に近づいたら外の位置取りへ切り替える",
      ],
    },
    {
      title: "第3区間（最終区間）：海沿いの直線〜要塞",
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/e/eb/Havana_P3_Outside_Attacker_Spawn_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153539",
          file: "Havana P3 Outside Attacker Spawn S13r After.jpg",
          caption: "最終区間の攻撃スポーン前。木箱が遮蔽になり、階段など出口が複数ある",
        },
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/5/56/Havana_P3_Castle_Wall_S13r_After.jpg/revision/latest/scale-to-width-down/800?cb=20241015153534",
          file: "Havana P3 Castle Wall S13r After.jpg",
          caption: "要塞の城壁周り。城壁沿いのスロープと、左の橋の下を通る下層ルート",
        },
      ],
      sub: "遮蔽の少ない長い直線と要塞",
      attack: [
        "要塞への直線は遮蔽が少ない。リワークで防衛側の射線が減り、要塞手前の経路も増えたので、まとまって前進する",
        "入口下の層を通って要塞の側面へ回り込み、正面と挟む",
        "最終スポーンはリワークで出口が増えている。スポーンキャンプされたら別の出口から出る",
        "要塞内の高所2か所を取れれば最終盤は押し切りやすい",
      ],
      defense: [
        "崩れた角の建物や要塞の隙間から高所を維持し、直線で削る",
        "入口付近の落下ポイントへノックバックで落とせる（ルシオ、ドゥームフィスト、ファラなど）",
        "要塞の左側（攻撃側から見て）の開口部からの側面攻撃に備える",
      ],
    },
  ],
  tips: [
    "長射程ヒーローの撃ち合いが試合を左右する。スナイパー対策（遮蔽の使い方、ダイブ役の割り当て）を最初に決める",
    "リーパーなど射程の短いヒーローは第1区間と最終区間で苦しい。区間に合わせて交代を検討",
    "ペイロードが遅いので、攻撃側は集団戦に勝ったら確実にペイロードに乗る",
    "最終区間の落下ポイント付近では、防衛・攻撃ともにノックバックを常に警戒",
  ],
  mistakes: [
    "第1区間の長い通りを遮蔽なしで歩き、スナイパーに抜かれ続ける",
    "蒸留所内で2階を取らず、1階のペイロード周りだけで戦う",
    "最終区間の直線でバラバラに前進し、要塞の高所から各個撃破される",
    "要塞入口付近で端に立ち、ノックバックで落とされる",
  ],
  sources: [
    { label: "Overwatch Wiki - Havana", url: "https://overwatch.fandom.com/wiki/Havana" },
  ],
});
