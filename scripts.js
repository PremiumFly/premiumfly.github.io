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
  },
  "zh-cn": {
    title: "Premium Fly",
    subtitle: "在生存/冒险模式中像创造模式一样飞行的插件",
    download: { title:"下载", version:"最新版本: ", btn:"下载" },
    features: [
      "/pfly @player enable/disable 管理飞行权限",
      "仅特定标签的玩家可使用",
      "可在生存/冒险模式飞行",
      "轻量，服务器负载低"
    ],
    changelog: ["1.0-SNAPSHOT: 初始版本，基本功能实现"]
  },
  "zh-tw": {
    title: "Premium Fly",
    subtitle: "在生存/冒險模式中像創造模式一樣飛行的插件",
    download: { title:"下載", version:"最新版本: ", btn:"下載" },
    features: [
      "/pfly @player enable/disable 管理飛行權限",
      "僅特定標籤的玩家可使用",
      "可在生存/冒險模式飛行",
      "輕量，伺服器負載低"
    ],
    changelog: ["1.0-SNAPSHOT: 初始版本，基本功能實現"]
  },
  ko: {
    title: "Premium Fly",
    subtitle: "서바이벌/어드벤처 모드에서도 크리에이티브처럼 날 수 있는 플러그인",
    download: { title:"다운로드", version:"최신 버전: ", btn:"다운로드" },
    features: [
      "/pfly @player enable/disable 로 비행 권한 관리",
      "특정 태그를 가진 플레이어만 사용 가능",
      "서바이벌/어드벤처 모드에서 비행 가능",
      "가벼움, 서버 부하 적음"
    ],
    changelog: ["1.0-SNAPSHOT: 초기 릴리스, 기본 기능 구현"]
  }
};

// 初期値取得
let currentLang = localStorage.getItem("lang") || "jp";
let currentTheme = localStorage.getItem("theme") || "light";

// テーマ適用
function applyTheme(theme){
  document.body.className = theme;
  document.querySelector("header").className = theme;
  localStorage.setItem("theme", theme);
}

// テーマ切替
function toggleTheme(){
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
}

// 言語適用
function applyLang(lang){
  const data = LANG[lang];
  // ヘッダー
  document.getElementById("title").textContent = data.title;
  document.getElementById("subtitle").textContent = data.subtitle;

  // ダウンロード
  document.getElementById("download-title").textContent = data.download.title;
  document.getElementById("download-version").innerHTML = data.download.version + "<strong>1.0-SNAPSHOT</strong>";
  document.getElementById("download-btn").textContent = data.download.btn;

  // 機能リスト
  const featList = document.getElementById("features-list");
  featList.innerHTML = "";
  data.features.forEach(f => {
    const li = document.createElement("li");
    li.textContent = f;
    featList.appendChild(li);
  });

  // 更新情報
  const changeList = document.getElementById("changelog-list");
  changeList.innerHTML = "";
  data.changelog.forEach(c => {
    const li = document.createElement("li");
    li.innerHTML = c;
    changeList.appendChild(li);
  });

  // セレクトボックス同期
  document.getElementById("select-lang").value = lang;

  // localStorage 保存
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

// セレクトボックス変更時
document.getElementById("select-lang").addEventListener("change", (e)=>{
  applyLang(e.target.value);
});

// ダーク/ライトボタン
document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// 初期設定
applyTheme(currentTheme);
applyLang(currentLang);
