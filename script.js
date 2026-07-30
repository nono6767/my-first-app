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
  renderCheckboxList(postureListEl, POSTURE_ASSESSMENTS, "posture");
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
      nameEl.textContent = exercise.name;
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

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedConcernIds = Array.from(
    formEl.querySelectorAll('input[name="concern"]:checked')
  ).map((input) => input.value);

  const checkedPostureIds = Array.from(
    formEl.querySelectorAll('input[name="posture"]:checked')
  ).map((input) => input.value);

  const asymmetryEntries = Object.entries(asymmetrySelections).filter(
    ([, side]) => side
  );

  resultContentEl.innerHTML = "";

  if (
    checkedConcernIds.length === 0 &&
    checkedPostureIds.length === 0 &&
    asymmetryEntries.length === 0
  ) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "悩み・姿勢評価のいずれかを1つ以上選んでください。";
    resultContentEl.appendChild(message);
    resultEl.hidden = false;
    return;
  }

  if (checkedConcernIds.length > 0) {
    resultContentEl.appendChild(buildSectionHeading("お悩みに対するご提案"));
    checkedConcernIds.forEach((id) => {
      const concern = CONCERNS.find((c) => c.id === id);
      if (concern) resultContentEl.appendChild(buildConcernBlock(concern));
    });
  }

  if (checkedPostureIds.length > 0 || asymmetryEntries.length > 0) {
    resultContentEl.appendChild(
      buildSectionHeading("姿勢評価に基づくご提案")
    );
    checkedPostureIds.forEach((id) => {
      const posture = POSTURE_ASSESSMENTS.find((p) => p.id === id);
      if (posture) resultContentEl.appendChild(buildConcernBlock(posture));
    });
    asymmetryEntries.forEach(([id, side]) => {
      const item = ASYMMETRY_ITEMS.find((a) => a.id === id);
      if (item) resultContentEl.appendChild(buildAsymmetryBlock(item, side));
    });
  }

  resultEl.hidden = false;
});
