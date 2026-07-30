// 「悩み」と「おすすめエクササイズ」の対応表。
// ここに項目を追加・編集していけば、提案の内容を増やせます。
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
    ],
  },
  {
    id: "tight-hips",
    label: "股関節の硬さ",
    exercises: [
      { name: "ヒップオープナー", note: "股関節まわりをゆっくり広げる" },
      { name: "スパインツイスト", note: "上半身のひねりと合わせて股関節の柔軟性を促す" },
      { name: "マーメイド", note: "体側を伸ばしながら股関節まわりをほぐす" },
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
    exercises: [
      { name: "軽めのペルビックカール", note: "無理のない範囲で骨盤まわりを動かす" },
      { name: "骨盤底筋エクササイズ", note: "呼吸と合わせて骨盤底筋をやさしく鍛える" },
      { name: "優しいブリッジ", note: "腰やお腹に負担をかけずに体幹を使う" },
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

const concernListEl = document.getElementById("concern-list");
const formEl = document.getElementById("concern-form");
const resultEl = document.getElementById("result");
const resultContentEl = document.getElementById("result-content");

// チェックボックスの一覧を画面に表示する
CONCERNS.forEach((concern) => {
  const label = document.createElement("label");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "concern";
  checkbox.value = concern.id;

  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(concern.label));
  concernListEl.appendChild(label);
});

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
    concern.exercises.forEach((exercise) => {
      const item = document.createElement("li");
      item.textContent = `${exercise.name} — ${exercise.note}`;
      list.appendChild(item);
    });
    block.appendChild(list);

    resultContentEl.appendChild(block);
  });

  resultEl.hidden = false;
});
