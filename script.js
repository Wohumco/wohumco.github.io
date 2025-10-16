function setLanguage(lang) {
  const text = translations[lang]?.GoalsAndSolutionsText || "Translation not found";
  document.getElementById("goal-text").innerHTML = text;
  localStorage.setItem("lang", lang);
}

window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "ru";
  setLanguage(savedLang);
});
