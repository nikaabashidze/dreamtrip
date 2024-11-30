function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value;
  
    const languageUrls = {
      en: "https://nikaabashidze-github-io.translate.goog/dreamtrip/?_x_tr_sl=ru&_x_tr_tl=en&_x_tr_hl=ka&_x_tr_pto=wapp",
      ru: "index.html", // 
      de: "https://nikaabashidze-github-io.translate.goog/dreamtrip/?_x_tr_sl=ru&_x_tr_tl=de&_x_tr_hl=ka&_x_tr_pto=wapp"
    };
  
    if (languageUrls[selectedLanguage]) {
      window.location.href = languageUrls[selectedLanguage];
    }
  }
  