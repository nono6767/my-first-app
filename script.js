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

const GENDERS = [
  { id: "male", label: "男性" },
  { id: "female", label: "女性" },
];

const genderListEl = document.getElementById("gender-list");
const concernListEl = document.getElementById("concern-list");
const formEl = document.getElementById("concern-form");
const resultEl = document.getElementById("result");
const resultContentEl = document.getElementById("result-content");

let selectedGender = null;

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

function renderConcernList() {
  const checkedBefore = new Set(
    Array.from(formEl.querySelectorAll('input[name="concern"]:checked')).map(
      (input) => input.value
    )
  );

  concernListEl.innerHTML = "";

  CONCERNS.filter((concern) => matchesGender(concern, selectedGender)).forEach(
    (concern) => {
      const chip = document.createElement("label");
      chip.className = "chip";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "concern";
      checkbox.value = concern.id;
      checkbox.checked = checkedBefore.has(concern.id);

      const span = document.createElement("span");
      span.textContent = concern.label;

      chip.appendChild(checkbox);
      chip.appendChild(span);
      concernListEl.appendChild(chip);
    }
  );
}

renderGenderList();
renderConcernList();

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkedIds = Array.from(
    formEl.querySelectorAll('input[name="concern"]:checked')
  ).map((input) => input.value);

  resultContentEl.innerHTML = "";

  if (checkedIds.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "悩みを1つ以上選んでください。";
    resultContentEl.appendChild(message);
    resultEl.hidden = false;
    return;
  }

  checkedIds.forEach((id) => {
    const concern = CONCERNS.find((c) => c.id === id);
    if (!concern) return;

    const block = document.createElement("div");
    block.className = "concern-block";

    const heading = document.createElement("h3");
    heading.textContent = concern.label;
    block.appendChild(heading);

    const list = document.createElement("ul");
    concern.exercises
      .filter((exercise) => matchesGender(exercise, selectedGender))
      .forEach((exercise) => {
        const item = document.createElement("li");
        const nameEl = document.createElement("span");
        nameEl.className = "exercise-name";
        nameEl.textContent = exercise.name;
        const noteEl = document.createElement("span");
        noteEl.className = "exercise-note";
        noteEl.textContent = " — " + exercise.note;
        item.appendChild(nameEl);
        item.appendChild(noteEl);
        list.appendChild(item);
      });
    block.appendChild(list);

    resultContentEl.appendChild(block);
  });

  resultEl.hidden = false;
});
