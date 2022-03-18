let asmaaContent = document.querySelector(".asmaa .esm"),
  asmaaPopup = document.querySelector(".asmaa-popup"),
  popupContainer = document.querySelector(".asmaa-container");

getAmsaa();
function getAmsaa() {
  fetch("../js/api/asmaa.json")
    .then((response) => response.json())
    .then((data) => {
      asmaaContent.innerHTML = "";

      let asmaaAllah = data.data;
      asmaaAllah.forEach((esm) => {
        asmaaContent.innerHTML += `<p>${esm.name}</p>`;
      });

      let allNames = document.querySelectorAll(".asmaa .esm p");

      allNames.forEach((title, index) => {
        title.addEventListener("click", () => {
          asmaaPopup.classList.add("active");

          let asmaaMean = data.data;
          let numOfAsmaa = 101;

          popupContainer.innerHTML = "";

          for (let i = 0; i < numOfAsmaa; i++) {
            popupContainer.innerHTML = `
                <h2>${asmaaMean[index].name}</h2>
                <p>1- ${asmaaMean[index].mean}</p>
                <p>2- ${asmaaMean[index].details}</p>
                <button class="close-asmaa">إغلاق</button>
            `;
          }

          let closeAsmaa = document.querySelector(".asmaa-container .close-asmaa");

          closeAsmaa.addEventListener("click", () => {
            asmaaPopup.classList.remove("active");
          });
        });
      });
    });
}
