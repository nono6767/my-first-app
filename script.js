// 「悩み」と「おすすめエクササイズ」の対応表。
// concern.genders / exercise.genders を指定しない場合は、男女どちらにも共通で表示されます。
// 「男性に多い」「女性に多い」はあくまで一般的な傾向であり、個人差があります。
const CONCERNS = [
  {
    id: "shoulder-stiffness",
    label: "肩こり・首の張り",
    exercises: [
      { name: "ロールダウン", note: "背骨を一つずつ動かし、肩まわりの緊張をほぐす" },
      { name: "アームサークル", note: "肩甲骨まわりを大きく動かして可動域を広げる" },
      { name: "ショルダーブリッジ", note: "背中〜肩の張りを開放しながら体幹も使う" },
    ],
  },
  {
    id: "round-back",
    label: "猫背・円背",
    exercises: [
      { name: "スワン", note: "胸を開き、背骨を反らす動きで姿勢を整える" },
      { name: "チェストリフト", note: "腹筋を使いながら正しい上体の起こし方を身につける" },
      { name: "ロールアップ", note: "背骨を一節ずつ動かす感覚を養う" },
    ],
  },
  {
    id: "sway-back",
    label: "反り腰",
    exercises: [
      { name: "ペルビックカール", note: "骨盤の動きを意識し、腰の反りを軽減する" },
      { name: "ニーストレッチ", note: "体幹を安定させながら股関節を動かす" },
      { name: "アブドミナルカール", note: "腹筋を使って骨盤の位置を安定させる" },
      {
        name: "骨盤底筋との連動エクササイズ",
        note: "女性は骨盤の構造上、反り腰になりやすい傾向があるため、骨盤底筋と腹筋の連動を意識する",
        genders: ["female"],
      },
    ],
  },
  {
    id: "low-back-pain",
    label: "腰痛",
    exercises: [
      { name: "ペルビッククロック", note: "骨盤を小さく動かし、腰まわりの緊張を緩める" },
      { name: "キャットストレッチ", note: "背骨をやさしく動かし、腰への負担を軽くする" },
      { name: "バードドッグ", note: "体幹を安定させながら腰への負担を減らす" },
    ],
  },
  {
    id: "pelvic-instability",
    label: "骨盤の歪み・不安定感",
    exercises: [
      { name: "ペルビックカール", note: "骨盤を安定させる感覚を養う" },
      { name: "レッグサークル", note: "股関節から脚を動かし、骨盤の安定性を高める" },
      { name: "サイドキック", note: "横向きで骨盤を固定したまま脚を動かす練習" },
    ],
  },
  {
    id: "weak-core",
    label: "姿勢の崩れ・体幹の弱さ",
    exercises: [
      { name: "ハンドレッド", note: "呼吸と合わせて体幹全体を温め、意識づけする" },
      { name: "プランク", note: "体幹全体を使って姿勢を支える力をつける" },
      { name: "ロールアップ", note: "腹筋を使いながら背骨を動かす感覚を養う" },
      {
        name: "胸郭モビリティ（呼吸連動）",
        note: "男性は胸郭や肩まわりが硬くなりやすいため、呼吸と合わせて胸郭の動きを引き出す",
        genders: ["male"],
      },
    ],
  },
  {
    id: "tight-hips",
    label: "股関節の硬さ",
    exercises: [
      { name: "ヒップオープナー", note: "股関節まわりをゆっくり広げる" },
      { name: "スパインツイスト", note: "上半身のひねりと合わせて股関節の柔軟性を促す" },
      { name: "マーメイド", note: "体側を伸ばしながら股関節まわりをほぐす" },
      {
        name: "腸腰筋・股関節前面のリリース",
        note: "男性は股関節が硬く、骨盤を立てて座ること自体が難しい場合があるため、まず前面の硬さをゆるめる",
        genders: ["male"],
      },
      {
        name: "骨盤ニュートラルの座位ドリル",
        note: "クッションや台を使い、無理なく骨盤を立てて座る感覚をつくる",
        genders: ["male"],
      },
    ],
  },
  {
    id: "leg-alignment",
    label: "O脚・脚のゆがみ",
    exercises: [
      { name: "レッグサークル", note: "脚全体の動きを整え、まっすぐな軌道を意識する" },
      { name: "サイドレッグリフト", note: "脚の外側・内側の筋肉バランスを整える" },
      { name: "内もものエクササイズ", note: "内転筋を使い、脚のラインを安定させる" },
    ],
  },
  {
    id: "postpartum",
    label: "産後の骨盤ケア",
    genders: ["female"],
    exercises: [
      { name: "軽めのペルビックカール", note: "無理のない範囲で骨盤まわりを動かす" },
      { name: "骨盤底筋エクササイズ", note: "呼吸と合わせて骨盤底筋をやさしく鍛える" },
      { name: "優しいブリッジ", note: "腰やお腹に負担をかけずに体幹を使う" },
    ],
  },
  {
    id: "menstrual-cycle",
    label: "生理周期の不調（PMS・生理痛）",
    genders: ["female"],
    exercises: [
      { name: "ペルビッククロック", note: "骨盤まわりをやさしく動かし血流を促す" },
      { name: "ラテラルブリージング", note: "呼吸を深めて緊張をゆるめる" },
      { name: "ソフトスパインツイスト", note: "無理のない範囲で背骨をひねり巡りを促す" },
    ],
  },
  {
    id: "cold-swelling",
    label: "冷え・むくみ",
    exercises: [
      { name: "レッグサークル", note: "脚全体を動かして血流を促す" },
      { name: "足首のポンピング", note: "ふくらはぎの動きで下半身の巡りを促す" },
      { name: "スワンストレッチ", note: "全身を大きく動かし、巡りを良くする" },
    ],
  },
];

// 姿勢の側面シルエット図。基準の垂直線（plumb line）に対して、
// 耳・肩峰・骨盤（大転子）・膝・くるぶしの5点がどれだけ前後にずれるかで
// それぞれの姿勢タイプを表現する（実際の姿勢分析で使われる方法と同じ考え方）。
//
// params:
//   earDx / shoulderDx / hipDx / kneeDx / ankleDx : 基準線からの前後のずれ（+で前方、-で後方）
//   backBulge : 胸椎後弯（猫背）の強さ（値が大きいほど背中が後ろに丸まる）
//   frontBulge : 腰椎前弯（反り腰）の強さ（値が大きいほど腰が前に反る。マイナスで平背方向）
//   pelvisRotation : 骨盤ブロックの回転角度（骨盤前傾・後傾の表現用）
function buildPostureDiagram({
  earDx = 0,
  shoulderDx = 0,
  hipDx = 0,
  kneeDx = 0,
  ankleDx = 0,
  backBulge = 0,
  frontBulge = 0,
  pelvisRotation = 0,
} = {}) {
  const plumbX = 41;
  const earX = plumbX + earDx;
  const shoulderX = plumbX + shoulderDx;
  const hipX = plumbX + hipDx;
  const kneeX = plumbX + kneeDx;
  const ankleX = plumbX + ankleDx;

  const shoulderY = 30;
  const midY = 54;
  const waistY = 78;
  const hipCenterY = 87;
  const legTopY = 96;
  const kneeY = 112;
  const ankleY = 128;
  const footY = 133;

  const frontTop = shoulderX + 8;
  const backTop = shoulderX - 8;
  const frontMid = (frontTop + (hipX + 8)) / 2;
  const backMid = (backTop + (hipX - 8)) / 2 - backBulge;
  const frontWaist = hipX + 8 + frontBulge;
  const backWaist = hipX - 8;

  const head = `<circle cx="${earX}" cy="14" r="8" class="part"/>`;
  const neck = `<path d="M${earX - 4},22 L${earX + 4},22 L${frontTop},${shoulderY} L${backTop},${shoulderY} Z" class="part"/>`;
  const torso = `<path d="M${frontTop},${shoulderY} C${frontTop},${shoulderY + 12} ${frontMid},${midY - 6} ${frontMid},${midY} C${frontMid},${midY + 12} ${frontWaist},${waistY - 10} ${frontWaist},${waistY} L${backWaist},${waistY} C${backWaist},${waistY - 10} ${backMid},${midY + 12} ${backMid},${midY} C${backMid},${midY - 6} ${backTop},${shoulderY + 12} ${backTop},${shoulderY} Z" class="part"/>`;

  const pelvisTransform = pelvisRotation
    ? ` transform="rotate(${pelvisRotation} ${hipX} ${hipCenterY})"`
    : "";
  const pelvis = `<g${pelvisTransform}><rect x="${hipX - 10}" y="${waistY}" width="20" height="18" rx="7" class="part"/><line x1="${hipX - 9}" y1="${hipCenterY}" x2="${hipX + 9}" y2="${hipCenterY}" class="pelvis-line"/></g>`;

  const leg = `<path d="M${hipX + 7},${legTopY} L${kneeX + 4},${kneeY} L${ankleX + 3},${ankleY} L${ankleX + 5},${footY} L${ankleX - 5},${footY} L${ankleX - 3},${ankleY} L${kneeX - 4},${kneeY} L${hipX - 7},${legTopY} Z" class="part"/>`;

  const plumb = `<line x1="${plumbX}" y1="6" x2="${plumbX}" y2="134" class="plumb"/>`;

  const dot = (x, y) => `<circle cx="${x}" cy="${y}" r="2.6" class="landmark"/>`;
  const landmarks =
    dot(earX, 14) +
    dot(shoulderX, shoulderY) +
    dot(hipX, hipCenterY) +
    dot(kneeX, kneeY) +
    dot(ankleX, ankleY - 2);

  return `<svg viewBox="0 0 82 140" class="posture-diagram">${leg}${pelvis}${torso}${neck}${head}${plumb}${landmarks}</svg>`;
}

const POSTURE_DIAGRAM_PARAMS = {
  "kyphosis-lordosis": {
    earDx: 9,
    shoulderDx: 4,
    hipDx: 1,
    kneeDx: -3,
    backBulge: 9,
    frontBulge: 7,
    pelvisRotation: 12,
  },
  "flat-back": {
    earDx: 3,
    shoulderDx: -1,
    hipDx: -4,
    kneeDx: -1,
    pelvisRotation: -10,
  },
  "posture-sway-back": {
    earDx: 6,
    shoulderDx: -5,
    hipDx: 7,
    kneeDx: -2,
    backBulge: 8,
    pelvisRotation: -10,
  },
  "forward-head": { earDx: 10, shoulderDx: 1 },
  "rounded-shoulders": { earDx: 2, shoulderDx: 8, backBulge: 4 },
  "posture-round-back": { earDx: 5, shoulderDx: 3, kneeDx: -1, backBulge: 8 },
  "anterior-pelvic-tilt": { hipDx: 1, frontBulge: 6, pelvisRotation: 18 },
  "posterior-pelvic-tilt": { hipDx: -1, frontBulge: -4, pelvisRotation: -18 },
};

const POSTURE_DIAGRAMS = Object.fromEntries(
  Object.entries(POSTURE_DIAGRAM_PARAMS).map(([id, params]) => [
    id,
    buildPostureDiagram(params),
  ])
);

