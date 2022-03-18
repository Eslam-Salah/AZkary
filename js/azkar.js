let zekrContent = document.querySelector(".the_azkar .container");

drawAzkar();
function drawAzkar() {
  fetch("../js/api/azkar-muslim.json")
    .then((response) => response.json())
    .then((d) => {
      let zekr = d.data;

      zekrContent.innerHTML = "";

      zekr.forEach((el) => {
        zekrContent.innerHTML += `
          <div class="zekr">${el.TITLE}</div>
        `;
      });

      let titleAzkar = document.querySelectorAll(".the_azkar .zekr");
      let azkarPopup = document.querySelector(".azkar-popup");
      let azkarContainer = document.querySelector(".azkar-container");
      let closeZekr = document.querySelector(".azkar-popup .close");

      titleAzkar.forEach((title, index) => {
        title.addEventListener("click", () => {
          azkarContainer.innerHTML = "";
          // console.log(title, index);
          fetch(`https://www.hisnmuslim.com/api/ar/${index + 1}.json`)
            .then((response) => response.json())
            .then((data) => {
              let index = Object.keys(data);
              // console.log(index);
              let azkar = data[index];
              // console.log(azkar);
              azkar.forEach((el) => {
                // console.log(el);
                azkarContainer.innerHTML += `<p>${el.ARABIC_TEXT}</p>`;
              });
              azkarPopup.classList.add("active");
            });
        });
        closeZekr.addEventListener("click", () => {
          azkarPopup.classList.remove("active");
        });
      });
    });
}
