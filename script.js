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

// 姿勢の側面シルエット図（横から見た人型イメージ）。共通パーツ：
// plumb = 基準の垂直線 / head・neck・torso・pelvis・shoulder-cap・leg = 体の各パーツ（塗りつぶし）
// highlight（アクセントカラーで塗りつぶし）= そのタイプの特徴的な部分
const POSTURE_PLUMB = '<line x1="41" y1="4" x2="41" y2="136" class="plumb"/>';
const POSTURE_LEG = '<path d="M45,96 L47,128 L51,133 L37,133 L33,128 L35,96 Z" class="part"/>';
const POSTURE_HEAD_NEUTRAL = '<circle cx="42" cy="15" r="8" class="part"/>';
const POSTURE_NECK_NEUTRAL = '<path d="M38,22 L46,22 L48,29 L36,29 Z" class="part"/>';
const POSTURE_TORSO_NEUTRAL =
  '<path d="M50,30 C52,40 52,48 50,54 C48,60 48,68 47,78 L37,78 C35,68 35,60 34,54 C33,48 33,40 33,30 Z" class="part"/>';
const POSTURE_PELVIS_NEUTRAL =
  '<rect x="31" y="78" width="20" height="18" rx="7" class="part"/>';

const POSTURE_DIAGRAMS = {
  "kyphosis-lordosis": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    ${POSTURE_PELVIS_NEUTRAL}
    <path d="M50,30 C52,40 52,48 50,54 C54,62 56,70 54,78 L38,78 C36,70 34,62 32,54 C26,48 24,40 28,30 Z" class="part highlight"/>
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
  "flat-back": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    ${POSTURE_PELVIS_NEUTRAL}
    <path d="M48,30 C48,42 48,52 47,58 C46,66 46,74 45,78 L37,78 C37,74 37,66 36,58 C35,52 35,42 35,30 Z" class="part highlight"/>
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
  "posture-sway-back": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    <path d="M54,96 L47,128 L51,133 L37,133 L33,128 L44,96 Z" class="part"/>
    <g transform="translate(9,0)"><rect x="31" y="78" width="20" height="18" rx="7" class="part highlight"/></g>
    <path d="M50,30 C51,42 51,52 49,58 C48,66 47,74 46,78 L36,78 C35,72 30,64 28,54 C26,46 28,38 32,30 Z" class="part highlight"/>
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
  "forward-head": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    ${POSTURE_PELVIS_NEUTRAL}
    ${POSTURE_TORSO_NEUTRAL}
    <path d="M53,21 L61,23 L52,30 L36,30 Z" class="part highlight"/>
    <circle cx="57" cy="14" r="8" class="part highlight"/>
  </svg>`,
  "rounded-shoulders": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    ${POSTURE_PELVIS_NEUTRAL}
    ${POSTURE_TORSO_NEUTRAL}
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
    <ellipse cx="50" cy="32" rx="8" ry="7" class="part highlight"/>
  </svg>`,
  "posture-round-back": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    ${POSTURE_PELVIS_NEUTRAL}
    <path d="M50,30 C52,40 52,48 50,54 C48,60 48,68 47,78 L37,78 C35,68 32,60 28,52 C24,44 26,36 30,30 Z" class="part highlight"/>
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
  "anterior-pelvic-tilt": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    <g transform="rotate(22 41 87)">
      <rect x="31" y="80" width="20" height="14" rx="4" class="part highlight"/>
      <rect x="48" y="83" width="7" height="8" rx="2" class="part highlight"/>
    </g>
    ${POSTURE_TORSO_NEUTRAL}
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
  "posterior-pelvic-tilt": `<svg viewBox="0 0 80 140" class="posture-diagram">
    ${POSTURE_PLUMB}
    ${POSTURE_LEG}
    <g transform="rotate(-22 41 87)">
      <rect x="31" y="80" width="20" height="14" rx="4" class="part highlight"/>
      <rect x="48" y="83" width="7" height="8" rx="2" class="part highlight"/>
    </g>
    ${POSTURE_TORSO_NEUTRAL}
    ${POSTURE_NECK_NEUTRAL}
    ${POSTURE_HEAD_NEUTRAL}
  </svg>`,
};

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
    label: "猫背",
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