// 姿勢タイプ（インストラクターの視診・触診による評価）と、おすすめエクササイズの対応表。
const POSTURE_ASSESSMENTS = [
  {
    id: "kyphosis-lordosis",
    label: "カイホロードシス（円背＋反り腰の複合型）",
    shortLabel: "カイホロードシス",
    habitHypothesis:
      "長時間のデスクワークやスマートフォンの使用で、頭が前に出て背中が丸まった姿勢が習慣化している可能性があります。",
    exercises: [
      { name: "チェストオープナー", note: "硬くなった大胸筋をゆるめ、丸まった胸まわりを開く" },
      { name: "ペルビックカール", note: "腹筋・殿筋を使い、骨盤の前傾と反り腰を整える" },
      { name: "キャットストレッチ", note: "胸椎の可動性を引き出し、背骨全体のバランスを整える" },
    ],
  },
  {
    id: "flat-back",
    label: "フラットバック",
    shortLabel: "フラットバック",
    habitHypothesis:
      "骨盤を後ろに倒して座る（背もたれに寄りかかる）姿勢を長時間続けている可能性があります。運動不足により体幹・お尻・もも裏の筋肉が衰えていることも関係しやすい傾向です。",
    exercises: [
      { name: "ハムストリングスストレッチ", note: "硬くなりやすいハムストリングスをゆるめ、骨盤の動きを取り戻す" },
      { name: "ニーストレッチ", note: "弱くなりやすい腸腰筋を働かせ、骨盤を動かす感覚をつくる" },
      { name: "バックエクステンション", note: "平坦になった腰椎のカーブを取り戻す" },
    ],
  },
  {
    id: "posture-sway-back",
    label: "スウェイバック",
    shortLabel: "スウェイバック",
    habitHypothesis:
      "骨盤を前に突き出し、お腹の力を抜いて楽に立つ姿勢が習慣化している可能性があります。長時間の立ち仕事や、体幹で支える意識の少なさも関係しやすい傾向です。",
    exercises: [
      { name: "ペルビッククロック", note: "股関節が前に流れた骨盤の位置を、ニュートラルに戻す感覚を養う" },
      { name: "ニーストレッチ", note: "腸腰筋を活性化し、股関節が前に突き出す姿勢を整える" },
      { name: "スタンディングアライメントドリル", note: "壁を使い、耳・肩・骨盤・くるぶしのラインを揃える練習をする" },
    ],
  },
  {
    id: "forward-head",
    label: "フォワードヘッド（頭部前方位）",
    shortLabel: "フォワードヘッド",
    habitHypothesis:
      "スマートフォンやパソコンの画面を見るときに、頭が前に出る姿勢が習慣化している可能性があります。",
    exercises: [
      { name: "チンタック", note: "深層の頸部屈筋を働かせ、頭の位置を引き戻す" },
      { name: "胸椎伸展ストレッチ", note: "丸まりやすい上部背中を伸ばし、頭が前に出る姿勢を整える" },
      { name: "スワン", note: "僧帽筋下部を使いながら、頭〜背中のラインを整える" },
    ],
  },
  {
    id: "rounded-shoulders",
    label: "巻き肩",
    shortLabel: "巻き肩",
    habitHypothesis:
      "長時間のデスクワークや、腕を体の前で使う動作（運転・スマホ操作など）が多いことが関係している可能性があります。",
    exercises: [
      { name: "チェストオープナー", note: "硬くなった大胸筋・小胸筋をゆるめる" },
      { name: "アームサークル（外旋方向）", note: "菱形筋・僧帽筋中部を使い、肩を正しい位置に引き戻す" },
      { name: "スワン", note: "胸を開きながら肩甲骨まわりの筋肉を使う" },
    ],
  },
  {
    id: "posture-round-back",
    label: "猫背（胸椎後弯・頭部前方位）",
    shortLabel: "猫背",
    habitHypothesis:
      "猫背姿勢での座り作業や、運動不足による背中まわりの筋力低下が習慣化している可能性があります。",
    exercises: [
      { name: "スワン", note: "胸を開き、丸まった背中を伸ばす" },
      { name: "チェストリフト", note: "正しい上体の起こし方を身につけ、猫背の癖を減らす" },
      { name: "ロールアップ", note: "背骨を一節ずつ動かす感覚を養い、姿勢を整える" },
    ],
  },
  {
    id: "anterior-pelvic-tilt",
    label: "骨盤前傾",
    shortLabel: "骨盤前傾",
    habitHypothesis:
      "反り腰につながりやすい、腰を反らして立つクセや、股関節前面の硬さが関係している可能性があります。",
    exercises: [
      { name: "ペルビックカール", note: "腹筋・殿筋を使い、前に傾いた骨盤を戻す" },
      { name: "腸腰筋ストレッチ", note: "骨盤を前に引っ張る腸腰筋の硬さをゆるめる" },
      { name: "アブドミナルカール", note: "下部腹筋を使い、骨盤の傾きを安定させる" },
    ],
  },
  {
    id: "posterior-pelvic-tilt",
    label: "骨盤後傾",
    shortLabel: "骨盤後傾",
    habitHypothesis:
      "骨盤を後ろに倒して座る・立つクセが習慣化している可能性があります。",
    exercises: [
      { name: "ハムストリングスストレッチ", note: "骨盤を後ろに引っ張るハムストリングスの硬さをゆるめる" },
      { name: "ニーストレッチ", note: "弱くなりやすい腸腰筋を働かせる" },
      { name: "バックエクステンション", note: "失われがちな腰のカーブを取り戻す" },
    ],
  },
];

