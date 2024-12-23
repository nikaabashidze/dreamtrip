function changeLanguage() {
  // მიღება ნებისმიერი ენაზე შერჩეული ელემენტის ID
  const selectedLanguageTop = document.getElementById("language").value;
  const selectedLanguageBottom = document.getElementById("language-bottom").value;

  // შერჩეული ენა (მაღლა ან ქვემოთ)
  const selectedLanguage = selectedLanguageTop || selectedLanguageBottom;

  if (!selectedLanguage) {
      alert("Please select a language!"); // ენების შერჩევის მოთხოვნა
      return; // შეჩერება, თუ ენა არ არის შერჩეული
  }

  // ენების მისამართები
  const languageUrls = {
      en: "https://translate.google.com/translate?sl=auto&tl=en&u=https://nikaabashidze.github.io/dreamtrip/",
      ru: "https://translate.google.com/translate?sl=auto&tl=ru&u=https://nikaabashidze.github.io/dreamtrip/",
      de: "https://translate.google.com/translate?sl=auto&tl=de&u=https://nikaabashidze.github.io/dreamtrip/",
      it: "https://translate.google.com/translate?sl=auto&tl=it&u=https://nikaabashidze.github.io/dreamtrip/",
      es: "https://translate.google.com/translate?sl=auto&tl=es&u=https://nikaabashidze.github.io/dreamtrip/",
      lt: "https://translate.google.com/translate?sl=auto&tl=lt&u=https://nikaabashidze.github.io/dreamtrip/"
  };

  // გადაადგილება სწორი URL-ზე
  if (languageUrls[selectedLanguage]) {
      window.location.href = languageUrls[selectedLanguage]; // გადმოსვლა Google Translate-ზე
  } else {
      console.error("Unsupported language selected: " + selectedLanguage);
  }
}










    // ru: "https://translate.google.com/translate?sl=auto&tl=ru&u=https://georgianguide.com/",
    // en: "https://translate.google.com/translate?sl=auto&tl=en&u=https://georgianguide.com/",
    // de: "https://translate.google.com/translate?sl=auto&tl=de&u=https://georgianguide.com/",
    // it: "https://translate.google.com/translate?sl=auto&tl=it&u=https://georgianguide.com/",
    // es: "https://translate.google.com/translate?sl=auto&tl=es&u=https://georgianguide.com/",
    // lt: "https://translate.google.com/translate?sl=auto&tl=lt&u=https://georgianguide.com/"