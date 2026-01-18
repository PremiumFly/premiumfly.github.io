// 言語データ
const LANG = {
  jp: {
    title: "Premium Fly",
    subtitle: "サバイバルやアドベンチャーでもクリエイティブのように飛べるプラグイン",
    download: { title:"ダウンロード", version:"最新版: ", btn:"ダウンロード" },
    features: [
      "/pfly @player enable/disable で飛行権限を管理",
      "特定のタグを持つプレイヤーのみ使用可能",
      "サバイバル・アドベンチャーでも飛行可能",
      "軽量・サーバーに負荷が少ない"
    ],
    changelog: ["1.0-SNAPSHOT: 初回リリース、基本機能実装"]
  },
  en: {
    title: "Premium Fly",
    subtitle: "Fly like in Creative in Survival/Adventure mode",
    download: { title:"Download", version:"Latest: ", btn:"Download" },
    features: [
      "/pfly @player enable/disable to manage fly permissions",
      "Only players with specific tags can use",
      "Fly in Survival/Adventure mode",
      "Lightweight, low server impact"
    ],
    changelog: ["1.0-SNAPSHOT: Initial release, basic features implemented"]
  }
};

let currentLang = localStorage.getItem("lang") || "jp";
let currentTheme = localStorage.getItem("theme") || "light";

function applyTheme(theme){
  document.body.className = theme;
  document.querySelector("header").className = theme;
  localStorage.setItem("theme", theme);
}

function toggleTheme(){
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
}

function applyLang(lang){
  const data = LANG[lang];
  document.getElementById("title").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;
  document.getElementById("download-title").textContent = data.download.title;
  document.getElementById("download-version").innerHTML = data.download.version + "<strong>1.0-SNAPSHOT</strong>";
  document.getElementById("download-btn").textContent = data.download.btn;

  const featList = document.getElementById("features-list");
  featList.innerHTML = "";
  data.features.forEach(f => { let li=document.createElement("li"); li.textContent=f; featList.appendChild(li); });

  const changeList = document.getElementById("changelog-list");
  changeList.innerHTML = "";
  data.changelog.forEach(c => { let li=document.createElement("li"); li.innerHTML=c; changeList.appendChild(li); });

  localStorage.setItem("lang", lang);
  currentLang = lang;
}

function toggleLang(){
  currentLang = currentLang === "jp" ? "en" : "jp";
  applyLang(currentLang);
}

// 初期設定
applyTheme(currentTheme);
applyLang(currentLang);

// ボタンイベント
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);
document.getElementById("toggle-lang").addEventListener("click", toggleLang);
