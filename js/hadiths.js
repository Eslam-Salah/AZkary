let hadith_container = document.querySelector(".hadith_container"),
  nextHadith = document.querySelector(".hadithBtns .next"),
  prevHadith = document.querySelector(".hadithBtns .prev"),
  numberBtn = document.querySelector(".hadithBtns .number");

let count = 0;

hadithChanger();
function hadithChanger() {
  fetch("../js/api/300 Hadith API.json")
    .then((response) => response.json())
    .then((data) => {
      let myHadiths = data.data.hadiths;
      changeHadith();

      nextHadith.addEventListener("click", () => {
        count == 299 ? (count = 0) : count++;
        changeHadith();
      });

      prevHadith.addEventListener("click", () => {
        count == 0 ? (count = 299) : count--;
        changeHadith();
      });

      function changeHadith() {
        hadith_container.innerHTML = myHadiths[count].arab;
        numberBtn.innerHTML = `300 / ${count + 1}`;
      }
    });
}
