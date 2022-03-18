// Quran Page
// Create Quran Surah
let quranContainer = document.querySelector(".quran .quran-content");

getSurah();
function getSurah() {
  fetch("../js/api/quranAPI.json")
    .then((response) => response.json())
    .then((d) => {
      let surahs = d.data.surahs.references;
      let numOfSurahs = d.data.surahs.count;

      quranContainer.innerHTML = "";

      for (let i = 0; i < numOfSurahs; i++) {
        quranContainer.innerHTML += `
          <div class="surah">
            <h4>${surahs[i].name}</h4>
            <p>${surahs[i].englishName}</p>
          </div>
        `;
      }

      let surahsTitle = document.querySelectorAll(".surah"),
        surahPopup = document.querySelector(".surah-popup"),
        ayatContainer = document.querySelector(".ayat-container"),
        closeSurahPopup = document.querySelector(".surah-popup .close");

      surahsTitle.forEach((title, index) => {
        title.addEventListener("click", () => {
          fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`)
            .then((response) => response.json())
            .then((data) => {
              ayatContainer.innerHTML = "";
              surahPopup.classList.add("active");

              let ayat = data.data.ayahs;

              ayat.forEach((aya) => {
                ayatContainer.innerHTML += `
                  <p>${aya.numberInSurah} - ${aya.text}</p>
                `;
              });
            });
        });
        closeSurahPopup.addEventListener("click", () => {
          surahPopup.classList.remove("active");
        });
      });
    });
}
