let roqiaBtn = document.querySelectorAll(".roqia-btn > div");
let roqiaContainer = document.querySelectorAll(".roqia-container .container > div");
const mnSonah = document.querySelector(".mnSonah");
const mnQuran = document.querySelector(".mnQuran");

roqiaBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".roqia-btn .active").classList.remove("active");
    btn.classList.add("active");

    roqiaContainer.forEach((el) => {
      el.style.display = "none";
    });

    document.querySelector(e.currentTarget.dataset.content).style.display = "block";
  });
});

getRoqqiaQuran();
function getRoqqiaQuran() {
  fetch("../js/api/roqia.json")
    .then((response) => response.json())
    .then((data) => {
      mnSonah.innerHTML = "";
      let roqqiaQuran = data.data1;

      roqqiaQuran.forEach((el) => {
        mnSonah.innerHTML += `<p>${el.zekr}</p>`;
      });
    });
}

getRoqqiaSonah();
function getRoqqiaSonah() {
  fetch("../js/api/roqia.json")
    .then((response) => response.json())
    .then((data) => {
      mnQuran.innerHTML = "";
      let roqqiaSonah = data.data2;

      roqqiaSonah.forEach((el) => {
        mnQuran.innerHTML += `<p>${el.zekr}</p>`;
      });
    });
}
