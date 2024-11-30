function changeLanguage() {
    const selectedLanguage = document.getElementById("language").value; // აირჩიეთ ენა

    // ენის URL-მაპინგი
    const languageUrls = {
      ru: "https://nikaabashidze-github-io.translate.goog/dreamtrip/?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=ru&_x_tr_pto=wapp", // რუსული
      en: "https://nikaabashidze-github-io.translate.goog/dreamtrip/?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=ru&_x_tr_pto=wapp", // ინგლისური
      de: "https://nikaabashidze-github-io.translate.goog/dreamtrip/?_x_tr_sl=auto&_x_tr_tl=de&_x_tr_hl=ru&_x_tr_pto=wapp"  // გერმანული
    };

    // თუ ენა ხელმისაწვდომია, გადადით შესაბამის URL-ზე
    if (languageUrls[selectedLanguage]) {
      window.location.href = languageUrls[selectedLanguage]; // გადამისამართება
    } else {
      console.error("Unsupported language selected: " + selectedLanguage); // შეცდომა
    }
}
