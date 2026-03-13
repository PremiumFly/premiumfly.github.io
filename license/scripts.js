const LICENSE_TEXT = {
  jp: `MIT License

Copyright (c) 2026 PremiumFly

以下省略…`,
  en: `MIT License

Copyright (c) 2026 PremiumFly

Permission is hereby granted, free of charge, ...`,
  "zh-cn": `MIT License

版权所有 (c) 2026 PremiumFly

允许任何人免费使用...`,
  "zh-tw": `MIT License

版權所有 (c) 2026 PremiumFly

允許任何人免費使用...`,
  ko: `MIT License

저작권 (c) 2026 PremiumFly

무료 사용을 허가합니다...`
};

function applyLicenseLang(lang){
  const pre = document.getElementById("license-text");
  if(pre) pre.textContent = LICENSE_TEXT[lang];
}

document.getElementById("select-lang").addEventListener("change",(e)=>{
  const lang = e.target.value;
  applyLang(lang);
  applyLicenseLang(lang);
});

applyLicenseLang(currentLang);
