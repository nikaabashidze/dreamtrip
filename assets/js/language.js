function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;

  // Google Translate URL
  const languageUrls = {
    ru: "https://translate.google.com/translate?sl=auto&tl=ru&u=https://georgianguide.com/",
    en: "https://translate.google.com/translate?sl=auto&tl=en&u=https://georgianguide.com/",
    de: "https://translate.google.com/translate?sl=auto&tl=de&u=https://georgianguide.com/",
    it: "https://translate.google.com/translate?sl=auto&tl=it&u=https://georgianguide.com/",
    es: "https://translate.google.com/translate?sl=auto&tl=es&u=https://georgianguide.com/",
    lt: "https://translate.google.com/translate?sl=auto&tl=lt&u=https://georgianguide.com/"
};


  if (!selectedLanguage) {
      alert("Please select a language!"); // ენების შერჩევის მოთხოვნა
      return;
  }

  if (languageUrls[selectedLanguage]) {
      window.location.href = languageUrls[selectedLanguage]; // Google Translate-ზე გადამისამართება
  } else {
      console.error("Unsupported language selected: " + selectedLanguage);
  }
}
