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
    exercises: [
      { name: "チェストオープナー", note: "硬くなった大胸筋をゆるめ、丸まった胸まわりを開く" },
      { name: "ペルビックカール", note: "腹筋・殿筋を使い、骨盤の前傾と反り腰を整える" },
      { name: "キャットストレッチ", note: "胸椎の可動性を引き出し、背骨全体のバランスを整える" },
    ],
  },
  {
    id: "flat-back",
    label: "フラットバック",
    exercises: [
      { name: "ハムストリングスストレッチ", note: "硬くなりやすいハムストリングスをゆるめ、骨盤の動きを取り戻す" },
      { name: "ニーストレッチ", note: "弱くなりやすい腸腰筋を働かせ、骨盤を動かす感覚をつくる" },
      { name: "バックエクステンション", note: "平坦になった腰椎のカーブを取り戻す" },
    ],
  },
  {
    id: "posture-sway-back",
    label: "スウェイバック",
    exercises: [
      { name: "ペルビッククロック", note: "股関節が前に流れた骨盤の位置を、ニュートラルに戻す感覚を養う" },
      { name: "ニーストレッチ", note: "腸腰筋を活性化し、股関節が前に突き出す姿勢を整える" },
      { name: "スタンディングアライメントドリル", note: "壁を使い、耳・肩・骨盤・くるぶしのラインを揃える練習をする" },
    ],
  },
  {
    id: "forward-head",
    label: "フォワードヘッド（頭部前方位）",
    exercises: [
      { name: "チンタック", note: "深層の頸部屈筋を働かせ、頭の位置を引き戻す" },
      { name: "胸椎伸展ストレッチ", note: "丸まりやすい上部背中を伸ばし、頭が前に出る姿勢を整える" },
      { name: "スワン", note: "僧帽筋下部を使いながら、頭〜背中のラインを整える" },
    ],
  },
  {
    id: "rounded-shoulders",
    label: "巻き肩",
    exercises: [
      { name: "チェストオープナー", note: "硬くなった大胸筋・小胸筋をゆるめる" },
      { name: "アームサークル（外旋方向）", note: "菱形筋・僧帽筋中部を使い、肩を正しい位置に引き戻す" },
      { name: "スワン", note: "胸を開きながら肩甲骨まわりの筋肉を使う" },
    ],
  },
  {
    id: "posture-round-back",
    label: "猫背（胸椎後弯・頭部前方位）",
    exercises: [
      { name: "スワン", note: "胸を開き、丸まった背中を伸ばす" },
      { name: "チェストリフト", note: "正しい上体の起こし方を身につけ、猫背の癖を減らす" },
      { name: "ロールアップ", note: "背骨を一節ずつ動かす感覚を養い、姿勢を整える" },
    ],
  },
  {
    id: "anterior-pelvic-tilt",
    label: "骨盤前傾",
    exercises: [
      { name: "ペルビックカール", note: "腹筋・殿筋を使い、前に傾いた骨盤を戻す" },
      { name: "腸腰筋ストレッチ", note: "骨盤を前に引っ張る腸腰筋の硬さをゆるめる" },
      { name: "アブドミナルカール", note: "下部腹筋を使い、骨盤の傾きを安定させる" },
    ],
  },
  {
    id: "posterior-pelvic-tilt",
    label: "骨盤後傾",
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
];

// 左右の高さの違い（肩・骨盤）の対応表。
// 「高い側」＝使いすぎ・過緊張の傾向、「低い側」＝機能低下・使えていない傾向として扱う。
// tightMuscles / weakMuscles は複数の筋肉を列挙できる（side: "high"/"low"、note で補足）。
// exercises の side: "high"（高い側向け）/ "low"（低い側向け）/ "both"（両側・全体向け）
const ASYMMETRY_ITEMS = [
  {
    id: "shoulder-asymmetry",
    label: "肩の高さの左右差",
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

const GENDERS = [
  { id: "male", label: "男性" },
  { id: "female", label: "女性" },
];

const genderListEl = document.getElementById("gender-list");
const concernListEl = document.getElementById("concern-list");
const postureListEl = document.getElementById("posture-list");
const sportsListEl = document.getElementById("sports-list");
const asymmetryGroupEl = document.getElementById("asymmetry-group");
const formEl = document.getElementById("concern-form");
const resultEl = document.getElementById("result");
const resultContentEl = document.getElementById("result-content");

let selectedGender = null;
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

renderGenderList();
renderConcernList();
renderPostureList();
renderSportsList();
renderAsymmetryGroup();

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

  resultContentEl.innerHTML = "";

  if (
    checkedConcernIds.length === 0 &&
    checkedPostureIds.length === 0 &&
    checkedSportIds.length === 0 &&
    asymmetryEntries.length === 0
  ) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "悩み・姿勢評価・運動経歴のいずれかを1つ以上選んでください。";
    resultContentEl.appendChild(message);
    resultEl.hidden = false;
    return;
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

  ASYM_POINT_KEYS.forEach((key) => {
    const p = points[key];
    const isDragging = key === backPhotoState.dragKey;

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
  });
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

function findNearestAsymPointKey(pos) {
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
  return nearestKey;
}

if (backPhotoCanvasEl) {
  backPhotoCanvasEl.addEventListener("pointerdown", (evt) => {
    if (!backPhotoState.points) return;
    const pos = getBackCanvasPoint(evt);
    const key = findNearestAsymPointKey(pos);
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

    const lifted = {
      x: pos.x,
      y: Math.max(pos.y - getDragLiftOffset(backPhotoCanvasEl), 0),
    };
    backPhotoState.points[backPhotoState.dragKey] = lifted;
    redrawBackPhotoCanvas();
    evt.preventDefault();
  });

  const endBackDrag = (evt) => {
    if (!backPhotoState.dragKey) return;
    backPhotoState.dragKey = null;
    backPhotoState.dragFingerPos = null;
    applyAsymmetryMatch();
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
