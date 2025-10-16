function setLanguage(lang) {
  if (!translations[lang]) return;
  
  // обновляем все элементы с data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (!text) return;

    // если в тексте есть HTML — вставляем как HTML
    if (text.includes("<")) {
      el.innerHTML = text;
    } else {
      el.textContent = text;
    }
  });

  localStorage.setItem("lang", lang);
}

// при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);
});
