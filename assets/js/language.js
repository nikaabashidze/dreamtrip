function changeLanguage() {
  const selectedLanguage = document.getElementById("language").value;

  // Google Translate URL
  const languageUrls = {
      ru: "https://translate.google.com/translate?sl=auto&tl=ru&u=https://nikaabashidze.github.io/dreamtrip/",
      en: "https://translate.google.com/translate?sl=auto&tl=en&u=https://nikaabashidze.github.io/dreamtrip/",
      de: "https://translate.google.com/translate?sl=auto&tl=de&u=https://nikaabashidze.github.io/dreamtrip/"
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
