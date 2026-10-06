OW.registerMap({
  id: "nepal",
  name: "ネパール",
  nameEn: "Nepal",
  mode: "control",
  location: "ネパール（ヒマラヤ山中のシャンバリの僧院）",
  image: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/f/f3/Nepal_loading_screen.jpg/revision/latest/scale-to-width-down/800?cb=20190412043102",
  summary:
    "ヒマラヤの僧院と麓の村で戦う初期実装のコントロールマップ。村は建物に囲まれた中庭、祠は開けた広場、聖域は崖に面した屋内の拠点。入口の取り合いと、聖域での落下死の管理が勝敗を分ける。",
  features: [
    "村と聖域は拠点への入口が限られ、チョークの取り合いになりやすい",
    "聖域は拠点の片側が崖に面しており、ノックバックで落下死させられる",
    "祠は拠点が広く開けていて、周囲の段差や回廊から撃ち下ろせる",
    "建物の二階やバルコニーなど、拠点を見下ろす高所がどのサブマップにもある",
  ],
  comps: [
    { name: "ラッシュ", fit: "best", body: "村と聖域は入口が狭く拠点も近距離。まとまって一気に入口を突破し、拠点上で殴り合う形が強い。" },
    { name: "ダイブ", fit: "ok", body: "祠は開けていて上から飛び込みやすい。村と聖域では入口を固められると飛び込む角度が限られる。" },
    { name: "ポーク", fit: "weak", body: "祠以外は射線が短い。祠でも周囲の段差に距離を潰されやすく、主力にはしにくい。" },
  ],
  sections: [
    {
      title: "村（Village）",
      sub: "家々に囲まれた中庭の拠点。入口が少なくバルコニーから見下ろせる",
      attack: [
        "入口が限られるので、メイのアイスウォールなどで分断されないよう同時に入る",
        "拠点を見下ろす二階やバルコニーを先に取り、上から援護しながら踏む",
        "建物の中を抜ける側道から回り込み、正面の相手を挟む",
      ],
      defense: [
        "入口を壁や範囲攻撃で塞ぎ、相手の突入タイミングをずらす",
        "高所と拠点の両方に人を置き、入ってきた相手を十字砲火で迎える",
        "建物内の側道からの裏取りに注意し、サポートの位置を工夫する",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/b/bd/Nepal_Village.png/revision/latest/scale-to-width-down/800?cb=20190506070952",
          file: "Nepal Village.png",
          caption: "村の家並みと石段。木造の家屋と石垣が入り組み、段差が多い",
        },
      ],
    },
    {
      title: "祠（Shrine）",
      sub: "広く開けた円形の拠点。周囲を段差と回廊が囲む",
      attack: [
        "拠点が広く、開けた場所を横切ると撃たれやすい。回廊や柱の陰を伝って近づく",
        "周囲の段差を取れれば拠点全体を見下ろせる。高所から削ってから入る",
        "開けた拠点はダイブの着地点が多い。後衛に同時に飛びつく",
      ],
      defense: [
        "拠点の中央に立ち尽くさず、周囲の遮蔽と段差を使って戦う",
        "拠点が広いので、無理に全員で踏まず端に触れてカウントを止める役を決める",
        "相手が段差を取りに来るルートを読んで先に潰す",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/a/a9/Nepal_Shrine.png/revision/latest/scale-to-width-down/800?cb=20190506070949",
          file: "Nepal Shrine.png",
          caption: "祠エリアの寺院へ続く大階段と石柱。階段の上下で高低差が大きい",
        },
      ],
    },
    {
      title: "聖域（Sanctum）",
      sub: "崖に面した屋内の拠点。上の部屋と奥の部屋がある",
      attack: [
        "拠点の崖側は落下死ポイント。ルシオやファラのノックバックで相手を落とす",
        "入口が狭いので、壁で分断されないようタイミングを揃えて入る",
        "拠点を見下ろす上の部屋を取ると、拠点内の相手を一方的に撃てる",
      ],
      defense: [
        "崖を背にしない。拠点の奥側に立って戦う",
        "上の部屋や奥の部屋を使い、拠点への入口を十字に見張る",
        "奥の部屋はシンメトラのタレットやテレポーターを置く場所にもなる",
      ],
      shots: [
        {
          url: "https://static.wikia.nocookie.net/overwatch_gamepedia/images/3/32/Nepal_Sanctum.png/revision/latest/scale-to-width-down/800?cb=20190506070950",
          file: "Nepal Sanctum.png",
          caption: "聖域の屋内広間。中央に光る円形の床があり、周囲を柱と壁、左奥の階段が囲む",
        },
      ],
    },
  ],
  tips: [
    "村と聖域ではメイの壁が入口封鎖に強い。攻める側は壁を想定して突入タイミングを分散させない",
    "聖域ではノックバック持ちが常に環境キルを狙える。落とされる側は崖際から離れる",
    "どのサブマップも高所の取り合いが重要。開幕は誰が上を取るか決めてから動く",
    "祠は開けているので、遮蔽を伝って移動するだけで被弾が大きく減る",
  ],
  mistakes: [
    "聖域で崖を背にして戦い、ノックバックで落とされる",
    "村の狭い入口に一人ずつ入り、各個撃破される",
    "祠で拠点の中央に固まり、周囲の高所から削られる",
    "上の部屋や二階の高所を放置して拠点の取り合いだけをする",
  ],
  sources: [
    { label: "Overwatch Wiki - Nepal", url: "https://overwatch.fandom.com/wiki/Nepal" },
  ],
});