// 運動経歴（スポーツ歴）と、おすすめエクササイズの対応表。
// exercise.tag: "クセ改善"（そのスポーツで生じやすいクセ・アンバランスへのアプローチ）
//              / "パフォーマンス"（そのスポーツの上達のためのアプローチ）
const SPORTS = [
  {
    id: "golf",
    label: "ゴルフ",
    exercises: [
      {
        name: "スパインツイスト（非利き手方向を重点的に）",
        note: "スイングで偏った回旋パターンを、両方向でバランスよく使えるようにする",
        tag: "クセ改善",
      },
      {
        name: "ソウ",
        note: "回旋と前屈の複合動作で、股関節と胸椎の連動を整える",
        tag: "クセ改善",
      },
      {
        name: "ペルビックカール",
        note: "前傾姿勢で酷使される腰部を守るため、体幹の安定性を高める",
        tag: "クセ改善",
      },
      {
        name: "オブリークツイスト系エクササイズ",
        note: "スイングの回旋力とスピードを生む腹斜筋を強化する",
        tag: "パフォーマンス",
      },
      {
        name: "スタンディングロータリードリル",
        note: "立位での回旋パワーを、スイングに近い形で強化する",
        tag: "パフォーマンス",
      },
      {
        name: "ヒップヒンジドリル",
        note: "股関節主導のアドレス姿勢（前傾）の質を高める",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "soccer",
    label: "サッカー",
    exercises: [
      {
        name: "腸腰筋ストレッチ",
        note: "キック動作で過緊張しやすい股関節前面をゆるめる",
        tag: "クセ改善",
      },
      {
        name: "内転筋ストレッチ",
        note: "キック動作で酷使されやすい内ももをケアする",
        tag: "クセ改善",
      },
      {
        name: "サイドキック／クラムシェル",
        note: "軸脚・蹴り脚で偏りやすい股関節伸展・外転筋（殿筋）を働かせる",
        tag: "クセ改善",
      },
      {
        name: "シングルレッグブリッジ",
        note: "片脚での体幹・殿筋の安定性とパワーを養う",
        tag: "パフォーマンス",
      },
      {
        name: "レッグサークル",
        note: "股関節の可動性とコントロールを高める",
        tag: "パフォーマンス",
      },
      {
        name: "スタンディングバランスドリル",
        note: "切り返し動作に必要な片脚での安定性を養う",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "tennis",
    label: "テニス",
    exercises: [
      {
        name: "スパインツイスト（非利き手方向を重点的に）",
        note: "打球動作で偏った回旋パターンを整える",
        tag: "クセ改善",
      },
      {
        name: "ショルダーブリッジ",
        note: "利き腕側で酷使されやすい肩まわりをケアしながら体幹を使う",
        tag: "クセ改善",
      },
      {
        name: "チェストオープナー",
        note: "前傾しがちな利き腕側の肩まわりを開く",
        tag: "クセ改善",
      },
      {
        name: "オブリークツイスト系エクササイズ",
        note: "サーブ・ストロークに必要な回旋力を養う",
        tag: "パフォーマンス",
      },
      {
        name: "サイドキック",
        note: "フットワークを支える股関節の安定性を高める",
        tag: "パフォーマンス",
      },
      {
        name: "プランク",
        note: "ショット時の体幹の安定性を強化する",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "surfing",
    label: "サーフィン",
    exercises: [
      {
        name: "チェストオープナー",
        note: "パドリングで丸まりがちな胸まわりを開く",
        tag: "クセ改善",
      },
      {
        name: "キャットストレッチ",
        note: "反り腰姿勢の保持で酷使されやすい腰部をケアする",
        tag: "クセ改善",
      },
      {
        name: "ペルビックカール",
        note: "体幹を使い、腰への負担を軽減する",
        tag: "クセ改善",
      },
      {
        name: "スワン",
        note: "パドリングに必要な背中の伸展筋力を養う",
        tag: "パフォーマンス",
      },
      {
        name: "スパインツイスト",
        note: "ターン動作に必要な回旋の可動性を高める",
        tag: "パフォーマンス",
      },
      {
        name: "サイドキック／クラムシェル",
        note: "テイクオフ・ボード操作を支える股関節の安定性を養う",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "dance",
    label: "ダンス",
    exercises: [
      {
        name: "ペルビックカール",
        note: "過可動域になりやすい骨盤をコントロールする力を養う",
        tag: "クセ改善",
      },
      {
        name: "ハンドレッド",
        note: "柔軟性に頼りがちな体幹の安定性を意識づける",
        tag: "クセ改善",
      },
      {
        name: "ニーストレッチ",
        note: "股関節を安定させてコントロールする力を養う",
        tag: "クセ改善",
      },
      {
        name: "レッグサークル",
        note: "脚の可動域を保ちながらコントロールを高める",
        tag: "パフォーマンス",
      },
      {
        name: "スパインツイスト",
        note: "上半身の表現力を支える回旋のコントロールを養う",
        tag: "パフォーマンス",
      },
      {
        name: "サイドキック",
        note: "片脚でのバランス・軸の安定性を高める",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "running",
    label: "ランニング",
    exercises: [
      {
        name: "腸腰筋ストレッチ",
        note: "繰り返しの股関節屈曲で硬くなりやすい腸腰筋をゆるめる",
        tag: "クセ改善",
      },
      {
        name: "カーフストレッチ",
        note: "着地の衝撃で硬くなりやすいふくらはぎ・アキレス腱まわりをゆるめる",
        tag: "クセ改善",
      },
      {
        name: "サイドキック／クラムシェル",
        note: "弱くなりやすい中殿筋を働かせ、着地時に膝が内側に入るのを防ぐ",
        tag: "クセ改善",
      },
      {
        name: "プランク",
        note: "ランニングフォームを支える体幹の安定性を養う",
        tag: "パフォーマンス",
      },
      {
        name: "レッグサークル",
        note: "股関節の可動域とコントロールを高める",
        tag: "パフォーマンス",
      },
      {
        name: "サイドベンド",
        note: "体幹の側方安定性を高め、腕振り・骨盤の連動をなめらかにする",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "ballet",
    label: "クラシックバレエ",
    exercises: [
      {
        name: "股関節外旋筋のリリース＋ヒップオープナー",
        note: "ターンアウトを深回旋筋だけに頼らず、股関節全体の柔軟性を整える",
        tag: "クセ改善",
      },
      {
        name: "足部・足関節のコンディショニング",
        note: "ポワント・ルルベで酷使される足部内在筋やアキレス腱まわりをケアする",
        tag: "クセ改善",
      },
      {
        name: "ペルビックカール",
        note: "見た目の美しさで反りがちな腰・骨盤を、ニュートラルに戻す感覚を養う",
        tag: "クセ改善",
      },
      {
        name: "サイドキック（深層外旋六筋・中殿筋を意識）",
        note: "股関節主導の質の高いターンアウトを支える筋力を養う",
        tag: "パフォーマンス",
      },
      {
        name: "ハンドレッド",
        note: "アラベスクや高いエクステンションを支えるインナーユニットを強化する",
        tag: "パフォーマンス",
      },
      {
        name: "スパインツイスト",
        note: "体幹の回旋コントロールを、実際の動きに近い形で養う",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "baseball",
    label: "野球",
    exercises: [
      {
        name: "スパインツイスト（非利き手方向を重点的に）",
        note: "投球・打撃で偏った回旋パターンを、両方向でバランスよく使えるようにする",
        tag: "クセ改善",
      },
      {
        name: "チェストオープナー",
        note: "投球側で硬くなりやすい胸まわりをゆるめる",
        tag: "クセ改善",
      },
      {
        name: "サイドベンドストレッチ",
        note: "投球動作で酷使されやすい体幹側面をケアする",
        tag: "クセ改善",
      },
      {
        name: "オブリークツイスト系エクササイズ",
        note: "打撃・送球に必要な回旋力を強化する",
        tag: "パフォーマンス",
      },
      {
        name: "ヒップヒンジドリル",
        note: "股関節主導の下半身始動を高め、上下半身の捻転差を生み出す",
        tag: "パフォーマンス",
      },
      {
        name: "スタンディングロータリードリル",
        note: "地面反力を回旋力に変換する感覚を養う",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "yoga",
    label: "ヨガ",
    exercises: [
      {
        name: "ハンドレッド",
        note: "柔軟性に頼りがちな体幹の安定性を意識づける",
        tag: "クセ改善",
      },
      {
        name: "ニーストレッチ",
        note: "股関節を安定させてコントロールする力を養う",
        tag: "クセ改善",
      },
      {
        name: "ペルビックカール",
        note: "過可動域になりやすい骨盤・腰椎をコントロールする感覚を養う",
        tag: "クセ改善",
      },
      {
        name: "レッグサークル",
        note: "股関節の可動域をコントロールしながら深めていく",
        tag: "パフォーマンス",
      },
      {
        name: "スパインツイスト",
        note: "背骨の回旋をコントロールしながら引き出す",
        tag: "パフォーマンス",
      },
      {
        name: "サイドキック",
        note: "片脚でのバランス・軸の安定性を高める",
        tag: "パフォーマンス",
      },
    ],
  },
  {
    id: "basketball",
    label: "バスケットボール",
    exercises: [
      {
        name: "腸腰筋ストレッチ",
        note: "ジャンプ・ダッシュの繰り返しで硬くなりやすい股関節前面をゆるめる",
        tag: "クセ改善",
      },
      {
        name: "カーフストレッチ",
        note: "ジャンプの着地で酷使されやすいふくらはぎ・アキレス腱まわりをゆるめる",
        tag: "クセ改善",
      },
      {
        name: "サイドキック／クラムシェル",
        note: "着地やカッティング動作で膝が内側に入るのを防ぐ中殿筋を働かせる",
        tag: "クセ改善",
      },
      {
        name: "シングルレッグブリッジ",
        note: "片脚でのジャンプ・着地に必要な殿筋のパワーと安定性を養う",
        tag: "パフォーマンス",
      },
      {
        name: "スタンディングバランスドリル",
        note: "カッティング・切り返し動作に必要な片脚での安定性を養う",
        tag: "パフォーマンス",
      },
      {
        name: "プランク",
        note: "空中での姿勢保持を支える体幹の安定性を強化する",
        tag: "パフォーマンス",
      },
    ],
  },
];

// 左右の高さの違い（肩・骨盤）の対応表。
// 「高い側」＝使いすぎ・過緊張の傾向、「低い側」＝機能低下・使えていない傾向として扱う。
// tightMuscles / weakMuscles は複数の筋肉を列挙できる（side: "high"/"low"、note で補足）。
// exercises の side: "high"（高い側向け）/ "low"（低い側向け）/ "both"（両側・全体向け）
const ASYMMETRY_ITEMS = [
  {
    id: "shoulder-asymmetry",
    label: "肩の高さの左右差",
    habitHypothesis:
      "カバンをいつも同じ側の肩にかける、利き手側ばかりに重心をかけるなど、左右非対称な体の使い方のクセがある可能性があります。",
    tightMuscles: [{ side: "high", muscle: "僧帽筋上部・肩甲挙筋" }],
    weakMuscles: [
      { side: "low", muscle: "僧帽筋下部・前鋸筋" },
      { side: "high", muscle: "僧帽筋下部・前鋸筋", note: "高い側にも起こりやすい" },
    ],
    exercises: [
      { name: "ネックストレッチ＋ロールダウン", note: "首の付け根〜肩の緊張をゆるめる", side: "high" },
      {
        name: "アームサークル（肩甲骨を下げた位置を保ちながら行う）",
        note: "僧帽筋下部・前鋸筋を働かせる感覚を養う",
        side: "both",
      },
      { name: "スワン", note: "鏡を見ながら左右の肩の高さを揃える意識で行う", side: "both" },
    ],
  },
  {
    id: "pelvis-asymmetry",
    label: "骨盤の高さの左右差",
    habitHypothesis:
      "片脚に重心をかけて立つクセ（休めの姿勢）や、脚を組んで座る習慣が関係している可能性があります。",
    tightMuscles: [
      { side: "high", muscle: "腰方形筋（QL）" },
      { side: "high", muscle: "内転筋群", note: "過緊張しやすい" },
    ],
    weakMuscles: [
      { side: "low", muscle: "中殿筋" },
      { side: "low", muscle: "腰方形筋・腹斜筋群", note: "伸長・弱化しやすい" },
    ],
    exercises: [
      { name: "サイドベンドストレッチ", note: "腰まわりの側面の緊張をゆるめる", side: "high" },
      { name: "内ももリリース", note: "過緊張しやすい内転筋群をゆるめる", side: "high" },
      {
        name: "サイドキック／クラムシェル",
        note: "骨盤の水平を保つための中殿筋（お尻の外側）を鍛える",
        side: "low",
      },
      { name: "ペルビッククロック", note: "骨盤の水平を意識しながら整える", side: "both" },
    ],
  },
];

// 姿勢タイプ・左右差（POSTURE_ASSESSMENTS / ASYMMETRY_ITEMS のid）× 運動経歴（SPORTSのid）で、
// その姿勢の傾向がそのスポーツにどう影響しやすいか・パフォーマンス向上のために何を整えるとよいかをまとめた一言。
// 「考えられる生活習慣・クセ（予測）」に運動経歴が組み合わさったときの追加コメントとして使う。
const SPORT_HABIT_INSIGHTS = {
  "kyphosis-lordosis": {
    golf: "胸椎の回旋可動域が不足し、バックスイングが浅くなって腕に頼ったスイングになりやすい状態です。胸を開くケアと体幹の安定強化で、体全体を使った回旋を取り戻しましょう。",
    soccer: "体幹・殿筋が使いにくく、スプリントやキックのパワーが腰に逃げやすい状態です。腹筋・殿筋を強化し、体幹で骨盤を安定させながら脚を振れるようにしましょう。",
    tennis: "胸椎の回旋・伸展が不足し、サーブでの体の反りやテイクバックが浅くなりやすい状態です。胸を開く可動域づくりと体幹強化で、パワーを腕だけに頼らないフォームを目指しましょう。",
    surfing: "反り腰の姿勢がパドリング時の腰への負担を増やしやすい状態です。腹筋・殿筋で骨盤を支えながら、胸椎を使って上体を起こす感覚を養いましょう。",
    dance: "反り腰と丸まった上背中が同時にあると、体幹の支えが不足したまま上体を反らせる動きになりやすい状態です。腹筋・殿筋を使い、見た目の反りに頼らない体幹コントロールを養いましょう。",
    running: "腹筋・殿筋の支えが不足し、着地の衝撃や骨盤の安定を腰で受け止めやすい状態です。体幹・殿筋を強化し、腰への負担を減らしたフォームを目指しましょう。",
    ballet: "胸椎の可動性不足と反り腰が重なると、アラベスクなどの伸展を腰だけで作りやすい状態です。胸椎の可動性と腹筋・殿筋の支えを養い、腰への負担を減らしながら美しいラインを作りましょう。",
    baseball: "胸椎の回旋・伸展が不足し、投球・打撃でのテイクバックが浅くなり、上半身の力みで代償しやすい状態です。胸を開くケアと体幹強化で、下半身から連動した回旋を引き出しましょう。",
    yoga: "反り腰と丸まった上背中が同時にあると、後屈のポーズで腰だけに反りが集中しやすい状態です。体幹・殿筋を使い、背骨全体に均等に伸展を分散させる感覚を養いましょう。",
    basketball: "体幹・殿筋の支えが乏しく、ジャンプの着地やカッティングで腰に負担が集中しやすい状態です。体幹・殿筋を強化し、下半身で衝撃を吸収できるフォームを目指しましょう。",
  },
  "flat-back": {
    golf: "股関節主導のヒップヒンジが作りにくく、アドレス姿勢や切り返しのパワーが手打ちになりやすい状態です。ハムストリングスをゆるめ、股関節から前傾できるようにして、地面からの力をスイングに伝えましょう。",
    soccer: "股関節の伸展が制限され、キックの振り出しやスプリントの蹴り出しでパワーが出しにくい状態です。ハムストリングスの柔軟性と腸腰筋の働きを取り戻し、股関節を大きく使えるようにしましょう。",
    tennis: "股関節から前傾する動きが作りにくく、サーブやストロークで下半身の力を使いきれない状態です。ハムストリングスをゆるめて股関節の動きを取り戻し、下半身主導のパワー伝達を目指しましょう。",
    surfing: "股関節が動きにくく、テイクオフ時の股関節主導の動作が作りにくい状態です。ハムストリングス・腸腰筋のケアで、股関節から動ける土台を作りましょう。",
    dance: "骨盤の可動性が乏しく、股関節主導のプリエやアラベスクで骨盤が動かせない状態です。ハムストリングスをゆるめ、骨盤を動かす感覚を取り戻すことでラインの質を高めましょう。",
    running: "股関節の伸展が使いにくく、後方への蹴り出し（ヒップエクステンション）が浅くなりやすい状態です。ハムストリングス・腸腰筋を整え、ストライドを大きく使えるようにしましょう。",
    ballet: "骨盤が動きにくいことで、アラベスクなどの股関節伸展を腰に頼りやすい状態です。骨盤の可動性を取り戻し、股関節主導で伸展できるようにしましょう。",
    baseball: "股関節主導の体重移動が作りにくく、投球・打撃のパワーが上半身の力みに頼りやすい状態です。ハムストリングスをゆるめ、股関節から動ける土台をつくり、下半身からのパワー伝達を高めましょう。",
    yoga: "骨盤の可動性が乏しく、前屈や股関節を使うポーズで骨盤から動かせない状態です。ハムストリングスをゆるめ、骨盤の動きを取り戻すことでポーズの質を高めましょう。",
    basketball: "股関節の伸展が使いにくく、ジャンプの踏み切りや加速時のパワーが出しにくい状態です。ハムストリングス・腸腰筋を整え、股関節を大きく使えるようにしましょう。",
  },
  "posture-sway-back": {
    golf: "体幹で軸を保つ意識が乏しく、スイング中に骨盤が前後に流れやすい状態です。腸腰筋・体幹を働かせ、スイング軸をぶらさずに回旋できるようにしましょう。",
    soccer: "軸脚の骨盤が前に流れやすく、キックやターンで軸が安定しにくい状態です。腸腰筋と体幹を使い、軸足で骨盤をしっかり支えられるようにしましょう。",
    tennis: "体幹で支える力が乏しく、切り返しの多いフットワークで骨盤が流れやすい状態です。腸腰筋・体幹の活性化で、素早い切り返しでも軸を保てるようにしましょう。",
    surfing: "体幹の支えが乏しく、不安定なボード上で骨盤が流れやすい状態です。腸腰筋・体幹を活性化し、バランスを保つ土台を強化しましょう。",
    dance: "骨盤が前に流れた状態で立つクセがあると、軸足でのバランスが不安定になりやすい状態です。腸腰筋・体幹を働かせ、骨盤をニュートラルに保ったまま動ける感覚を養いましょう。",
    running: "骨盤が前方に流れた状態での接地は、股関節の効率的な伸展を妨げやすい状態です。腸腰筋・体幹を活性化し、骨盤の位置を安定させたフォームを目指しましょう。",
    ballet: "骨盤の位置が安定しないと、ルルベやターンでの軸の安定性が乏しくなりやすい状態です。腸腰筋・体幹を働かせ、骨盤をニュートラルに保つ感覚を養いましょう。",
    baseball: "体幹で軸を保つ意識が乏しく、投球・打撃で軸足の安定性が乏しくなりやすい状態です。腸腰筋・体幹を働かせ、軸をぶらさずに回旋できるようにしましょう。",
    yoga: "体幹の支えが乏しく、片脚のバランスポーズで骨盤が前に流れやすい状態です。腸腰筋・体幹を活性化し、骨盤をニュートラルに保つ感覚を養いましょう。",
    basketball: "軸足の骨盤が前に流れやすく、カッティングやジャンプの着地で軸が安定しにくい状態です。腸腰筋・体幹を使い、軸足でしっかり支えられるようにしましょう。",
  },
  "forward-head": {
    golf: "頭部が前に出た状態は、アドレスからの視線や回旋軸のブレにつながりやすい状態です。深層の頸部屈筋を働かせ、頭の位置を安定させたスイング軸を作りましょう。",
    soccer: "首まわりの緊張が呼吸や上半身の力みにつながりやすい状態です。チンタックなどで頭の位置を整え、余分な力みを減らしましょう。",
    tennis: "頭部が前に出ていると、サーブの上方視野や打点の安定性に影響しやすい状態です。頭の位置を整え、打点を見上げる動作をスムーズにしましょう。",
    surfing: "パドリング中に頭を上げ続ける姿勢は、頭部前方位をさらに強めやすい状態です。深層の頸部屈筋を働かせ、首への負担を減らしましょう。",
    dance: "頭部が前に出ていると、上半身のラインや視線の使い方に影響しやすい状態です。頭の位置を整え、首〜肩のラインを美しく保ちましょう。",
    running: "頭部が前に出た姿勢は、上半身の余分な力みにつながりやすい状態です。頭の位置を整え、リラックスしたフォームを目指しましょう。",
    ballet: "頭部前方位は、首〜肩のラインの美しさやポール・ド・ブラの動きに影響しやすい状態です。頭の位置を整え、上半身全体のラインを高めましょう。",
    baseball: "頭部が前に出ていると、打席やマウンドでの目線・ミートやコントロールの安定性に影響しやすい状態です。頭の位置を整え、視線をぶらさない姿勢を作りましょう。",
    yoga: "頭部前方位は、多くのポーズでの首〜背骨のアライメントに影響しやすい状態です。頭の位置を整え、背骨全体のラインを意識しましょう。",
    basketball: "頭部が前に出ていると、リバウンドやパスでの周辺視野や首への負担に影響しやすい状態です。頭の位置を整え、余分な緊張を減らしましょう。",
  },
  "rounded-shoulders": {
    golf: "肩まわりが内側に入っていると、バックスイングでの胸郭の回旋・肩の可動域が制限されやすい状態です。胸を開き、肩甲骨まわりを使えるようにしてバックスイングの深さを引き出しましょう。",
    soccer: "上半身の可動性の影響は比較的小さいものの、腕振りの効率が落ちやすい状態です。胸を開き、腕振りをスムーズにしましょう。",
    tennis: "肩の可動域が制限され、サーブやオーバーヘッドショットで十分なテイクバックが取りにくい状態です。胸を開き、肩甲骨を使った動きを取り戻すことでショットの威力を高めましょう。",
    surfing: "肩が内側に入っていると、パドリングのリーチや効率が落ちやすい状態です。胸を開き、肩甲骨まわりを使ったパドリングでスピードを高めましょう。",
    dance: "巻き肩は、ポール・ド・ブラの見た目の美しさや肩の可動域に影響しやすい状態です。胸を開き、肩甲骨まわりを使った上半身の表現力を高めましょう。",
    running: "腕振りの効率が落ち、ランニングフォーム全体のリズムに影響しやすい状態です。胸を開き、肩甲骨を使ったスムーズな腕振りを目指しましょう。",
    ballet: "巻き肩は、ポール・ド・ブラや上半身のラインの美しさに影響しやすい状態です。胸を開き、肩甲骨まわりを使った表現力を高めましょう。",
    baseball: "肩が内側に入っていると、テイクバックやフォロースルーでの肩の可動域が制限されやすい状態です。胸を開き、肩甲骨まわりを使えるようにして投球・打撃の可動域を引き出しましょう。",
    yoga: "巻き肩は、胸を開くポーズや腕で体を支えるポーズでの可動域・安定性に影響しやすい状態です。胸を開き、肩甲骨まわりを使えるようにしましょう。",
    basketball: "肩の可動域が制限され、シュートやパスでのオーバーヘッド動作がスムーズに出せない状態です。胸を開き、肩甲骨まわりを使った動きを取り戻しましょう。",
  },
  "posture-round-back": {
    golf: "胸椎が丸まっていると回旋可動域と目線の安定性の両方が制限されやすい状態です。胸を開き、背中の筋力を高めてスイング全体の可動域を引き出しましょう。",
    soccer: "背中まわりの筋力低下は、体幹を使ったスプリントフォームの安定性に影響しやすい状態です。背中・体幹を強化し、姿勢を保ったまま走れるようにしましょう。",
    tennis: "猫背姿勢は、サーブでの胸郭の伸展・回旋を制限しやすい状態です。胸を開き、背中の筋力を高めてショットの可動域を広げましょう。",
    surfing: "丸まった背中は、パドリング時に上体を起こす力を弱めやすい状態です。背中の筋力を高め、効率よくパドリングできるようにしましょう。",
    dance: "猫背姿勢は、上半身のラインや胸を開いた表現に影響しやすい状態です。背中の筋力を高め、まっすぐで伸びやかなラインを目指しましょう。",
    running: "背中の筋力低下は、腕振りや上半身の姿勢保持に影響しやすい状態です。背中・体幹を強化し、疲れてもフォームが崩れにくいようにしましょう。",
    ballet: "猫背姿勢は、ポール・ド・ブラや背筋の伸びやかさに影響しやすい状態です。背中の筋力を高め、美しい上半身のラインを保てるようにしましょう。",
    baseball: "猫背姿勢は、胸椎の回旋・伸展を制限し、投球・打撃のパワーを落としやすい状態です。胸を開き、背中の筋力を高めて可動域を引き出しましょう。",
    yoga: "猫背姿勢は、多くのポーズで背骨をまっすぐ伸ばす感覚をつかみにくくしやすい状態です。背中の筋力を高め、伸びやかな背骨のラインを目指しましょう。",
    basketball: "背中まわりの筋力低下は、リバウンドやディフェンス時の姿勢保持に影響しやすい状態です。背中・体幹を強化し、姿勢を保ったまま動けるようにしましょう。",
  },
  "anterior-pelvic-tilt": {
    golf: "殿筋が使えず腰を反ってスイングを作りやすい状態です。腹筋・殿筋を働かせ、骨盤を安定させたまま回旋できるようにしましょう。",
    soccer: "殿筋の力が発揮しにくく、キック・スプリントのパワーが腰に逃げやすい状態です。腹筋・殿筋を強化し、股関節主導のパワー発揮を目指しましょう。",
    tennis: "骨盤が前傾したままだと体幹の安定性が乏しくなり、ショットの安定性に影響しやすい状態です。腹筋・殿筋を働かせ、骨盤を安定させましょう。",
    surfing: "腰が反ったまま体幹を使うクセがあると、パドリングやテイクオフで腰に負担がかかりやすい状態です。腹筋・殿筋を強化し、骨盤を安定させましょう。",
    dance: "骨盤前傾は、ターンアウトや脚を高く上げる動きで腰を反って代償しやすい状態です。腹筋・殿筋を働かせ、骨盤を安定させたまま可動域を引き出しましょう。",
    running: "殿筋がうまく使えず、蹴り出しのパワーが腰に逃げやすい状態です。腹筋・殿筋を強化し、股関節主導の推進力を高めましょう。",
    ballet: "骨盤前傾は、アラベスクなどの伸展を腰の反りで代償しやすい状態です。腹筋・殿筋を働かせ、股関節主導の伸展を目指しましょう。",
    baseball: "殿筋が使えず腰を反って投球・打撃のパワーを作りやすい状態です。腹筋・殿筋を働かせ、骨盤を安定させたまま下半身主導の力を使えるようにしましょう。",
    yoga: "骨盤前傾は、後屈のポーズで腰の反りに頼りやすい状態です。腹筋・殿筋を働かせ、骨盤を安定させたポーズを目指しましょう。",
    basketball: "殿筋の力が発揮しにくく、ジャンプ・ダッシュのパワーが腰に逃げやすい状態です。腹筋・殿筋を強化し、股関節主導のパワー発揮を目指しましょう。",
  },
  "posterior-pelvic-tilt": {
    golf: "骨盤が後傾したままだと、股関節から前傾するアドレス姿勢が作りにくい状態です。骨盤を動かす感覚を取り戻し、股関節主導のヒップヒンジを身につけましょう。",
    soccer: "骨盤が後傾していると、キックの振り出しで股関節を大きく使いにくい状態です。骨盤を動かす感覚を養い、股関節の可動域を引き出しましょう。",
    tennis: "骨盤が後傾したままだと、下半身からのパワー伝達が弱くなりやすい状態です。骨盤の動きを取り戻し、下半身主導のショットを目指しましょう。",
    surfing: "骨盤が後傾していると、テイクオフでの股関節の動きが乏しくなりやすい状態です。骨盤を動かす感覚を養い、股関節主導の動作を引き出しましょう。",
    dance: "骨盤が後傾していると、股関節主導のプリエやアラベスクの質に影響しやすい状態です。骨盤を動かす感覚を取り戻し、可動域を引き出しましょう。",
    running: "骨盤が後傾していると、股関節の伸展が浅くなりストライドが縮みやすい状態です。骨盤を動かす感覚を養い、ストライドを引き出しましょう。",
    ballet: "骨盤が後傾していると、股関節主導の伸展が作りにくい状態です。骨盤を動かす感覚を取り戻し、質の高いラインを目指しましょう。",
    baseball: "骨盤が後傾していると、股関節主導の体重移動が浅くなり、投球・打撃で下半身の力を使いきれない状態です。骨盤を動かす感覚を取り戻し、下半身主導のパワー伝達を目指しましょう。",
    yoga: "骨盤が後傾していると、前屈や股関節を使うポーズで骨盤から動かしにくい状態です。骨盤を動かす感覚を取り戻し、可動域を引き出しましょう。",
    basketball: "骨盤が後傾していると、ジャンプの踏み切りで股関節の伸展が浅くなりやすい状態です。骨盤を動かす感覚を養い、踏み切りのパワーを引き出しましょう。",
  },
  "shoulder-asymmetry": {
    golf: "左右の肩の高さに差があると、スイング軸が左右に傾きやすく、ミート率やスイングの再現性に影響しやすい状態です。左右差を整え、安定したスイング軸を作りましょう。",
    soccer: "肩の左右差は体幹の回旋バランスに影響し、走行フォームの効率にも関わりやすい状態です。左右均等に肩甲骨を使えるように整えましょう。",
    tennis: "利き手側の肩が酷使されやすく、左右差がさらに広がりやすい状態です。反対側の筋肉も使い、オーバーユースのリスクを減らしましょう。",
    surfing: "肩の左右差はパドリングの推進力の左右差につながり、まっすぐ進みにくくなる要因になりやすい状態です。左右差を整え、パドリング効率を高めましょう。",
    dance: "肩の左右差は、ポール・ド・ブラの見た目の対称性に影響しやすい状態です。左右差を整え、美しい上半身のラインを目指しましょう。",
    running: "肩の左右差は腕振りのリズムに影響し、体幹の回旋バランスにも関わりやすい状態です。左右差を整え、効率のよい腕振りを目指しましょう。",
    ballet: "肩の左右差は、ポール・ド・ブラやアラインメントの対称性に影響しやすい状態です。左右差を整え、技術の精度を高めましょう。",
    baseball: "投球側の肩が酷使されやすく、左右差がさらに広がりやすい状態です。反対側の筋肉も使い、オーバーユースのリスクを減らしましょう。",
    yoga: "肩の左右差は、左右対称に行うポーズでの可動域や安定性の差につながりやすい状態です。左右差を整え、均等に体を使えるようにしましょう。",
    basketball: "肩の左右差は、シュートフォームやパスの安定性に影響しやすい状態です。左右差を整え、フォームの再現性を高めましょう。",
  },
  "pelvis-asymmetry": {
    golf: "骨盤の左右差は、アドレスでの体重配分やスイング軸の安定性に影響しやすい状態です。左右差を整え、地面からの力を均等に使えるようにしましょう。",
    soccer: "骨盤の左右差は、軸脚での安定性や蹴り脚のパワー伝達に影響しやすい状態です。左右差を整え、どちらの脚でも安定したプレーを目指しましょう。",
    tennis: "骨盤の左右差はフットワークでの体重移動に影響しやすい状態です。左右差を整え、素早い切り返しでも安定した軸を保ちましょう。",
    surfing: "骨盤の左右差はテイクオフやボード上でのバランスに影響しやすい状態です。左右差を整え、安定したスタンスを目指しましょう。",
    dance: "骨盤の左右差は、ターンやアラベスクでの軸の安定性・見た目の対称性に影響しやすい状態です。左右差を整え、技術の精度を高めましょう。",
    running: "骨盤の左右差は、着地の衝撃吸収や骨盤の左右への揺れに影響しやすい状態です。左右差を整え、効率のよいフォームを目指しましょう。",
    ballet: "骨盤の左右差は、ターンアウトの左右差やターンの軸の安定性に影響しやすい状態です。左右差を整え、正確なアラインメントを目指しましょう。",
    baseball: "骨盤の左右差は、投球・打撃での体重移動やパワー伝達の左右差につながりやすい状態です。左右差を整え、地面からの力を効率よく使えるようにしましょう。",
    yoga: "骨盤の左右差は、片脚のバランスポーズや左右対称のポーズでの差につながりやすい状態です。左右差を整え、均等な体の使い方を目指しましょう。",
    basketball: "骨盤の左右差は、ジャンプの着地やカッティングでの軸の安定性に影響しやすい状態です。左右差を整え、安定した着地・切り返しを目指しましょう。",
  },
};

const GENDERS = [
  { id: "male", label: "男性" },
  { id: "female", label: "女性" },
];

// 痛みが出るタイミング。複数選択できる（例：運動中も安静時も痛む、など）。
const PAIN_TIMINGS = [
  { id: "during-exercise", label: "運動中" },
  { id: "after-exercise", label: "運動後" },
  { id: "at-rest", label: "安静時（じっとしていても痛む）" },
];

const painTimingListEl = document.getElementById("pain-timing-list");
const doctorRestrictionToggleEl = document.getElementById("doctor-restriction-toggle");
const doctorRestrictionDetailEl = document.getElementById("doctor-restriction-detail");
const injuryHistoryEl = document.getElementById("injury-history");

const genderListEl = document.getElementById("gender-list");
const concernListEl = document.getElementById("concern-list");
const postureListEl = document.getElementById("posture-list");
const sportsListEl = document.getElementById("sports-list");
const asymmetryGroupEl = document.getElementById("asymmetry-group");
const formEl = document.getElementById("concern-form");
const resultEl = document.getElementById("result");
const resultContentEl = document.getElementById("result-content");

let selectedGender = null;
let doctorRestriction = null; // "yes" | "no" | null（未確認）
const asymmetrySelections = {};

function matchesGender(item, gender) {
  return !item.genders || (gender && item.genders.includes(gender));
}

function renderGenderList() {
  genderListEl.innerHTML = "";
  GENDERS.forEach((gender) => {
    const chip = document.createElement("label");
    chip.className = "chip";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "gender";
    radio.value = gender.id;
    radio.checked = selectedGender === gender.id;

    const span = document.createElement("span");
    span.textContent = gender.label;

    chip.appendChild(radio);
    chip.appendChild(span);
    genderListEl.appendChild(chip);

    radio.addEventListener("change", () => {
      selectedGender = gender.id;
      renderConcernList();
      resultEl.hidden = true;
    });
  });
}

function renderCheckboxList(container, items, groupName) {
  const checkedBefore = new Set(
    Array.from(formEl.querySelectorAll(`input[name="${groupName}"]:checked`)).map(
      (input) => input.value
    )
  );

  container.innerHTML = "";

  items.forEach((item) => {
    const chip = document.createElement("label");
    chip.className = "chip";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = groupName;
    checkbox.value = item.id;
    checkbox.checked = checkedBefore.has(item.id);

    const span = document.createElement("span");
    span.textContent = item.label;

    chip.appendChild(checkbox);
    chip.appendChild(span);
    container.appendChild(chip);
  });
}

function renderConcernList() {
  renderCheckboxList(
    concernListEl,
    CONCERNS.filter((concern) => matchesGender(concern, selectedGender)),
    "concern"
  );
}

function renderPostureList() {
  const checkedBefore = new Set(
    Array.from(formEl.querySelectorAll('input[name="posture"]:checked')).map(
      (input) => input.value
    )
  );

  postureListEl.innerHTML = "";

  POSTURE_ASSESSMENTS.forEach((item) => {
    const card = document.createElement("label");
    card.className = "posture-card";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "posture";
    checkbox.value = item.id;
    checkbox.checked = checkedBefore.has(item.id);
    card.appendChild(checkbox);

    const figure = document.createElement("div");
    figure.className = "posture-figure";
    figure.innerHTML = POSTURE_DIAGRAMS[item.id] || "";
    card.appendChild(figure);

    const label = document.createElement("span");
    label.className = "posture-label";
    label.textContent = item.label;
    card.appendChild(label);

    postureListEl.appendChild(card);
  });
}

function renderSportsList() {
  renderCheckboxList(sportsListEl, SPORTS, "sport");
}

function renderAsymmetryGroup() {
  asymmetryGroupEl.innerHTML = "";

  ASYMMETRY_ITEMS.forEach((item) => {
    const wrap = document.createElement("div");
    wrap.className = "asymmetry-item";

    const label = document.createElement("p");
    label.className = "asymmetry-label";
    label.textContent = item.label;
    wrap.appendChild(label);

    const toggle = document.createElement("div");
    toggle.className = "side-toggle";

    [
      { side: "left", text: "左が高い" },
      { side: "right", text: "右が高い" },
    ].forEach(({ side, text }) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "side-btn";
      btn.textContent = text;
      if (asymmetrySelections[item.id] === side) {
        btn.classList.add("selected");
      }
      btn.addEventListener("click", () => {
        asymmetrySelections[item.id] =
          asymmetrySelections[item.id] === side ? null : side;
        renderAsymmetryGroup();
      });
      toggle.appendChild(btn);
    });

    wrap.appendChild(toggle);
    asymmetryGroupEl.appendChild(wrap);
  });
}

function renderPainTimingList() {
  renderCheckboxList(painTimingListEl, PAIN_TIMINGS, "pain-timing");
}

function renderDoctorRestrictionToggle() {
  doctorRestrictionToggleEl.innerHTML = "";

  [
    { value: "yes", text: "あり" },
    { value: "no", text: "なし" },
  ].forEach(({ value, text }) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "side-btn";
    btn.textContent = text;
    if (doctorRestriction === value) {
      btn.classList.add("selected");
    }
    btn.addEventListener("click", () => {
      doctorRestriction = doctorRestriction === value ? null : value;
      doctorRestrictionDetailEl.hidden = doctorRestriction !== "yes";
      renderDoctorRestrictionToggle();
    });
    doctorRestrictionToggleEl.appendChild(btn);
  });
}

renderGenderList();
renderConcernList();
renderPostureList();
renderSportsList();
renderAsymmetryGroup();
renderPainTimingList();
renderDoctorRestrictionToggle();

function buildConcernBlock(item) {
  const block = document.createElement("div");
  block.className = "concern-block";

  const heading = document.createElement("h3");
  heading.textContent = item.label;
  block.appendChild(heading);

  const list = document.createElement("ul");
  item.exercises
    .filter((exercise) => matchesGender(exercise, selectedGender))
    .forEach((exercise) => {
      const li = document.createElement("li");
      const nameEl = document.createElement("span");
      nameEl.className = "exercise-name";
      nameEl.textContent = exercise.tag
        ? `［${exercise.tag}］${exercise.name}`
        : exercise.name;
      const noteEl = document.createElement("span");
      noteEl.className = "exercise-note";
      noteEl.textContent = " — " + exercise.note;
      li.appendChild(nameEl);
      li.appendChild(noteEl);
      list.appendChild(li);
    });
  block.appendChild(list);

  return block;
}

function sideLabelFor(side, higherSide) {
  if (side === "both") return "両側";
  const lowerSide = higherSide === "left" ? "right" : "left";
  const actualSide = side === "high" ? higherSide : lowerSide;
  return actualSide === "left" ? "左" : "右";
}

function buildMuscleRow(tagClass, tagText, entry, higherSide) {
  const row = document.createElement("p");
  row.className = "muscle-row";

  const tag = document.createElement("span");
  tag.className = "tag " + tagClass;
  tag.textContent = tagText;
  row.appendChild(tag);

  let text = `${sideLabelFor(entry.side, higherSide)}側：${entry.muscle}`;
  if (entry.note) text += `（${entry.note}）`;
  row.appendChild(document.createTextNode(text));

  return row;
}

function buildAsymmetryBlock(item, higherSide) {
  const higherLabel = sideLabelFor("high", higherSide);
  const lowerLabel = sideLabelFor("low", higherSide);

  const block = document.createElement("div");
  block.className = "concern-block";

  const heading = document.createElement("h3");
  heading.textContent = `${item.label}（${higherLabel}が高い）`;
  block.appendChild(heading);

  item.tightMuscles.forEach((entry) => {
    block.appendChild(
      buildMuscleRow("tag-tight", "使いすぎ傾向", entry, higherSide)
    );
  });

  item.weakMuscles.forEach((entry) => {
    block.appendChild(
      buildMuscleRow("tag-weak", "使えていない傾向", entry, higherSide)
    );
  });

  const list = document.createElement("ul");
  item.exercises.forEach((exercise) => {
    const sideLabel =
      exercise.side === "both"
        ? "両側"
        : exercise.side === "high"
        ? higherLabel
        : lowerLabel;

    const li = document.createElement("li");
    const nameEl = document.createElement("span");
    nameEl.className = "exercise-name";
    nameEl.textContent = `［${sideLabel}］${exercise.name}`;
    const noteEl = document.createElement("span");
    noteEl.className = "exercise-note";
    noteEl.textContent = " — " + exercise.note;
    li.appendChild(nameEl);
    li.appendChild(noteEl);
    list.appendChild(li);
  });
  block.appendChild(list);

  return block;
}

function buildSectionHeading(text) {
  const heading = document.createElement("h3");
  heading.className = "section-heading";
  heading.textContent = text;
  return heading;
}

// 選んだ項目すべての中から、複数の項目に共通して出てくるエクササイズを
// 優先的にピックアップし、そのまま使えるレッスン表としてまとめる。
function buildSummary(selectedItems, maxCount = 5) {
  const summary = new Map();

  selectedItems.forEach(({ label, exercises }) => {
    exercises.forEach((exercise) => {
      if (!summary.has(exercise.name)) {
        summary.set(exercise.name, { name: exercise.name, count: 0, sources: [] });
      }
      const entry = summary.get(exercise.name);
      entry.count += 1;
      entry.sources.push(label);
    });
  });

  return Array.from(summary.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, maxCount);
}

// 痛み・医師の運動制限・ケガ歴のいずれかがあれば、エクササイズ提案の前に確認すべき安全情報としてまとめる。
// 何も入力・選択されていなければ null を返す。
function buildSafetyAlert(checkedPainTimingIds, doctorRestriction, doctorRestrictionDetail, injuryHistoryText) {
  const trimmedInjuryHistory = injuryHistoryText.trim();
  const trimmedRestrictionDetail = doctorRestrictionDetail.trim();
  const hasRestriction = doctorRestriction === "yes";
  const hasInjuryHistory = trimmedInjuryHistory.length > 0;

  if (checkedPainTimingIds.length === 0 && !hasRestriction && !hasInjuryHistory) {
    return null;
  }

  return {
    checkedPainTimingIds,
    hasRestriction,
    restrictionDetail: trimmedRestrictionDetail,
    injuryHistoryText: trimmedInjuryHistory,
  };
}

function buildSafetyAlertBlock(safety) {
  const block = document.createElement("div");
  block.className = "concern-block safety-alert-block";

  const eyebrow = document.createElement("p");
  eyebrow.className = "summary-eyebrow safety-eyebrow";
  eyebrow.textContent = "Safety Check";
  block.appendChild(eyebrow);

  const heading = document.createElement("h3");
  heading.textContent = "エクササイズ提案の前に必ずご確認ください";
  block.appendChild(heading);

  const list = document.createElement("ul");
  list.className = "safety-alert-list";

  if (safety.checkedPainTimingIds.length > 0) {
    const labels = safety.checkedPainTimingIds
      .map((id) => (PAIN_TIMINGS.find((p) => p.id === id) || {}).label)
      .filter(Boolean);
    const hasRestPain = safety.checkedPainTimingIds.includes("at-rest");
    const li = document.createElement("li");
    li.textContent =
      `痛みが出るタイミング：${labels.join("・")}。` +
      (hasRestPain
        ? "安静時にも痛みがある場合は、運動の実施より先に医師の診断を優先してください。"
        : "痛みが出る動作は避け、無理のない範囲で行ってください。");
    list.appendChild(li);
  }

  if (safety.hasRestriction) {
    const li = document.createElement("li");
    li.textContent =
      "医師から運動制限の指示があります。" +
      (safety.restrictionDetail ? `（${safety.restrictionDetail}）` : "") +
      "制限されている動作は行わず、不明な点は医師に確認してください。";
    list.appendChild(li);
  }

  if (safety.injuryHistoryText) {
    const li = document.createElement("li");
    li.textContent = `過去の大きなケガ・手術歴：${safety.injuryHistoryText}。該当部位に負担のかかる動作は避け、必要に応じて医師・専門家に確認してください。`;
    list.appendChild(li);
  }

  block.appendChild(list);

  return block;
}

// 左右差の項目を「右肩上がり」のような短い言い方に変換する。
const ASYMMETRY_SHORT_LABEL = {
  "shoulder-asymmetry": { left: "左肩上がり", right: "右肩上がり" },
  "pelvis-asymmetry": { left: "左骨盤上がり", right: "右骨盤上がり" },
};

// 選ばれている姿勢タイプ・左右差から、考えられる生活習慣・クセを一言でまとめる。
// 運動経歴も選ばれていれば、その組み合わせでスポーツにどう影響しやすいかも追加する。
// 該当する所見がなければ null を返す。
function buildHabitSummary(checkedPostureIds, asymmetryEntries, checkedSportIds = []) {
  const items = [];

  checkedPostureIds.forEach((id) => {
    const posture = POSTURE_ASSESSMENTS.find((p) => p.id === id);
    if (posture && posture.habitHypothesis) {
      items.push({
        id: posture.id,
        shortLabel: posture.shortLabel || posture.label,
        habitHypothesis: posture.habitHypothesis,
      });
    }
  });

  asymmetryEntries.forEach(([id, side]) => {
    const item = ASYMMETRY_ITEMS.find((a) => a.id === id);
    if (item && item.habitHypothesis) {
      items.push({
        id: item.id,
        shortLabel: (ASYMMETRY_SHORT_LABEL[id] && ASYMMETRY_SHORT_LABEL[id][side]) || item.label,
        habitHypothesis: item.habitHypothesis,
      });
    }
  });

  if (items.length === 0) return null;

  const sports = checkedSportIds
    .map((id) => SPORTS.find((s) => s.id === id))
    .filter(Boolean);

  const headline = [...items.map((item) => item.shortLabel), ...sports.map((s) => s.label)].join(
    " × "
  );
  const habitTexts = Array.from(new Set(items.map((item) => item.habitHypothesis)));

  const sportGroups = sports
    .map((sport) => {
      const texts = Array.from(
        new Set(
          items
            .map((item) => SPORT_HABIT_INSIGHTS[item.id] && SPORT_HABIT_INSIGHTS[item.id][sport.id])
            .filter(Boolean)
        )
      );
      return { label: sport.label, texts };
    })
    .filter((group) => group.texts.length > 0);

  return { headline, habitTexts, sportGroups };
}

function buildHabitSummaryBlock(habitSummary) {
  const block = document.createElement("div");
  block.className = "concern-block habit-block";

  const eyebrow = document.createElement("p");
  eyebrow.className = "summary-eyebrow";
  eyebrow.textContent = "Posture Insight";
  block.appendChild(eyebrow);

  const heading = document.createElement("h3");
  heading.textContent = "考えられる生活習慣・クセ（予測）";
  block.appendChild(heading);

  const headlineEl = document.createElement("p");
  headlineEl.className = "habit-headline";
  headlineEl.textContent = habitSummary.headline;
  block.appendChild(headlineEl);

  habitSummary.habitTexts.forEach((text) => {
    const p = document.createElement("p");
    p.className = "habit-text";
    p.textContent = text;
    block.appendChild(p);
  });

  if (habitSummary.sportGroups && habitSummary.sportGroups.length > 0) {
    const sportHeading = document.createElement("h4");
    sportHeading.className = "habit-sport-heading";
    sportHeading.textContent = "スポーツでの影響とパフォーマンスアップのポイント";
    block.appendChild(sportHeading);

    habitSummary.sportGroups.forEach((group) => {
      const groupLabel = document.createElement("p");
      groupLabel.className = "habit-sport-label";
      groupLabel.textContent = group.label;
      block.appendChild(groupLabel);

      const list = document.createElement("ul");
      list.className = "habit-sport-list";
      group.texts.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        list.appendChild(li);
      });
      block.appendChild(list);
    });
  }

  const disclaimer = document.createElement("p");
  disclaimer.className = "helper-text";
  disclaimer.textContent =
    "姿勢の所見から考えられる一般的な傾向の予測です。実際の原因はヒアリングと合わせて確認してください。";
  block.appendChild(disclaimer);

  return block;
}

function buildSummaryBlock(summaryEntries) {
  const block = document.createElement("div");
  block.className = "concern-block summary-block";

  const eyebrow = document.createElement("p");
  eyebrow.className = "summary-eyebrow";
  eyebrow.textContent = "Lesson Summary";
  block.appendChild(eyebrow);

  const heading = document.createElement("h3");
  heading.textContent = "レッスンまとめ";
  block.appendChild(heading);

  const helper = document.createElement("p");
  helper.className = "helper-text";
  helper.textContent =
    "選んだ項目の中で重なりの多いエクササイズを中心に、上位" +
    summaryEntries.length +
    "つにまとめました。";
  block.appendChild(helper);

  const list = document.createElement("ol");
  list.className = "summary-list";
  summaryEntries.forEach((entry) => {
    const li = document.createElement("li");
    const nameEl = document.createElement("span");
    nameEl.className = "exercise-name";
    nameEl.textContent = entry.name;
    const noteEl = document.createElement("span");
    noteEl.className = "exercise-note";
    const uniqueSources = Array.from(new Set(entry.sources));
    noteEl.textContent = " — " + uniqueSources.join("・");
    li.appendChild(nameEl);
    li.appendChild(noteEl);
    list.appendChild(li);
  });
  block.appendChild(list);

  return block;
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedConcernIds = Array.from(
    formEl.querySelectorAll('input[name="concern"]:checked')
  ).map((input) => input.value);

  const checkedPostureIds = Array.from(
    formEl.querySelectorAll('input[name="posture"]:checked')
  ).map((input) => input.value);

  const checkedSportIds = Array.from(
    formEl.querySelectorAll('input[name="sport"]:checked')
  ).map((input) => input.value);

  const asymmetryEntries = Object.entries(asymmetrySelections).filter(
    ([, side]) => side
  );

  const checkedPainTimingIds = Array.from(
    formEl.querySelectorAll('input[name="pain-timing"]:checked')
  ).map((input) => input.value);

  const safety = buildSafetyAlert(
    checkedPainTimingIds,
    doctorRestriction,
    doctorRestrictionDetailEl.value,
    injuryHistoryEl.value
  );

  resultContentEl.innerHTML = "";

  if (
    checkedConcernIds.length === 0 &&
    checkedPostureIds.length === 0 &&
    checkedSportIds.length === 0 &&
    asymmetryEntries.length === 0 &&
    !safety
  ) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "悩み・姿勢評価・運動経歴のいずれかを1つ以上選んでください。";
    resultContentEl.appendChild(message);
    resultEl.hidden = false;
    return;
  }

  if (safety) {
    resultContentEl.appendChild(buildSafetyAlertBlock(safety));
  }

  const habitSummary = buildHabitSummary(checkedPostureIds, asymmetryEntries, checkedSportIds);
  if (habitSummary) {
    resultContentEl.appendChild(buildHabitSummaryBlock(habitSummary));
  }

  const selectedItems = [];

  if (checkedConcernIds.length > 0) {
    resultContentEl.appendChild(buildSectionHeading("お悩みに対するご提案"));
    checkedConcernIds.forEach((id) => {
      const concern = CONCERNS.find((c) => c.id === id);
      if (!concern) return;
      resultContentEl.appendChild(buildConcernBlock(concern));
      selectedItems.push({
        label: concern.label,
        exercises: concern.exercises.filter((exercise) =>
          matchesGender(exercise, selectedGender)
        ),
      });
    });
  }

  if (checkedPostureIds.length > 0 || asymmetryEntries.length > 0) {
    resultContentEl.appendChild(
      buildSectionHeading("姿勢評価に基づくご提案")
    );
    checkedPostureIds.forEach((id) => {
      const posture = POSTURE_ASSESSMENTS.find((p) => p.id === id);
      if (!posture) return;
      resultContentEl.appendChild(buildConcernBlock(posture));
      selectedItems.push({ label: posture.label, exercises: posture.exercises });
    });
    asymmetryEntries.forEach(([id, side]) => {
      const item = ASYMMETRY_ITEMS.find((a) => a.id === id);
      if (!item) return;
      resultContentEl.appendChild(buildAsymmetryBlock(item, side));
      const higherLabel = sideLabelFor("high", side);
      selectedItems.push({
        label: `${item.label}（${higherLabel}が高い）`,
        exercises: item.exercises,
      });
    });
  }

  if (checkedSportIds.length > 0) {
    resultContentEl.appendChild(
      buildSectionHeading("運動経歴に基づくご提案")
    );
    checkedSportIds.forEach((id) => {
      const sport = SPORTS.find((s) => s.id === id);
      if (!sport) return;
      resultContentEl.appendChild(buildConcernBlock(sport));
      selectedItems.push({ label: sport.label, exercises: sport.exercises });
    });
  }

  const summaryEntries = buildSummary(selectedItems, 5);
  if (summaryEntries.length > 0) {
    resultContentEl.appendChild(buildSectionHeading("まとめ"));
    resultContentEl.appendChild(buildSummaryBlock(summaryEntries));
  }

  resultEl.hidden = false;
});

// 写真からの姿勢自動分析。
// ブラウザ内で動くAI（MediaPipe Pose）を使って耳・肩峰・骨盤・膝・くるぶしの位置を検出し、
// buildPostureDiagram() と同じ座標の考え方（基準線からのズレ）に変換して、
// 一番近い姿勢タイプ（POSTURE_DIAGRAM_PARAMS）を自動でチェックする。写真は端末内で処理され、送信されない。
const photoInput = document.getElementById("posture-photo-input");
const photoStatusEl = document.getElementById("photo-status");
const photoPreviewWrapEl = document.getElementById("photo-preview-wrap");
const photoCanvasEl = document.getElementById("photo-canvas");

const POSE_LANDMARK = {
  NOSE: 0,
  LEFT_EAR: 7,
  RIGHT_EAR: 8,
  LEFT_SHOULDER: 11,
  RIGHT_SHOULDER: 12,
  LEFT_HIP: 23,
  RIGHT_HIP: 24,
  LEFT_KNEE: 25,
  RIGHT_KNEE: 26,
  LEFT_ANKLE: 27,
  RIGHT_ANKLE: 28,
};

let poseLandmarkerPromise = null;

function loadPoseLandmarker() {
  if (!poseLandmarkerPromise) {
    poseLandmarkerPromise = (async () => {
      const vision = await import(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs"
      );
      const filesetResolver = await vision.FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"
      );
      return vision.PoseLandmarker.createFromOptions(filesetResolver, {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task",
        },
        runningMode: "IMAGE",
      });
    })();
  }
  return poseLandmarkerPromise;
}

function setStatusMessage(el, text, kind) {
  if (!el) return;
  el.hidden = !text;
  el.textContent = text || "";
  el.className = "photo-status" + (kind ? ` is-${kind}` : "");
}

function setPhotoStatus(text, kind) {
  setStatusMessage(photoStatusEl, text, kind);
}

// buildPostureDiagram() の座標系（耳y=14〜くるぶしy=130、全体で約116）に合わせて
// 写真上のピクセル距離を同じ単位に変換する。
const POSE_DIAGRAM_SCALE = 116;
const PHOTO_MARK_COLOR = "#b0392f";
const PHOTO_POINT_KEYS = ["ear", "shoulder", "hip", "knee", "ankle"];

// ドラッグで動かした後も再計算できるよう、写真の状態をここに保持しておく。
const photoState = {
  imageBitmap: null,
  points: null,
  facingSign: 1,
  dragKey: null,
  dragFingerPos: null,
  lastCheckedIds: [],
};

// 「体幹の全体パターン」は、4つの中から一番近いもの1つだけを選ぶ（互いに排他的）。
// 「頭部・肩まわりの所見」は、それとは別に独立して判定し、当てはまれば追加でチェックする
// （体幹パターンと同時に成立してよい。例：カイホロードシス＋フォワードヘッド）。
const POSTURE_BODY_TYPE_IDS = [
  "kyphosis-lordosis",
  "flat-back",
  "posture-sway-back",
  "posture-round-back",
];
const POSTURE_REGIONAL_FINDINGS = [
  { id: "forward-head", key: "earDx", threshold: 3 },
  { id: "rounded-shoulders", key: "shoulderDx", threshold: 2.5 },
];

function pickVisibleSide(landmarks) {
  const leftIdx = [
    POSE_LANDMARK.LEFT_EAR,
    POSE_LANDMARK.LEFT_SHOULDER,
    POSE_LANDMARK.LEFT_HIP,
    POSE_LANDMARK.LEFT_KNEE,
    POSE_LANDMARK.LEFT_ANKLE,
  ];
  const rightIdx = [
    POSE_LANDMARK.RIGHT_EAR,
    POSE_LANDMARK.RIGHT_SHOULDER,
    POSE_LANDMARK.RIGHT_HIP,
    POSE_LANDMARK.RIGHT_KNEE,
    POSE_LANDMARK.RIGHT_ANKLE,
  ];
  const avgVisibility = (idxs) =>
    idxs.reduce((sum, i) => sum + (landmarks[i]?.visibility ?? 0), 0) / idxs.length;

  return avgVisibility(leftIdx) >= avgVisibility(rightIdx)
    ? {
        ear: POSE_LANDMARK.LEFT_EAR,
        shoulder: POSE_LANDMARK.LEFT_SHOULDER,
        hip: POSE_LANDMARK.LEFT_HIP,
        knee: POSE_LANDMARK.LEFT_KNEE,
        ankle: POSE_LANDMARK.LEFT_ANKLE,
      }
    : {
        ear: POSE_LANDMARK.RIGHT_EAR,
        shoulder: POSE_LANDMARK.RIGHT_SHOULDER,
        hip: POSE_LANDMARK.RIGHT_HIP,
        knee: POSE_LANDMARK.RIGHT_KNEE,
        ankle: POSE_LANDMARK.RIGHT_ANKLE,
      };
}

function detectPointsFromLandmarks(landmarks, width, height) {
  const side = pickVisibleSide(landmarks);
  const toPixels = (lm) => ({ x: lm.x * width, y: lm.y * height });

  const points = {
    ear: toPixels(landmarks[side.ear]),
    shoulder: toPixels(landmarks[side.shoulder]),
    hip: toPixels(landmarks[side.hip]),
    knee: toPixels(landmarks[side.knee]),
    ankle: toPixels(landmarks[side.ankle]),
  };
  const nose = toPixels(landmarks[POSE_LANDMARK.NOSE]);
  const facingSign = nose.x >= points.ear.x ? 1 : -1;

  return { points, facingSign };
}

// 現在の点の位置（ドラッグ後も含む）から、基準線とのズレを計算する。
function computeOffsets(points, facingSign) {
  const bodyHeight = Math.max(Math.abs(points.ankle.y - points.ear.y), 1);
  const normalize = (point) =>
    ((facingSign * (point.x - points.ankle.x)) / bodyHeight) * POSE_DIAGRAM_SCALE;

  return {
    earDx: normalize(points.ear),
    shoulderDx: normalize(points.shoulder),
    hipDx: normalize(points.hip),
    kneeDx: normalize(points.knee),
  };
}

// 図解用のパラメータは分かりやすさのため大きめの数値にしてあるため、
// 実際の写真から検出したズレ量（もっと控えめな値になりがち）とそのまま大きさ比較すると、
// 数値の小さいタイプ（猫背や「偏りなし」）に寄ってしまう。
// そこで「ズレの大きさ」ではなく「ズレの向き・パターン（比率）」が似ているかで比較する。
function magnitude(vec) {
  return Math.hypot(...vec);
}

function cosineSimilarity(a, b) {
  const magA = magnitude(a);
  const magB = magnitude(b);
  if (magA === 0 || magB === 0) return 0;
  const dot = a.reduce((sum, v, i) => sum + v * b[i], 0);
  return dot / (magA * magB);
}

// これ未満のズレ量なら、向きに関わらず「特に偏りなし」とみなす。
const BODY_TYPE_MIN_MAGNITUDE = 2.5;
// 一番近い候補でもこれより向きが離れていれば、無理に当てはめず「特に偏りなし」にする。
const BODY_TYPE_MIN_SIMILARITY = 0.3;

// 体幹の全体パターン（4つ）から、向きが一番近いもの1つだけを選ぶ。
// ズレが小さすぎる、またはどれとも向きが似ていない場合は何も選ばない。
function matchBodyType(offsets) {
  const offsetVec = [offsets.earDx, offsets.shoulderDx, offsets.hipDx, offsets.kneeDx];
  if (magnitude(offsetVec) < BODY_TYPE_MIN_MAGNITUDE) {
    return { id: null };
  }

  const candidates = POSTURE_BODY_TYPE_IDS.map((id) => {
    const params = POSTURE_DIAGRAM_PARAMS[id];
    const paramVec = [
      params.earDx || 0,
      params.shoulderDx || 0,
      params.hipDx || 0,
      params.kneeDx || 0,
    ];
    return { id, similarity: cosineSimilarity(offsetVec, paramVec) };
  });
  candidates.sort((a, b) => b.similarity - a.similarity);

  const best = candidates[0];
  if (!best || best.similarity < BODY_TYPE_MIN_SIMILARITY) {
    return { id: null };
  }
  return best;
}

// 頭部前方位・巻き肩は、体幹パターンとは独立に、それぞれの目印となるズレが
// 一定量を超えたら該当ありとする（複数同時に該当してよい）。
function detectRegionalFindings(offsets) {
  return POSTURE_REGIONAL_FINDINGS.filter(
    (finding) => offsets[finding.key] >= finding.threshold
  ).map((finding) => finding.id);
}

function redrawPhotoCanvas() {
  if (!photoState.imageBitmap || !photoState.points) return;
  const canvas = photoCanvasEl;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(photoState.imageBitmap, 0, 0);

  const points = photoState.points;
  ctx.save();
  ctx.strokeStyle = PHOTO_MARK_COLOR;
  ctx.lineWidth = Math.max(2, width * 0.004);
  ctx.beginPath();
  ctx.moveTo(points.ankle.x, 0);
  ctx.lineTo(points.ankle.x, height);
  ctx.stroke();

  const dotRadius = Math.max(6, width * 0.013);
  PHOTO_POINT_KEYS.forEach((key) => {
    const p = points[key];
    const isDragging = key === photoState.dragKey;

    // ドラッグ中の点は、指の実際の位置（fingerPos）と地図ピンのように少し離して表示し、
    // 指で隠れて見えなくならないようにする。指の位置には小さな十字だけ残す。
    if (isDragging && photoState.dragFingerPos) {
      ctx.beginPath();
      ctx.strokeStyle = PHOTO_MARK_COLOR;
      ctx.lineWidth = Math.max(1.5, width * 0.003);
      ctx.setLineDash([width * 0.008, width * 0.008]);
      ctx.moveTo(photoState.dragFingerPos.x, photoState.dragFingerPos.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.setLineDash([]);

      const crossSize = Math.max(6, width * 0.014);
      ctx.beginPath();
      ctx.moveTo(photoState.dragFingerPos.x - crossSize, photoState.dragFingerPos.y);
      ctx.lineTo(photoState.dragFingerPos.x + crossSize, photoState.dragFingerPos.y);
      ctx.moveTo(photoState.dragFingerPos.x, photoState.dragFingerPos.y - crossSize);
      ctx.lineTo(photoState.dragFingerPos.x, photoState.dragFingerPos.y + crossSize);
      ctx.stroke();
    }

    const radius = isDragging ? dotRadius * 1.5 : dotRadius;

    // 写真の色や明るさに関わらず目立つよう、白いハローを敷いてから塗りつぶす。
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.arc(p.x, p.y, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = PHOTO_MARK_COLOR;
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = Math.max(2, width * 0.0035);
    ctx.stroke();
  });
  ctx.restore();
}

function applyPostureMatch() {
  const offsets = computeOffsets(photoState.points, photoState.facingSign);
  const bodyMatch = matchBodyType(offsets);
  const regionalIds = detectRegionalFindings(offsets);
  const newCheckedIds = [
    ...(bodyMatch.id ? [bodyMatch.id] : []),
    ...regionalIds,
  ];

  // 前回自動でチェックした項目のうち、今回選ばれなかったものは外す。
  photoState.lastCheckedIds.forEach((id) => {
    if (newCheckedIds.includes(id)) return;
    const previousCheckbox = postureListEl.querySelector(`input[value="${id}"]`);
    if (previousCheckbox) previousCheckbox.checked = false;
  });

  newCheckedIds.forEach((id) => {
    const checkbox = postureListEl.querySelector(`input[value="${id}"]`);
    if (checkbox) checkbox.checked = true;
  });
  photoState.lastCheckedIds = newCheckedIds;

  if (newCheckedIds.length === 0) {
    setPhotoStatus(
      "特に大きな姿勢の偏りは検出されませんでした。図と見比べて選んでください。"
    );
    return;
  }

  const labels = newCheckedIds.map((id) => {
    const posture = POSTURE_ASSESSMENTS.find((p) => p.id === id);
    return posture ? posture.label : id;
  });

  setPhotoStatus(
    `「${labels.join("」「")}」に近い所見と判定し、自動でチェックしました。点がずれていればドラッグで調整できます。`,
    "match"
  );
}

// キャンバスの表示サイズとピクセルサイズが違う（CSSで縮小表示している）ため、
// ポインター座標をキャンバス内部の座標に変換する。
function getCanvasPoint(evt) {
  const rect = photoCanvasEl.getBoundingClientRect();
  const scaleX = photoCanvasEl.width / rect.width;
  const scaleY = photoCanvasEl.height / rect.height;
  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}

function findNearestPointKey(pos) {
  const hitRadius = Math.max(26, photoCanvasEl.width * 0.035);
  let nearestKey = null;
  let nearestDist = Infinity;
  PHOTO_POINT_KEYS.forEach((key) => {
    const p = photoState.points[key];
    const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
    if (dist < hitRadius && dist < nearestDist) {
      nearestDist = dist;
      nearestKey = key;
    }
  });
  return nearestKey;
}

// ドラッグ中、点を指の実際の位置よりこれだけ上に浮かせて表示する（地図のピンと同じ考え方）。
function getDragLiftOffset(canvas) {
  return Math.max(48, canvas.width * 0.09);
}

if (photoCanvasEl) {
  photoCanvasEl.addEventListener("pointerdown", (evt) => {
    if (!photoState.points) return;
    const pos = getCanvasPoint(evt);
    const key = findNearestPointKey(pos);
    if (!key) return;
    photoState.dragKey = key;
    photoState.dragFingerPos = pos;
    photoCanvasEl.setPointerCapture(evt.pointerId);
    redrawPhotoCanvas();
    evt.preventDefault();
  });

  photoCanvasEl.addEventListener("pointermove", (evt) => {
    if (!photoState.dragKey) return;
    const pos = getCanvasPoint(evt);
    pos.x = Math.min(Math.max(pos.x, 0), photoCanvasEl.width);
    pos.y = Math.min(Math.max(pos.y, 0), photoCanvasEl.height);
    photoState.dragFingerPos = pos;

    const lifted = {
      x: pos.x,
      y: Math.max(pos.y - getDragLiftOffset(photoCanvasEl), 0),
    };
    photoState.points[photoState.dragKey] = lifted;
    redrawPhotoCanvas();
    evt.preventDefault();
  });

  const endDrag = (evt) => {
    if (!photoState.dragKey) return;
    photoState.dragKey = null;
    photoState.dragFingerPos = null;
    applyPostureMatch();
    redrawPhotoCanvas();
    evt.preventDefault();
  };
  photoCanvasEl.addEventListener("pointerup", endDrag);
  photoCanvasEl.addEventListener("pointercancel", endDrag);
}

// 顔まわり（頭）と足まわりのランドマーク番号（MediaPipe Poseの33点モデル）。
const HEAD_LANDMARK_INDICES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const FOOT_LANDMARK_INDICES = [27, 28, 29, 30, 31, 32];
const ALL_LANDMARK_INDICES = Array.from({ length: 33 }, (_, i) => i);

// ラフな1回目の検出結果から、頭〜足がぴったり収まる切り抜き範囲を計算する。
// 人物が写真の中で小さい（遠い）ほど、この切り抜きで拡大される効果が大きくなる。
function computeCropRect(landmarks, width, height) {
  const toVisiblePixels = (idxs) =>
    idxs
      .map((i) => landmarks[i])
      .filter((lm) => lm && (lm.visibility ?? 1) > 0.3)
      .map((lm) => ({ x: lm.x * width, y: lm.y * height }));

  const headPoints = toVisiblePixels(HEAD_LANDMARK_INDICES);
  const footPoints = toVisiblePixels(FOOT_LANDMARK_INDICES);
  const allPoints = toVisiblePixels(ALL_LANDMARK_INDICES);
  if (headPoints.length === 0 || footPoints.length === 0 || allPoints.length === 0) {
    return null;
  }

  const topY = Math.min(...headPoints.map((p) => p.y));
  const bottomY = Math.max(...footPoints.map((p) => p.y));
  const bodyHeight = Math.max(bottomY - topY, 1);

  const minX = Math.min(...allPoints.map((p) => p.x));
  const maxX = Math.max(...allPoints.map((p) => p.x));
  const centerX = (minX + maxX) / 2;

  // 頭上・足元に少し余白を残し、横方向も体が切れないよう余裕を持たせる。
  const verticalPad = bodyHeight * 0.12;
  const halfWidth = Math.max((maxX - minX) / 2 + bodyHeight * 0.15, bodyHeight * 0.22);

  const cropTop = Math.max(topY - verticalPad, 0);
  const cropBottom = Math.min(bottomY + verticalPad, height);
  const cropLeft = Math.max(centerX - halfWidth, 0);
  const cropRight = Math.min(centerX + halfWidth, width);

  return {
    x: cropLeft,
    y: cropTop,
    width: cropRight - cropLeft,
    height: cropBottom - cropTop,
  };
}

// 切り抜いた範囲を、十分な解像度になるまで拡大して新しいキャンバスに描く。
function buildZoomedCanvas(source, cropRect) {
  const targetHeight = Math.max(cropRect.height, 800);
  const scale = targetHeight / cropRect.height;
  const zoomed = document.createElement("canvas");
  zoomed.width = Math.round(cropRect.width * scale);
  zoomed.height = Math.round(cropRect.height * scale);
  const ctx = zoomed.getContext("2d");
  ctx.drawImage(
    source,
    cropRect.x,
    cropRect.y,
    cropRect.width,
    cropRect.height,
    0,
    0,
    zoomed.width,
    zoomed.height
  );
  return zoomed;
}

if (photoInput) {
  photoInput.addEventListener("change", async () => {
    const file = photoInput.files && photoInput.files[0];
    if (!file) return;

    photoPreviewWrapEl.hidden = true;
    photoState.imageBitmap = null;
    photoState.points = null;
    photoState.lastCheckedIds = [];
    setPhotoStatus(
      "解析しています…（初回はAIモデルの読み込みのため時間がかかることがあります）"
    );

    try {
      const originalBitmap = await createImageBitmap(file);
      const roughCanvas = document.createElement("canvas");
      roughCanvas.width = originalBitmap.width;
      roughCanvas.height = originalBitmap.height;
      roughCanvas.getContext("2d").drawImage(originalBitmap, 0, 0);

      const landmarker = await loadPoseLandmarker();
      const roughResult = landmarker.detect(roughCanvas);

      if (!roughResult.landmarks || roughResult.landmarks.length === 0) {
        photoPreviewWrapEl.hidden = false;
        setPhotoStatus(
          "体を検出できませんでした。全身が写った横向きの写真でお試しください。",
          "error"
        );
        return;
      }

      // 1回目の検出結果から人物の範囲を割り出し、そこだけ拡大して検出し直すことで、
      // 写真の中で人物が小さい（遠い）場合の精度を上げる。
      let finalCanvas = roughCanvas;
      let finalLandmarks = roughResult.landmarks[0];

      const cropRect = computeCropRect(
        roughResult.landmarks[0],
        roughCanvas.width,
        roughCanvas.height
      );

      if (cropRect && cropRect.width > 10 && cropRect.height > 10) {
        setPhotoStatus("人物を検出しました。精度を上げるため拡大して再解析しています…");
        const zoomedCanvas = buildZoomedCanvas(originalBitmap, cropRect);
        const refinedResult = landmarker.detect(zoomedCanvas);
        if (refinedResult.landmarks && refinedResult.landmarks.length > 0) {
          finalCanvas = zoomedCanvas;
          finalLandmarks = refinedResult.landmarks[0];
        }
      }

      const finalBitmap = await createImageBitmap(finalCanvas);
      const canvas = photoCanvasEl;
      canvas.width = finalBitmap.width;
      canvas.height = finalBitmap.height;

      const { points, facingSign } = detectPointsFromLandmarks(
        finalLandmarks,
        canvas.width,
        canvas.height
      );
      photoState.imageBitmap = finalBitmap;
      photoState.points = points;
      photoState.facingSign = facingSign;

      redrawPhotoCanvas();
      photoPreviewWrapEl.hidden = false;
      applyPostureMatch();
    } catch (err) {
      console.error(err);
      photoPreviewWrapEl.hidden = true;
      setPhotoStatus(
        "解析中にエラーが発生しました。通信環境をご確認のうえ、もう一度お試しください。",
        "error"
      );
    }
  });
}

// 後ろからの写真による、肩・骨盤の左右差の自動分析。
// 後ろ姿は正面写真と違って鏡写しにならない（写真の左＝お客様の左）ため、
// 写真上でX座標が小さい方をそのまま「左」、大きい方を「右」として扱う。
// MediaPipeの left_shoulder/right_shoulder ラベル自体は、後ろ姿では誤って
// 判定されることがあるため、ラベルではなく実際の左右の位置関係で決める。
const backPhotoInput = document.getElementById("back-photo-input");
const backPhotoStatusEl = document.getElementById("back-photo-status");
const backPhotoPreviewWrapEl = document.getElementById("back-photo-preview-wrap");
const backPhotoCanvasEl = document.getElementById("back-photo-canvas");

const ASYM_POINT_KEYS = ["shoulderA", "shoulderB", "hipA", "hipB"];
// 体の高さに対して、これ未満の左右差は「特に差なし」とみなす。
const ASYMMETRY_MIN_RATIO = 0.012;

const backPhotoState = {
  imageBitmap: null,
  points: null,
  bodyHeightPx: 1,
  centerX: null,
  dragKey: null,
  dragFingerPos: null,
};

function setBackPhotoStatus(text, kind) {
  setStatusMessage(backPhotoStatusEl, text, kind);
}

function extractAsymmetryPoints(landmarks, width, height) {
  const toPixels = (lm) => ({ x: lm.x * width, y: lm.y * height });
  return {
    shoulderA: toPixels(landmarks[POSE_LANDMARK.LEFT_SHOULDER]),
    shoulderB: toPixels(landmarks[POSE_LANDMARK.RIGHT_SHOULDER]),
    hipA: toPixels(landmarks[POSE_LANDMARK.LEFT_HIP]),
    hipB: toPixels(landmarks[POSE_LANDMARK.RIGHT_HIP]),
  };
}

// 2点のうち、写真上でX座標が小さい方＝お客様の左、大きい方＝お客様の右として返す。
function splitByImageSide(a, b) {
  return a.x <= b.x ? { left: a, right: b } : { left: b, right: a };
}

// 左右の傾きが見やすいよう、2点を結ぶ線を（同じ傾きのまま）左右に伸ばす。
function extendLine(left, right, canvasWidth, marginRatio = 0.16) {
  const dx = right.x - left.x;
  const dy = right.y - left.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const extend = canvasWidth * marginRatio;
  return {
    start: { x: left.x - ux * extend, y: left.y - uy * extend },
    end: { x: right.x + ux * extend, y: right.y + uy * extend },
  };
}

// 左右の高さの差を、体の高さに対する比率として計算する。
// yが小さいほど画面上で高い位置なので、yが小さい方が「高い側」。
function computeSideHeightDiff(pointA, pointB, bodyHeightPx) {
  const { left, right } = splitByImageSide(pointA, pointB);
  const ratio = Math.abs(left.y - right.y) / bodyHeightPx;
  if (ratio < ASYMMETRY_MIN_RATIO) return { higherSide: null, ratio };
  return { higherSide: left.y < right.y ? "left" : "right", ratio };
}

function redrawBackPhotoCanvas() {
  if (!backPhotoState.imageBitmap || !backPhotoState.points) return;
  const canvas = backPhotoCanvasEl;
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;

  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(backPhotoState.imageBitmap, 0, 0);

  const points = backPhotoState.points;
  const dotRadius = Math.max(6, width * 0.013);

  ctx.save();
  ctx.strokeStyle = PHOTO_MARK_COLOR;
  ctx.lineWidth = Math.max(2, width * 0.0035);

  // 体の中心の縦線（両くるぶしの中間を通る基準線）。
  if (backPhotoState.centerX != null) {
    ctx.beginPath();
    ctx.moveTo(backPhotoState.centerX, height * 0.02);
    ctx.lineTo(backPhotoState.centerX, height * 0.98);
    ctx.stroke();
  }

  // 肩・骨盤の横線は、傾きが見やすいよう2点の外側まで伸ばして描く。
  [
    [points.shoulderA, points.shoulderB],
    [points.hipA, points.hipB],
  ].forEach(([p1, p2]) => {
    const { left, right } = splitByImageSide(p1, p2);
    const { start, end } = extendLine(left, right, width);
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
  });

  function drawDraggableDot(p, isDragging) {
    if (isDragging && backPhotoState.dragFingerPos) {
      ctx.beginPath();
      ctx.strokeStyle = PHOTO_MARK_COLOR;
      ctx.lineWidth = Math.max(1.5, width * 0.003);
      ctx.setLineDash([width * 0.008, width * 0.008]);
      ctx.moveTo(backPhotoState.dragFingerPos.x, backPhotoState.dragFingerPos.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.setLineDash([]);

      const crossSize = Math.max(6, width * 0.014);
      ctx.beginPath();
      ctx.moveTo(backPhotoState.dragFingerPos.x - crossSize, backPhotoState.dragFingerPos.y);
      ctx.lineTo(backPhotoState.dragFingerPos.x + crossSize, backPhotoState.dragFingerPos.y);
      ctx.moveTo(backPhotoState.dragFingerPos.x, backPhotoState.dragFingerPos.y - crossSize);
      ctx.lineTo(backPhotoState.dragFingerPos.x, backPhotoState.dragFingerPos.y + crossSize);
      ctx.stroke();
    }

    const radius = isDragging ? dotRadius * 1.5 : dotRadius;
    ctx.beginPath();
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.arc(p.x, p.y, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = PHOTO_MARK_COLOR;
    ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = Math.max(2, width * 0.0035);
    ctx.stroke();
  }

  ASYM_POINT_KEYS.forEach((key) => {
    drawDraggableDot(points[key], key === backPhotoState.dragKey);
  });

  // 中心線の持ち手（ドラッグして左右に動かせる）。
  if (backPhotoState.centerX != null) {
    drawDraggableDot(
      getCenterLineHandlePos(),
      backPhotoState.dragKey === CENTERLINE_KEY
    );
  }
  ctx.restore();
}

const ASYMMETRY_SIDE_LABEL = { left: "左", right: "右" };

function applyAsymmetryMatch() {
  const points = backPhotoState.points;
  const shoulderResult = computeSideHeightDiff(
    points.shoulderA,
    points.shoulderB,
    backPhotoState.bodyHeightPx
  );
  const hipResult = computeSideHeightDiff(
    points.hipA,
    points.hipB,
    backPhotoState.bodyHeightPx
  );

  asymmetrySelections["shoulder-asymmetry"] = shoulderResult.higherSide;
  asymmetrySelections["pelvis-asymmetry"] = hipResult.higherSide;
  renderAsymmetryGroup();
  resultEl.hidden = true;

  const parts = [];
  parts.push(
    shoulderResult.higherSide
      ? `肩は${ASYMMETRY_SIDE_LABEL[shoulderResult.higherSide]}が高い`
      : "肩は特に左右差なし"
  );
  parts.push(
    hipResult.higherSide
      ? `骨盤は${ASYMMETRY_SIDE_LABEL[hipResult.higherSide]}が高い`
      : "骨盤は特に左右差なし"
  );

  setBackPhotoStatus(
    `${parts.join("、")}と判定しました。点がずれていればドラッグで調整できます。`,
    "match"
  );
}

function getBackCanvasPoint(evt) {
  const rect = backPhotoCanvasEl.getBoundingClientRect();
  const scaleX = backPhotoCanvasEl.width / rect.width;
  const scaleY = backPhotoCanvasEl.height / rect.height;
  return {
    x: (evt.clientX - rect.left) * scaleX,
    y: (evt.clientY - rect.top) * scaleY,
  };
}

// 中心の縦線は、上のほうにある持ち手（ハンドル）をドラッグして左右に動かせる。
const CENTERLINE_HANDLE_Y_RATIO = 0.06;
const CENTERLINE_KEY = "centerLine";

function getCenterLineHandlePos() {
  return {
    x: backPhotoState.centerX,
    y: backPhotoCanvasEl.height * CENTERLINE_HANDLE_Y_RATIO,
  };
}

function findDragTargetKey(pos) {
  const hitRadius = Math.max(26, backPhotoCanvasEl.width * 0.035);
  let nearestKey = null;
  let nearestDist = Infinity;
  ASYM_POINT_KEYS.forEach((key) => {
    const p = backPhotoState.points[key];
    const dist = Math.hypot(p.x - pos.x, p.y - pos.y);
    if (dist < hitRadius && dist < nearestDist) {
      nearestDist = dist;
      nearestKey = key;
    }
  });

  if (backPhotoState.centerX != null) {
    const handle = getCenterLineHandlePos();
    const dist = Math.hypot(handle.x - pos.x, handle.y - pos.y);
    if (dist < hitRadius && dist < nearestDist) {
      nearestKey = CENTERLINE_KEY;
    }
  }
  return nearestKey;
}

if (backPhotoCanvasEl) {
  backPhotoCanvasEl.addEventListener("pointerdown", (evt) => {
    if (!backPhotoState.points) return;
    const pos = getBackCanvasPoint(evt);
    const key = findDragTargetKey(pos);
    if (!key) return;
    backPhotoState.dragKey = key;
    backPhotoState.dragFingerPos = pos;
    backPhotoCanvasEl.setPointerCapture(evt.pointerId);
    redrawBackPhotoCanvas();
    evt.preventDefault();
  });

  backPhotoCanvasEl.addEventListener("pointermove", (evt) => {
    if (!backPhotoState.dragKey) return;
    const pos = getBackCanvasPoint(evt);
    pos.x = Math.min(Math.max(pos.x, 0), backPhotoCanvasEl.width);
    pos.y = Math.min(Math.max(pos.y, 0), backPhotoCanvasEl.height);
    backPhotoState.dragFingerPos = pos;

    if (backPhotoState.dragKey === CENTERLINE_KEY) {
      // 縦線は左右にしか動かないので、X座標だけ更新する。
      backPhotoState.centerX = pos.x;
    } else {
      const lifted = {
        x: pos.x,
        y: Math.max(pos.y - getDragLiftOffset(backPhotoCanvasEl), 0),
      };
      backPhotoState.points[backPhotoState.dragKey] = lifted;
    }
    redrawBackPhotoCanvas();
    evt.preventDefault();
  });

  const endBackDrag = (evt) => {
    if (!backPhotoState.dragKey) return;
    const wasCenterLine = backPhotoState.dragKey === CENTERLINE_KEY;
    backPhotoState.dragKey = null;
    backPhotoState.dragFingerPos = null;
    if (!wasCenterLine) {
      applyAsymmetryMatch();
    }
    redrawBackPhotoCanvas();
    evt.preventDefault();
  };
  backPhotoCanvasEl.addEventListener("pointerup", endBackDrag);
  backPhotoCanvasEl.addEventListener("pointercancel", endBackDrag);
}

if (backPhotoInput) {
  backPhotoInput.addEventListener("change", async () => {
    const file = backPhotoInput.files && backPhotoInput.files[0];
    if (!file) return;

    backPhotoPreviewWrapEl.hidden = true;
    backPhotoState.imageBitmap = null;
    backPhotoState.points = null;
    setBackPhotoStatus(
      "解析しています…（初回はAIモデルの読み込みのため時間がかかることがあります）"
    );

    try {
      const originalBitmap = await createImageBitmap(file);
      const roughCanvas = document.createElement("canvas");
      roughCanvas.width = originalBitmap.width;
      roughCanvas.height = originalBitmap.height;
      roughCanvas.getContext("2d").drawImage(originalBitmap, 0, 0);

      const landmarker = await loadPoseLandmarker();
      const roughResult = landmarker.detect(roughCanvas);

      if (!roughResult.landmarks || roughResult.landmarks.length === 0) {
        backPhotoPreviewWrapEl.hidden = false;
        setBackPhotoStatus(
          "体を検出できませんでした。全身が写った後ろ姿の写真でお試しください。",
          "error"
        );
        return;
      }

      let finalCanvas = roughCanvas;
      let finalLandmarks = roughResult.landmarks[0];

      const cropRect = computeCropRect(
        roughResult.landmarks[0],
        roughCanvas.width,
        roughCanvas.height
      );

      if (cropRect && cropRect.width > 10 && cropRect.height > 10) {
        setBackPhotoStatus("人物を検出しました。精度を上げるため拡大して再解析しています…");
        const zoomedCanvas = buildZoomedCanvas(originalBitmap, cropRect);
        const refinedResult = landmarker.detect(zoomedCanvas);
        if (refinedResult.landmarks && refinedResult.landmarks.length > 0) {
          finalCanvas = zoomedCanvas;
          finalLandmarks = refinedResult.landmarks[0];
        }
      }

      const finalBitmap = await createImageBitmap(finalCanvas);
      const canvas = backPhotoCanvasEl;
      canvas.width = finalBitmap.width;
      canvas.height = finalBitmap.height;

      const points = extractAsymmetryPoints(finalLandmarks, canvas.width, canvas.height);
      const earAvgY =
        (finalLandmarks[POSE_LANDMARK.LEFT_EAR].y +
          finalLandmarks[POSE_LANDMARK.RIGHT_EAR].y) *
        0.5 *
        canvas.height;
      const ankleAvgY =
        (finalLandmarks[POSE_LANDMARK.LEFT_ANKLE].y +
          finalLandmarks[POSE_LANDMARK.RIGHT_ANKLE].y) *
        0.5 *
        canvas.height;
      const ankleAvgX =
        (finalLandmarks[POSE_LANDMARK.LEFT_ANKLE].x +
          finalLandmarks[POSE_LANDMARK.RIGHT_ANKLE].x) *
        0.5 *
        canvas.width;

      backPhotoState.imageBitmap = finalBitmap;
      backPhotoState.points = points;
      backPhotoState.bodyHeightPx = Math.max(Math.abs(ankleAvgY - earAvgY), 1);
      backPhotoState.centerX = ankleAvgX;

      redrawBackPhotoCanvas();
      backPhotoPreviewWrapEl.hidden = false;
      applyAsymmetryMatch();
    } catch (err) {
      console.error(err);
      backPhotoPreviewWrapEl.hidden = true;
      setBackPhotoStatus(
        "解析中にエラーが発生しました。通信環境をご確認のうえ、もう一度お試しください。",
        "error"
      );
    }
  });
}
